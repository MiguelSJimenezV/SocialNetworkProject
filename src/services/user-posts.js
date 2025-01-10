import {
  collection,
  query,
  orderBy,
  where,
  getDocs,
  doc,
  getDoc,
  addDoc,
  updateDoc,
  deleteDoc,
  serverTimestamp,
  onSnapshot,
} from "firebase/firestore";
import { db } from "./firebase";

// Función para obtener todas las publicaciones con suscripción
export const subscribeToAllPosts = (callback) => {
  const postsCollection = collection(db, "posts");
  const q = query(postsCollection, orderBy("createdAt", "desc"));

  return onSnapshot(q, async (querySnapshot) => {
    const posts = await Promise.all(
      querySnapshot.docs.map(async (docSnapshot) => {
        const postData = docSnapshot.data();
        if (!postData.createdBy) {
          console.error("Post data is missing 'createdBy' field:", postData);
          return null;
        }
        try {
          const userRef = doc(db, "users", postData.createdBy);
          const userDoc = await getDoc(userRef);
          const userName = userDoc.exists()
            ? userDoc.data().name
            : "Usuario desconocido";
          const userEmail = userDoc.exists()
            ? userDoc.data().email
            : "Email desconocido";
            const userPhoto = userDoc.exists()
            ? userDoc.data().photoURL
            : "Foto desconocida";

          return {
            id: docSnapshot.id,
            ...postData,
            userName,
            userEmail,
            userPhoto,
          };
        } catch (error) {
          console.error("Error fetching user data:", error);
          return null;
        }
      })
    );
    callback(posts.filter((post) => post !== null));
  });
};

// Función para obtener las publicaciones del usuario registrado con suscripción
export const subscribeToUserPosts = (userId, callback) => {
  const postsCollection = collection(db, "posts");
  const q = query(
    postsCollection,
    where("createdBy", "==", userId),
    orderBy("createdAt", "desc")
  );

  return onSnapshot(q, async (querySnapshot) => {
    const posts = await Promise.all(
      querySnapshot.docs.map(async (docSnapshot) => {
        const postData = docSnapshot.data();
        if (!postData.createdBy) {
          console.error("Post data is missing 'createdBy' field:", postData);
          return null;
        }
        try {
          const userRef = doc(db, "users", postData.createdBy);
          const userDoc = await getDoc(userRef);
          const userName = userDoc.exists()
            ? userDoc.data().name
            : "Usuario desconocido";
          const userEmail = userDoc.exists()
            ? userDoc.data().email
            : "Email desconocido";
            const userPhoto = userDoc.exists()
            ? userDoc.data().photoURL
            : "Foto desconocida";

          return {
            id: docSnapshot.id,
            ...postData,
            userName,
            userEmail,
            userPhoto,
          };
        } catch (error) {
          console.error("Error fetching user data:", error);
          return null;
        }
      })
    );
    callback(posts.filter((post) => post !== null));
  });
};

// Función para crear una nueva publicación
export const createPost = async (post) => {
  const postsCollection = collection(db, "posts");

  const newPost = {
    ...post,
    createdAt: serverTimestamp(),
  };

  const docRef = await addDoc(postsCollection, newPost);
  return docRef.id;
};

// Función para actualizar una publicación
export const updatePost = async (postId, updatedPost) => {
  const postRef = doc(db, "posts", postId);

  await updateDoc(postRef, updatedPost);
};

// Función para eliminar una publicación
export const deletePost = async (postId) => {
  const postRef = doc(db, "posts", postId);

  await deleteDoc(postRef);
};

// Función para dar like a una publicación
export const likePost = async (postId, userId) => {
  const postRef = doc(db, "posts", postId);
  const postDoc = await getDoc(postRef);

  if (postDoc.exists()) {
    const postData = postDoc.data();
    const likes = postData.likes || 0;

    await updateDoc(postRef, { likes: likes + 1 });
  } else {
    throw new Error("Post not found");
  }
};

// Función para agregar un comentario a una publicación
export const commentPost = async (postId, newComment) => {
  const postRef = doc(db, "posts", postId);
  const postDoc = await getDoc(postRef);

  if (postDoc.exists()) {
    const postData = postDoc.data();
    const comments = postData.comments || [];

    comments.push(newComment);
    await updateDoc(postRef, { comments: comments.filter(Boolean) });
  } else {
    throw new Error("Post not found");
  }
};

export const uploadImage = async (file) => {
  const storageRef = ref(storage, `images/${uuidv4()}`);
  await uploadBytes(storageRef, file);
  return await getDownloadURL(storageRef);
};

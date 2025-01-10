import {
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
  createUserWithEmailAndPassword,
  getAuth,
} from "firebase/auth";
import { auth } from "./firebase";
import { editUserProfile, getUserProfileById } from "./user-profiles";
import { getFirestore, doc, setDoc } from "firebase/firestore";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";

let loggedUser = {
  id: null,
  email: null,
  displayName: null,
  bio: null,
  career: null,
  photoURL: null,
};

// Array para los observers.
let observers = [];
onAuthStateChanged(auth, (user) => {
  if (user) {
    loggedUser = {
      id: user.uid,
      email: user.email,
      displayName: user.displayName,
      photoURL: user.photoURL,
    };

    getUserProfileById(user.uid).then((profile) => {
      loggedUser = {
        ...loggedUser,
        bio: profile.bio,
        career: profile.career,
      };
      notifyAll();
    });
  } else {
    loggedUser = {
      id: null,
      email: null,
      displayName: null,
      bio: null,
      career: null,
      photoURL: null,
    };
    notifyAll();
  }
});

/**
 * Registra un nuevo usuario.
 *
 * @param {string} email - El correo electrónico del usuario.
 * @param {string} password - La contraseña del usuario.
 * @param {string} name - El nombre del usuario.
 * @param {File} profileImage - La imagen de perfil del usuario.
 */
export async function register(email, password, name, profileImage) {
  try {
    // Validar los parámetros de entrada
    if (!email || !password || !name || !profileImage) {
      throw new Error("Todos los campos son obligatorios.");
    }

    // Crear usuario en Firebase Authentication
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );

    // Obtener el UID del usuario recién creado
    const user = userCredential.user;

    // Subir la imagen de perfil a Firebase Storage
    const storage = getStorage();
    const storageRef = ref(storage, `profileImages/${user.uid}`);
    await uploadBytes(storageRef, profileImage);
    const photoURL = await getDownloadURL(storageRef);

    // Actualizar el perfil del usuario con el nombre de usuario y la foto de perfil
    await updateProfile(user, { displayName: name, photoURL });

    // Guardar el nombre de usuario y la foto de perfil en Firestore
    const db = getFirestore();
    await setDoc(doc(db, "users", user.uid), {
      name: name,
      email: email,
      photoURL: photoURL,
    });

    console.log("Usuario registrado: ", user);
  } catch (error) {
    console.error("[auth.js register] Error al registrar: ", error);
    throw error;
  }
}

/**
 * Inicia sesión con correo electrónico y contraseña.
 *
 * @param {string} email - El correo electrónico del usuario.
 * @param {string} password - La contraseña del usuario.
 */
export async function login(email, password) {
  const auth = getAuth();
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    console.log("Usuario autenticado: ", userCredential.user);
    return userCredential.user;
  } catch (error) {
    console.error("[auth.js login] Error al autenticar: ", error);
    throw error;
  }
}

/**
 * Edita el perfil del usuario autenticado.
 *
 * @param {{displayName: string, bio: string, career: string}} data
 */
export async function editMyProfile({ displayName, bio, career }) {
  try {
    const promiseAuth = updateProfile(auth.currentUser, { displayName });

    const promiseFirestore = editUserProfile(loggedUser.id, {
      displayName,
      bio,
      career,
    });

    await Promise.all([promiseAuth, promiseFirestore]);

    loggedUser = {
      ...loggedUser,
      displayName,
      bio,
      career,
    };
  } catch (error) {
    console.error("[auth.js editMyProfile] Error al editar el perfil: ", error);
    throw error;
  }
}

export async function logout() {
  await signOut(auth);
}

/**
 * Suscribe un observer a los cambios de autenticación.
 *
 * @param {Function} callback - El observer a asociar.
 * @returns {Function} Función para cancelar la suscripción del observer.
 */
export function subscribeToAuthChanges(callback) {
  observers.push(callback);

  console.log("Observer agregado. El stack actual es: ", observers);

  notify(callback);

  return () => {
    // Eliminamos el callback del array de observers.
    observers = observers.filter((obs) => obs !== callback);
    console.log("Observer eliminado. El stack actual es: ", observers);
  };
}

/**
 * Notifica a un observer con el estado actual del usuario.
 *
 * @param {Function} callback
 */
function notify(callback) {
  console.log("Notificando a un observer...");
  callback({ ...loggedUser });
}

/**
 * Notifica a todos los observers.
 */
function notifyAll() {
  observers.forEach((callback) => notify(callback));
}

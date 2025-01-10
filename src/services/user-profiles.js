import { doc, getDoc, updateDoc } from "firebase/firestore";
import { db } from "./firebase";

/**
 *
 * @param {string} id
 * @returns {Promise<{id: string, email: string, displayName: string|null, bio: string|null, career: string|null}>}
 */
export async function getUserProfileById(id) {
  const userRef = doc(db, `users/${id}`);

  const userDoc = await getDoc(userRef);

  return {
    id: userDoc.id,
    ...userDoc.data(),
  };
}

/**
 * Actualiza el perfil del usuario en Firestore.
 * @param {string} id - ID del usuario.
 * @param {Object} data - Datos del perfil del usuario.
 * @param {string} data.displayName - Nombre del usuario.
 * @param {string} data.bio - Biografía del usuario.
 * @param {string} data.career - Carrera del usuario.
 */
export const editUserProfile = async (id, data) => {
  if (!data || !id) {
    throw new Error("ID del usuario o datos del perfil no proporcionados");
  }

  const userRef = doc(db, `users/${id}`);
  const userDoc = await getDoc(userRef);

  if (!userDoc.exists()) {
    throw new Error("El documento del usuario no existe");
  }

  await updateDoc(userRef, {
    displayName: data.displayName,
    bio: data.bio,
    career: data.career,
  });
};

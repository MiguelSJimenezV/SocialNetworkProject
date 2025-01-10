import {
  addDoc,
  collection,
  onSnapshot,
  orderBy,
  query,
  serverTimestamp,
} from "firebase/firestore";

import { db } from "./firebase";

/**
 * Guarda en el servidor el mensaje de chat.
 *
 * @param {{username: string, text: string}} newMessage
 */
export async function savePublicChatMessage({ username, text }) {
  const chatRef = collection(db, "public-chat");

  await addDoc(chatRef, {
    username,
    text,
    created_at: serverTimestamp(),
  });
}

/**
 *
 * @param {Function} callback
 */
export function subscribeToPublicChatMessages(callback) {
  const chatRef = collection(db, "public-chat");

  const chatQuery = query(chatRef, orderBy("created_at"));

  onSnapshot(chatQuery, (snapshot) => {
    const messages = snapshot.docs.map((doc) => {
      return {
        id: doc.id,
        username: doc.data().username,
        text: doc.data().text,
      };
    });
    callback(messages);
  });
}

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA7d59_d_5uJzrioi7Fw4N11PYFBemkc64",
  authDomain: "chat-bd4de.firebaseapp.com",
  databaseURL: "https://chat-bd4de-default-rtdb.firebaseio.com",
  projectId: "chat-bd4de",
  storageBucket: "chat-bd4de.appspot.com",
  messagingSenderId: "419655845615",
  appId: "1:419655845615:web:79838a2adca1e370ddfd1a"
};



export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore(app);
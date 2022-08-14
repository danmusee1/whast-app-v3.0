import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDhfFMuGcnVTT50XDFjOTujwk0g8QL6MfM",
  authDomain: "whatsapp3-7c1e1.firebaseapp.com",
  projectId: "whatsapp3-7c1e1",
  storageBucket: "whatsapp3-7c1e1.appspot.com",
  messagingSenderId: "509632324425",
  appId: "1:509632324425:web:3d15d0449fa6bb7f23b098"
};
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
const auth = getAuth();

const provider = new GoogleAuthProvider();

export {db, auth, provider,  
 };


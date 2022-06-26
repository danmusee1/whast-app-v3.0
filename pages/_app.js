import '../styles/globals.css'
import { useAuthState } from 'react-firebase-hooks/auth';
import {auth, db} from '../firebase';
import Login from "./login";
import Loading from './components//Loading';
import { collection } from "firebase/firestore";
import {useEffect} from "react";
import firebase from 'firebase/app';
import { doc, setDoc } from "firebase/firestore"; 
import { updateDoc, serverTimestamp } from "firebase/firestore";


function MyApp({ Component, pageProps }) {
 const [user,loading] =useAuthState(auth);
 useEffect(() => {
  if (user) {
     setDoc(doc(db,user.uid, "users"),
    {
      email:user.email,
      lastSeen:serverTimestamp(),
      photoURL:user.photoURL,
    },
   
    {merge:true}
    );
   
  }
 
 },[user])
 if (loading) return<Loading/>
 if (!user) return <Login/>
  return <Component {...pageProps} />
}

export default MyApp

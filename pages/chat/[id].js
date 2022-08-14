import Head from "next/head";
import styled from "styled-components";
import ChatScreen from "../components/ChatScreen";
import Sidebar from "../components/Sidebar";
import { useAuthState } from 'react-firebase-hooks/auth';
import { 
  query,
  doc, 
  setDoc,
 getDoc,
 addDoc ,
 updateDoc,
 collection,
 onSnapshot,
 getDocs,
} from "firebase/firestore"; 
import { auth,db } from '/firebase';
import getRecipientEmail from "/utils/getRecipientEmail";

import {  orderBy } from "firebase/firestore"; 
import { useEffect, useState } from "react";
function Chat({chats,messages}) {
  const [user] = useAuthState(auth);
  return (
   <Container>
    <Head>
        <title>Chat with {getRecipientEmail(chats.users,user)}</title>
    </Head>
    
    <Sidebar/>
    <ChatContainer>
  <ChatScreen/>
    </ChatContainer>
    </Container>
  )
}

export default Chat;

export async function getServerSideProps(context){


const messagesRef= collection(db,"chats",context.query.id,"messages");
const q=query(messagesRef, orderBy('timestamp', 'asc'));
const querySnapshot = await getDocs(q);
const messages=querySnapshot.docs.map(doc=>({...doc.data(),id:doc.id, timestamp:doc.data().timestamp?.toDate().getTime()}));
const docRef=doc(db,"chats",context.query.id);
const docSnap=await getDoc(docRef)

const gameRef=doc(db,'chats',context.query.id);
const gameSnap=await getDoc(gameRef);//to get more doc gameref
const chats=gameSnap.data();//




  //prep messages on the server
 console.log( chats, messages);
  
 

  return{
    props:{
      messages:JSON.stringify(docSnap.data()),
      chats:chats,
      id:context.query.id
    }
  }
}
const Container = styled.div`
display:flex`;
const ChatContainer=styled.div`
flex:1;
overflow:scroll;
height:100vh;
::-webkit-scrollbar {
  display:none;
}
-ms-overflow-style:none;
scrollbar-width:none;

`;
import styled from "styled-components";
import {Avatar} from "@mui/material"
import { useAuthState } from 'react-firebase-hooks/auth';
import getRecipientEmail from "/utils/getRecipientEmail";
import { auth } from '/firebase';
import { doc, setDoc,where,query,updateDoc } from "firebase/firestore"; 
import { db } from '/firebase';
import { collection } from "firebase/firestore"; 
import { useRouter } from "next/router";
import {useCollection} from 'react-firebase-hooks/auth';



 function Chat({id, users}) {
  const router = useRouter();
  const [user] =useAuthState(auth);
 const [recipientSnapshot] =query([collection(db,"users"),where('email', "==",getRecipientEmail(users, user)) ]);
   

   const enterChat = () => {
    router.push(`/chat/${id}`)
   }
    
     

    const recipient= recipientSnapshot?.docs?.[0]?.data();
    const recipientEmail = getRecipientEmail(users,user);
    
  return (
   <Container onClick={enterChat}>
    {recipient?(
      <userAvatar src={recipient?.photoURL}/>
    ) : (
      <UserAvatar>{recipientEmail[0]}</UserAvatar>
    )}
    
    <p>{recipientEmail}</p>
    </Container>
   
  );
};
export default Chat;

const Container=styled.div`
display:flex;
align-items:center;
cursor:pointer;
padding:15px;
word-break:break-word; 

:hover{
  background-color:#e9eaeb;
}
`;

const UserAvatar=styled(Avatar)`
margin:2px;
margin-right:15px;

`;
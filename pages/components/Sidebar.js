import styled from "styled-components";
import ChatIcon from '@mui/icons-material/Chat';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Avatar,Button, IconButton } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import { auth,db } from '/firebase';
import { collection, addDoc } from "firebase/firestore"; 
import { useAuthState } from 'react-firebase-hooks/auth';
import * as EmailValidator from "email-validator";
import { useCollection } from 'react-firebase-hooks/firestore';
import { doc, setDoc,where,query } from "firebase/firestore"; 
import Chat from "./Chat";
function Sidebar() {
    const [user] = useAuthState(auth);
    //const  userChatRef=doc(collection(db,'chats')) ;
    const userChatRef = query(collection(db,'chats'),where('users', 'array-contains',user.email));
    const [chatsSnapshot] = useCollection(userChatRef);
    const createChat=()=> {
        const input= prompt(
            "please enter an email address for the user you want to chat with"
            );
            if (!input) return null;
            if (EmailValidator.validate(input) && !chatAlreadyExists(input)  && input !==user.email){
                //add chat into the db chat collection if it does not exist and if vlid
                 addDoc(collection(db, "chats"), {
                    users:[user.email, input],
                  });
            }
    };
     const chatAlreadyExists=(recepientEmail) => 
        !!chatsSnapshot?.docs.find(
            (chat) => 
            chat.data().users.find((user) => user === recepientEmail)?.length >0
        );
    

     
  return (
    
    <Container>
        <Header>
            <UserAvatar src={user.photoURL} onClick={() => auth.signOut()}/>
        
        <IconContainer>
            <IconButton><ChatIcon/></IconButton>
            <IconButton><MoreVertIcon/></IconButton>
        </IconContainer>

</Header>
<Search>
<IconButton><SearchIcon /></IconButton>
<SearchInput placeholder="search or start a new chat"/>
</Search>
<SidebarButton onClick={createChat}>Start a new chart</SidebarButton>

{/*list of chats*/}
{chatsSnapshot?.docs.map((chat) =>[
    <Chat key={chat.id} id={chat.id} users=
    {chat.data().users}/>
])}

    </Container>
  );
}

export default Sidebar;
const SidebarButton=styled(Button)`
width:100%;

δδδ{
    border-top:1px solid whitesmoke;
    border-bottom:1px solid whitesmoke;
}
`;

const Search=styled.div`
display:flex;
align-items:center;
padding:20px;
border-radius:2px;

`;
const SearchInput=styled.input`
outline-width:0;
border:none;
flex:1;
`;
const UserAvatar= styled(Avatar)`
cursor:pointer;
:hover{
    opacity:0.8;
}
`;
const Container=styled.div`


`;
const Header= styled.div`
display:flex;
position:sticky;
top:0;
background-color:white;
z-index:1;
justify-content:space-between;
align-items:center;
padding:15px;
height:80px;
border-bottom:1px solid whitesmoke;

`;
const IconContainer= styled.div``;
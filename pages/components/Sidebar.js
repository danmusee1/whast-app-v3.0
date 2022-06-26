import styled from "styled-components";
import ChatIcon from '@mui/icons-material/Chat';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Avatar,Button, IconButton } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import { auth } from '/firebase';
function Sidebar() {
    const createChat=()=> {
        const input= prompt(
            "please enter an email address for the user you want to chat with"
            );
            if (!input) return null;
    };
  return (
    
    <Container>
        <Header>
            <UserAvatar onClick={() => auth.signOut()}/>
        
        <IconContainer>
            <IconButton><ChatIcon/></IconButton>
            <IconButton><MoreVertIcon/></IconButton>
        </IconContainer>

</Header>
<Search>
<IconButton><SearchIcon /></IconButton>
<SearchInput placeholder="search in chats"/>
</Search>
<SidebarButton onClick={createChat}>Start a new chart</SidebarButton>

    </Container>
  )
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
padding=15px;
height:80px;
border-bottom:1px solid whitesmoke;

`;
const IconContainer= styled.div``;
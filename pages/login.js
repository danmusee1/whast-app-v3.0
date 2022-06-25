import Head from "next/head"
import styled from "styled-components"
import Button from '@mui/material/Button';

function Login() {
  return (
    <Container>
        <Head>
            <title>Login</title>
            </Head>
            <LoginContainer>
                <Logo src=
"https://imgs.search.brave.com/YNAt8hFIqpogTCotf09O-Lnn-1Lu_i2EVs6h_T6PqcA/rs:fit:1200:1200:1/g:ce/aHR0cDovL2xvZnJl/di5uZXQvd3AtY29u/dGVudC9waG90b3Mv/MjAxNi8wNi93aGF0/c0FwcC1sb2dvLTEu/cG5n"/>
<Button variant="outlined">Sign in with Google</Button>

            </LoginContainer>
    </Container>
    

  )
}

export default Login

const Container =styled.div`
display:grid;
place-items:center;
height:100vh;
background-color:whitesmoke;
`;
const LoginContainer= styled.div`
display:flex;
padding:100px;
align-items:center;
background-color:white;
flex-direction:column;
border-radius:9px;
box-shadow:0px 4px 14px -3px rgba(0,0,0,0.7);
`;
const Logo= styled.img`
height:100px;
width:100px;
margin-bottom:50px;
`;
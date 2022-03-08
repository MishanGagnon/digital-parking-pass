import { Button, Container } from "@mantine/core"
import {AuthContext} from "context/UseAuthContext"
import UseAuthContext, { AuthContextProvider } from "context/UseAuthContext"
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth"
import { NextPage } from "next"
import React from "react"
import { useContext } from "react"
import { GoogleLoginButton } from "react-social-login-buttons"
import { auth } from "../../firebase/clientApp"

const provider = new GoogleAuthProvider();


const Form: NextPage = () => {
  return (
    <AuthContextProvider>
      <GoogleButton>

      </GoogleButton>
    </AuthContextProvider>
  )
}


function GoogleButton(){
  const {user, setUser} = useContext(AuthContext)
  return(
    <Container size='sm'>
        <GoogleLoginButton onClick={() => {
          signInWithPopup(auth, provider)
            .then((result) => {
              // This gives you a Google Access Token. You can use it to access the Google API.
              const credential = GoogleAuthProvider.credentialFromResult(result);
              const token = credential.accessToken;
              // The signed-in user info.
              const user = result.user;
              setUser(prevState => prevState = user)
              // ...
            }).catch((error) => {
              // Handle Errors here.
              const errorCode = error.code;
              const errorMessage = error.message;
              // The email of the user's account used.
              const email = error.email;
              // The AuthCredential type that was used.
              const credential = GoogleAuthProvider.credentialFromError(error);
              // ...
            });


        }} />
      </Container>
  )
}
export default Form
import {Container } from "@mantine/core"
import { AuthContextProvider } from "context/UseAuthContext"
import { signOut } from "firebase/auth"
import { NextPage } from "next"
import React from "react"
import { GoogleLoginButton } from "react-social-login-buttons"
import { auth } from "../../firebase/clientApp"
import { useAuthState, useSignInWithGoogle} from 'react-firebase-hooks/auth'



const LogIn: NextPage = ({children}) => {
  const [user, loading, error] = useAuthState(auth)
  if(error){
    console.log(error)
  }
  if(loading){
    console.log("loading")
  }
  if(user){
    console.log(user)
  }
  return (
    <AuthContextProvider>
      {user ? (
        <>
        {children}
        </>
      ) : (
        <GoogleButton/>
      )}
    </AuthContextProvider>
  )
}


function GoogleButton(){
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  return(
    <Container size='sm'>
        <GoogleLoginButton onClick={() => {
          signInWithGoogle()
        }} />
      </Container>
  )
}
export default LogIn
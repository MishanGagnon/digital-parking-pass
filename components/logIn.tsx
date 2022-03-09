import { Button, Container, Group, Text, Image, Center, Menu } from "@mantine/core"
import { signOut } from "firebase/auth"
import { NextPage } from "next"
import React from "react"
import { GoogleLoginButton } from "react-social-login-buttons"
import { auth } from "../firebase/clientApp"
import { useAuthState, useSignInWithGoogle } from 'react-firebase-hooks/auth'



const LogIn: NextPage = ({ children }) => {
  const [user, loading, error] = useAuthState(auth)
  if (user) {
    console.log(user)
  }
  return (
    <>
      {user ? (
        <>
          {
            <div>
              <>
              <Menu control = {<Image radius={30} withPlaceholder width={50} src={user.photoURL != null ? user.photoURL : ""}/>} >
                <Menu.Label>Signed in as {user.displayName}</Menu.Label>
                <Menu.Item onClick={() => signOut(auth)} color = {'red'}>Sign Out</Menu.Item>
              </Menu>
              </>

              <Group position="center" >
                {children}
              </Group>
            </div>
          }
        </>
      ) : (
          <Center style={{ width: "100vw", height: "100vh" }}>
            <GoogleButton />
          </Center>
        )}
    </>
  )
}


function GoogleButton() {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  return (
    <Container size='sm'>
      <GoogleLoginButton onClick={() => {
        signInWithGoogle()
      }} />
    </Container>
  )
}
export default LogIn
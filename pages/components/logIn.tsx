import { Button, Container, Group, Text, Image, Center } from "@mantine/core"
import { signOut } from "firebase/auth"
import { NextPage } from "next"
import React from "react"
import { GoogleLoginButton } from "react-social-login-buttons"
import { auth } from "../../firebase/clientApp"
import { useAuthState, useSignInWithGoogle } from 'react-firebase-hooks/auth'



const LogIn: NextPage = ({ children }) => {
  const [user, loading, error] = useAuthState(auth)
  if (error) {
    console.log(error)
  }
  if (loading) {
    console.log("loading")
  }
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
                <Group direction="row">
                  <Group direction="column" spacing={0}>
                    <Text weight={700}>Signed in as </Text>
                    <Text weight={700}>{user.displayName}</Text>
                  </Group>
                  <Image radius={30} withPlaceholder width={50} src={user.photoURL != null ? user.photoURL : ""}></Image>
                </Group>
                <Button size={'sm'} onClick={() => signOut(auth)}>Sign Out</Button>
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
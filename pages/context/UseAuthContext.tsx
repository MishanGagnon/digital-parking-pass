import { useEffect, useState } from 'react';
import {createContext} from 'react'

export const AuthContext = createContext(null);


export function AuthContextProvider({ children }){
    const [user, setUser] = useState()
    useEffect(()=>{
        console.log(user, "printing from context")
    },[user])
    return (
        <AuthContext.Provider value = {{user, setUser}}>
            { children }
        </AuthContext.Provider>
    )
}

import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword,onAuthStateChanged, updateProfile } from "firebase/auth";
import auth from './Firebase.config';


export const AuthContext = createContext([])

const AuthProvider = ({children}) => {
    const [user,setUser] = useState()

    
    const signup = (email,password) => {
        return createUserWithEmailAndPassword(auth,email,password)
    }

    const profile = (name,image) => {
        return updateProfile(auth.currentUser,{
            displayName: name,
            photoURL: image
        })
    }

    useEffect(()=>{
        const unsubscrive = onAuthStateChanged(auth,(user)=>{
            console.log(user);
            setUser(user)
        })
        return () => {
            unsubscrive()
        }
    },[])

    const userInfo = {
        user,signup,profile
    }

    return (
        <AuthContext.Provider value={userInfo} >
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
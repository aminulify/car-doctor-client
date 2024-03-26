import React, { createContext, useEffect, useState } from 'react';
import { FacebookAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from '../Firebase/firebase.config';

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({children}) => {
    const [user,setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const createUser = (email, password)=>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth,email,password);
    }

    const signInUser = (email, password) =>{
        setLoading(true);
        return signInWithEmailAndPassword(auth,email,password);
    }

    const moreDetailsUser = (name) =>{
         return updateProfile(auth.currentUser,{
            displayName:name, photoURL: "null"
        })
    }

    // google   
    const googleAuthPopUp = () =>{
        setLoading(true);
        const provider = new GoogleAuthProvider();
        return signInWithPopup(auth, provider);
    }

    // facebook 
    const facebookAuthPop = () =>{
        setLoading(true);
        const provider = new FacebookAuthProvider();
        return signInWithPopup(auth, provider);
    }

    // logout 
    const logOut = () =>{
        return signOut(auth);
    }

    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth, currentUser=>{
            setUser(currentUser);
            console.log("user",currentUser);
            setLoading(false);
        })
        return ()=> {
            unSubscribe();
        } 
    },[])

    const authInfo = {
        user,
        loading,
        createUser,
        signInUser,
        moreDetailsUser,
        googleAuthPopUp,
        facebookAuthPop,
        logOut
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { auth } from '../FireBaseConFig/Firebase.config';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';

const googleProvider = new GoogleAuthProvider();
const AuthProvider = ({children}) => {
    const [users, setUsers] = useState(null)
    const [loading, setLoading] = useState(true)

    const per = auth.currentUser;
    console.log(per)

    const createUsers = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const loginUsers = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const googleUsers = () => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }

    const userProfile = (name, photo) => {
       return updateProfile(auth.currentUser, {
            displayName: name, photoURL:photo
        })
    }

    useEffect(()=>{
        const subscriber = onAuthStateChanged(auth, (currentUser)=>{
            setUsers(currentUser)
            setLoading(false)
        })
        return ()=>{
            subscriber()
        }
    },[])

    const logout = () => {
        return signOut(auth)
    }

    const authData = {
        users,
        loading,
        setUsers,
        setLoading,
        createUsers,
        loginUsers,
        googleUsers,
        userProfile,
        logout
    }

    
    return (
        <AuthContext value={authData}>
            {children}
        </AuthContext>
    );
};

export default AuthProvider;
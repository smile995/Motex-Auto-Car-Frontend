import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { createContext, useEffect, useState } from 'react';
import auth from '../FireBase/Firebase';

 export const AuthContext= createContext(null)
const AuthProvider = ({children}) => {
    const [users,setUsers]=useState();
    const [loading,setLoading]=useState(true)
    // creating user by email and password
    const createUser=(email,password)=>{
        setLoading(true)
        createUserWithEmailAndPassword(auth,email,password)
    }

    const signIn=(email,password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }
    const logOut=()=>{
        setLoading(true)
        return(signOut(auth))
    }
    useEffect(()=>{
        const unSubscribe=onAuthStateChanged(auth,currentUser=>{
            console.log('user auth state changes',currentUser);
            setUsers(currentUser);
            setLoading(false)
        })
        return()=>{
            unSubscribe();
        }
    },[])

    const info={
        users,
        createUser,
        loading, 
        setUsers,
        signIn,
        logOut
    }

    return (
        <AuthContext.Provider value={info}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
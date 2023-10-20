import { createUserWithEmailAndPassword } from 'firebase/auth';
import { createContext, useState } from 'react';
import auth from '../FireBase/Firebase';

 export const AuthContext= createContext(null)
const AuthProvider = ({children}) => {
    const [users,setUsers]=useState(null);
    const [loading,setLoading]=useState(true)
    // creating user by email and password
    const createUser=(email,password)=>{
        setLoading(true)
        createUserWithEmailAndPassword(auth,email,password)
    }

    const info={
        users,
        createUser,
        loading
    }

    return (
        <AuthContext.Provider value={info}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
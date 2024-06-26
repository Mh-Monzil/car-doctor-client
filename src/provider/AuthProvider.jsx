import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword,onAuthStateChanged,signInWithEmailAndPassword } from "firebase/auth";
// import { auth } from "firebase/Firebase.init";
import { getAuth } from "firebase/auth";
import { app } from "../firebase/Firebase.init";

export const AuthContext = createContext(null)

const AuthProvider = ({children}) => {
    const auth = getAuth(app);
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(false);

    const createUser = (email,password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const loginUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }

    useEffect(() =>{
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            console.log(currentUser, "currentUser");
            setUser(currentUser);
            setLoading(false);
        }) 
        return () => unSubscribe();
    },[])

    const authInfo = {user,loading, createUser, loginUser}
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
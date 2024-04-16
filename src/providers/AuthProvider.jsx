import { createContext, useEffect, useState } from "react";

// Step - 7 getAuth from firebase   

import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";

import { app } from "../firebase/firebase.config";

// Step -8 auth 

const auth = getAuth(app);

// Step - 1 => CreateContext

export const AuthContext = createContext(null)

const AuthProvider = ({ children }) => {

    // Step - 4 useState()

    const [user, setUser] = useState(null);

    // Step - 5 Loading

    const [loading, setLoading] = useState(true);

    // Step - 6 Go to the main.jsx file and add <AuthProvider>

    // Step - 10 createUserWithEmailAndPassword()

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    // Step - 11 signInWithEmailAndPassword()

    const signIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    // Step - 12 / Final Step LogOut()

    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    }

    // Step - 13 Update profile

    const updateUserProfile = (name, photo) => {
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photo
        })
    }

    // Step - 9 onAuthStateChanged()

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            setLoading(false);
        });
        return () => {
            return unsubscribe();
        }
    }, [])

    // Step - 3 authInfo

    const authInfo = {
        user, loading, createUser, signIn, logOut, updateUserProfile
    }

    return (

        // Step - 2 => AuthContext.Provider and add value = { }

        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
import { createContext, useEffect, useState } from "react";

// Step - 7 getAuth from firebase   

import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";

import { app } from "../firebase/firebase.config";
import useAxiosPublic from "../hooks/useAxiosPublic";

// Step -8 auth 

const auth = getAuth(app);

// Step - 1 => CreateContext

export const AuthContext = createContext(null)

const AuthProvider = ({ children }) => {

    // Step - 4 useState()

    const [user, setUser] = useState(null);

    // Step - 5 Loading

    const [loading, setLoading] = useState(true);

    // Step - 14 GoogleAuth provider

    const googleProvider = new GoogleAuthProvider();

    // Step - 15 JWT Related Work

    const axiosPublic = useAxiosPublic();

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

    // Step - 14.1 GoogleSignIn

    const googleSignIn = () => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }

    // Step - 9 onAuthStateChanged()

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);

            // JWT Related Work -----

            if (currentUser) {
                const userInfo = { email: currentUser.email };
                axiosPublic.post('/jwt', userInfo)
                    .then(res => {
                        if (res.data.token) {
                            localStorage.setItem('access-token', res.data.token)
                        }
                    })
            } else {
                localStorage.removeItem('access-token')
            }
            setLoading(false);
        });
        return () => {
            return unsubscribe();
        }
    }, [axiosPublic])

    // Step - 3 authInfo

    const authInfo = {
        user, loading, createUser, signIn, logOut, updateUserProfile, googleSignIn
    }

    return (

        // Step - 2 => AuthContext.Provider and add value = { }

        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
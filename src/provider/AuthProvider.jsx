import React, { useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";
import {
    createUserWithEmailAndPassword,
    GoogleAuthProvider,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signInWithPopup,
    signOut,
    updateProfile,
} from "firebase/auth";
import { auth } from "../firebase/Firebase.config";
import useAxios from "../hooks/useAxios";

const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [myVehicles, SetMyVehicles] = useState([])
    const axiosInstance = useAxios()
    useEffect(() => {
        if (!user || !user.accessToken) return;
        axiosInstance.get(`/my-bookings?email=${user.email}`, {
            headers: {
                authorization: `Bearer ${user.accessToken}`
            }
        })
            .then(data => {
                SetMyVehicles(data.data)
                setLoading(false)
            })
    }, [axiosInstance, user])

    const createUserWithEmailAndPasswordFunc = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    };

    const updateProfileFunc = (displayName, photoURL) => {
        return updateProfile(auth.currentUser, {
            displayName,
            photoURL,
        });
    };


    const signInWithEmailAndPasswordFunc = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    };
    const signInWithEmailFunc = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    };

    const signoutUserFunc = () => {
        setLoading(true);
        return signOut(auth);
    };

    const authInfo = {
        myVehicles,
        user,
        setUser,
        createUserWithEmailAndPasswordFunc,
        signInWithEmailAndPasswordFunc,
        signInWithEmailFunc,
        signoutUserFunc,
        updateProfileFunc,
        loading,
        setLoading,
        googleProvider,
        auth
    };

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currUser) => {

            setUser(currUser);
            setLoading(false);
        });

        return () => {
            unsubscribe();
        };
    }, []);

    return <AuthContext value={authInfo}>{children}</AuthContext>;
};

export default AuthProvider;
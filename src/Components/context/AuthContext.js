import React, {createContext, useEffect, useState} from 'react';
import {useNavigate} from "react-router-dom";
import axios from "axios";
import jwt_decode from "jwt-decode";


export const AuthContext = createContext({});

function AuthContextProvider({ children }) {
    const [isAuth, toggleIsAuth] = useState(false);
    const [username, setUsername] = useState("");
    const navigate = useNavigate();
    const [status ,setStatus] = useState("pending")


    useEffect(()=> {

        const storedToken = localStorage.getItem('token')

        if ( storedToken ) {
            const decodedToken = jwt_decode(storedToken)
            if ( Math.floor( Date.now() / 1000 ) < decodedToken.exp) {
                console.log( "De gebruiker is NOG STEEDS ingelogd 🔓" )
                setUsername(decodedToken.sub)
                void login()
            } else  {
                console.log( "De token is verlopen" )
                localStorage.removeItem( 'token' )
            }    } else {

            setStatus("done")
            toggleIsAuth(false)
            navigate("/")
        }},[])


    const noAuthAxios= axios.create( {
        baseURL : 'http://localhost:8080'
    });

    const jwToken = localStorage.getItem('token')
    const authAxios = axios.create( {
        baseURL : 'http://localhost:8080',
        headers : {
            Authorization: `Bearer ${jwToken}`,
        },
    });

    function login() {
        toggleIsAuth(true);
        setStatus("done");
    }

    function logout() {
        console.log('Gebruiker is uitgelogd!');
        localStorage.removeItem('token');
        toggleIsAuth(false);
        navigate('/');
    }

    const contextData = {
        authAxios,
        noAuthAxios,
        username,
        setUsername,
        isAuth: isAuth,
        login: login,
        logout: logout,
    };

    return (
        <AuthContext.Provider value={contextData}>
            {status === "done" ? children :  <p>Loading...</p>}
        </AuthContext.Provider>
    );
}

export default AuthContextProvider;
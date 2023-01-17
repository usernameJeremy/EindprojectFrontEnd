import React, { createContext, useState } from 'react';
import {useNavigate} from "react-router-dom";
import axios from "axios";

export const AuthContext = createContext({});

function AuthContextProvider({ children }) {
    const [isAuth, toggleIsAuth] = useState(false);
    const [username, setUsername] = useState("");
    const navigate = useNavigate();
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
        console.log('Gebruiker is ingelogd!');
        localStorage.setItem('token',jwToken);
        toggleIsAuth(true);
        navigate('/profile');
    }

    function logout() {
        console.log('Gebruiker is uitgelogd!');
        localStorage.clear();
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
            {children}
        </AuthContext.Provider>
    );
}

export default AuthContextProvider;
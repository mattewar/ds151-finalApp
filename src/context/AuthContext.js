import React, { createContext, useReducer, useEffect } from "react";
import axios from "axios";
import * as RootNavigation from '../../RootNavigation.js';
import { getToken, setToken } from '../interface/StorageInterface'

const AuthContext = createContext(null);

function authReducer(state, action) {
    switch (action.type) {
        case "signIn":
            return {
                ...state,
                signedIn: true,
                access_token: action.payload,
            };
        case "error":
            return {
                ...state,
                error: action.payload,
            };
        case "signOut":
            return {
                ...state,
                signedIn: false,
                access_token: null,
            };
        default:
            return { ...state };
    }
}

const AuthProvider = ({ children }) => {
    const [authState, dispatch] = useReducer(authReducer, {
        signedIn: false,
        access_token: null,
        error: "",
    });

    const tryLocalSignIn = async () => {
        const access_token = await getToken();
        if (access_token) {
            dispatch({ type: 'signIn', payload: access_token });
            RootNavigation.navigate('Home');
        }
        else {
            dispatch({ type: 'signOut' });
            RootNavigation.navigate('Login');
        }

    }

    const signIn = async ({ apikey }) => {
        try {
            const response = await axios({
                method: "get",
                url: "https://api.nasa.gov/planetary/apod?api_key=" + apikey
            });
            await setToken(apikey);
            dispatch({ type: "signIn", payload: apikey });
            RootNavigation.navigate("Home");
        } catch (err) {
            console.log(err)
            dispatch({
                type: "error",
                payload: "Problemas para autenticar usuário.",
            });
        }
    };

    const signOut = async () => {
        try {
            await setToken('');
            dispatch({ type: "signOut" });
            RootNavigation.navigate('Login');
        } catch (err) {
            console.log(err)
            dispatch({
                type: "error",
                payload: "Problemas para deslogar usuário.",
            });
        }
    };

    return (
        <AuthContext.Provider
            value={{
                authState,
                signIn,
                tryLocalSignIn,
                signOut
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};

export { AuthContext, AuthProvider };

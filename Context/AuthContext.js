import { useEffect, useState, useContext, createContext } from "react"

// context
const AuthContext = createContext();

export function useAuth() {
    return useContext(AuthContext);
}

// provider
export function AuthProvider({ props }) {

    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [authUser, setAuthUser] = useState(null)
    const [authLoading, setAuthLoading] = useState(false);

    const value = {
        authUser, setAuthUser, isLoggedIn, setIsLoggedIn, authLoading, setAuthLoading
    }

    return <AuthContext.Provider value={value}>{props.children}</AuthContext.Provider>

}

// I have created this authContext for authentication of my user
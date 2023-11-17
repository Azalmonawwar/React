import { createContext, useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
export const INITIAL_USER = {
    name: "",
    email: "",
};
const INITIAL_CONTEXT = {
    user: INITIAL_USER,
    setUser: () => { },
    setIsAuth: () => { },
    isAuth: false,
    setIsLoading: () => { },
    isLoading: false,
}

const AuthContext = createContext(INITIAL_CONTEXT);

const AuthContextProvider = () => {
    const [user, setUser] = useState(INITIAL_USER);
    const [isAuth, setIsAuth] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    // checking if user is auth or not

    // checking if user has session or not
    useEffect(() => {
        const cookieFallback = localStorage.getItem("cookieFallback");
        if (
            cookieFallback === "[]" ||
            cookieFallback === null ||
            cookieFallback === undefined
        ) {
            navigate("/sign-in");
        }
    }, []);

    return (
        <AuthContext.Provider value={{ user, setUser, isAuth, setIsAuth, isLoading, setIsLoading }}>
            {children}
        </AuthContext.Provider>
    )

}

export default AuthContextProvider

export const useUserContext = () => useContext(AuthContext);
import { createContext, useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getAccount } from "../appwrite/services";
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

const AuthContextProvider = ({ children }) => {
    const [user, setUser] = useState(INITIAL_USER);
    const [isAuth, setIsAuth] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    // checking if user is auth or not
    const checkAuth = async () => {
        try {
            setIsLoading(true);
            const response = await getAccount();
            setUser({ name: response.name, email: response.email });
            setIsAuth(true);
            setIsLoading(false);
        } catch (error) {
            console.log(error);
            setIsLoading(false);
        }
    }

    // checking if user has session or not
    useEffect(() => {
        checkAuth();
        if (isAuth) {
            navigate("/");

        }

    }, [isAuth]);

    return (
        <AuthContext.Provider value={{ user, setUser, isAuth, setIsAuth, isLoading, setIsLoading }}>
            {children}
        </AuthContext.Provider>
    )

}

export default AuthContextProvider

export const useUserContext = () => useContext(AuthContext);
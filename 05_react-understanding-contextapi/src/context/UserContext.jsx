import { createContext, useState, useContext } from "react";

const UserContext = createContext({

    user: null,
    setUser: () => { },
    isLogIn: false,
    setIsLogIn: () => { }
});


const UserContextProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [isLogIn, setIsLogIn] = useState(false)
    return (
        <UserContext.Provider value={{ user, setUser, isLogIn, setIsLogIn }}>
            {children}
        </UserContext.Provider>
    )
}

export default UserContextProvider

export const useUser = () => useContext(UserContext);

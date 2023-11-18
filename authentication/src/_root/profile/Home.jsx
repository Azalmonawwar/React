import React from 'react'
import { useUserContext } from '../../context/AuthContext'
import { signOutAccount } from '../../appwrite/services'
import { useNavigate } from 'react-router-dom'

const Home = () => {
    const { user, setIsAuth, setUser } = useUserContext()
    const handleLogout = async () => {
        try {
            const res = await signOutAccount()
            setIsAuth(false)
            setUser({ name: "", email: "" })
            console.log(res)
        } catch (error) {

        }
    }
    return (
        <>
            <div>{
                user.name ? `Welcome ${user.name}` : ""
            }</div>
            <button onClick={handleLogout} className='px-4 py-2 bg-black text-white rounded-md'>Logout</button>
        </>
    )
}

export default Home
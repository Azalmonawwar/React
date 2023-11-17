import React from 'react'
import { useUserContext } from '../../context/AuthContext'

const Home = () => {
    const { user } = useUserContext()
    return (
        <div>Home</div>
    )
}

export default Home
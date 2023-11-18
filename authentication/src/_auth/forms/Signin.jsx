import { useState } from "react"
import { signInAccount } from "../../appwrite/services"
import { Link, useNavigate } from "react-router-dom"
import { useUserContext } from "../../context/AuthContext"
const Signin = () => {
    const navigate = useNavigate()
    const { isAuth, setIsAuth, isLoading } = useUserContext()

    if (isAuth) {
        navigate('/')
        return null
    }
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    })

    const handleSignin = async (e) => {
        e.preventDefault()
        try {
            const response = await signInAccount(formData.email, formData.password);
            console.log(response)
            setIsAuth(true)
            navigate('/')
        } catch (error) {
            console.log(error)
        }
    }
    const handleChange = (event) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value
        })

    }
    if (isLoading) {
        return (
            <div className="flex flex-col items-center flex-1 min-h-screen justify-center  bg-slate-900 p-5 ">
                <h1 className="text-xl text-white mb-10 font-bold ">
                    Loading...
                </h1>
            </div>
        )

    }
    return (

        <div className="flex flex-col items-center flex-1 min-h-screen justify-center  bg-slate-900 p-5 ">
            <h1 className="text-xl text-white mb-10 font-bold ">
                Sign In
            </h1>
            <form onSubmit={handleSignin}>
                <div className="relative z-0 w-full mb-6 group">
                    <input onChange={handleChange} value={formData.email} type="email" name="email" id="floating_email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                    <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email address</label>
                </div>
                <div className="relative z-0 w-full mb-6 group">
                    <input onChange={handleChange} value={formData.password} type="password" name="password" id="floating_password" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                    <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Password</label>
                </div>
                <Link to={'/sign-up'} className="text-white mr-2">Not registered yet Signup</Link>


                <button type="submit"

                    className="text-white bg-blue-700
                 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
            </form>
        </div>

    )
}

export default Signin
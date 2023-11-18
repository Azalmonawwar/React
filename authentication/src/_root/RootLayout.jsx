import { Outlet, useNavigate } from "react-router-dom";
import { useUserContext } from "../context/AuthContext";

const RootLayout = () => {
    const { isLoading, isAuth } = useUserContext();
    const navigate = useNavigate();
    if (!isAuth) {
        navigate('/sign-in');
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
        <div className=''>
            <Outlet />
        </div>
    )
}

export default RootLayout
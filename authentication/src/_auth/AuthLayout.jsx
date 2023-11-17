import { Outlet, useNavigate } from "react-router-dom";
import { useUserContext } from "../context/AuthContext";

const AuthLayout = () => {
    const { isAuth } = useUserContext();
    const navigation = useNavigate();
    if (isAuth) {
        navigation("/");
    }
    return (
        <>
            <section className="flex w-full bg-slate-900  min-h-screen justify-center items-center ">
                <Outlet />
                <img
                    src="/images/img.jpg"
                    alt="logo"
                    className="hidden md:block h-screen w-1/2 object-cover bg-no-repeat"
                />
            </section>

        </>
    )

}

export default AuthLayout
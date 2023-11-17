import { Outlet, useNavigate } from "react-router-dom";

const RootLayout = () => {
    return (
        <div className=''>
            <Outlet />
        </div>
    )
}

export default RootLayout
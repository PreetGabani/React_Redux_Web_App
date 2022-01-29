import React from 'react'
import IdleTimer from 'react-idle-timer'
import { useHistory } from 'react-router-dom'
import { toast } from 'react-toastify'

const Idle = () => {

    const history = useHistory();
    const OnIdle = () => {
        const isLogin = localStorage.getItem("isLoggedIn")
        if (isLogin == "true") {
            localStorage.removeItem("isLoggedIn");
            toast.success("Auto Logout Successful", {
                position: "top-center",
                hideProgressBar: true,
                theme: 'colored',
                autoClose: 2000
            });
            history.push("/");
        }
    }

    return (
        <>
            <IdleTimer timeout={60 * 1000} onIdle={OnIdle} />
        </>
    )
}

export default Idle
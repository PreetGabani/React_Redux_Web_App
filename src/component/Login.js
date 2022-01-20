import React, { useState } from 'react'
import Navbar from './Navbar';
import { Card, TextField, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import * as Yup from 'yup';
import { useFormik } from "formik"
import { useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';


const Login = () => {

    // const [loginData,setLoginData] = useState({
    //     email:"",
    //     password:""
    // })

    // const handleEmail=(e)=>{
    //     setLoginData({
    //         ...loginData,
    //             email:e.target.value
    //     })
    // }

    // const handlePassword=(e)=>{
    //     setLoginData({
    //         ...loginData,
    //             password:e.target.value
    //     })
    // }

    // const handleLogin=(e)=>{
    //     e.preventDefault();
    //     console.log(loginData);
    // }

    const [isLoggedIn,setisLoggedIn] = useState(false)
    localStorage.setItem("isLoggedIn",isLoggedIn)
    const Data = useSelector((state) => state.signUpReducer.SignUp);
    const history = useHistory()

    const formik = useFormik({
        initialValues: {
            email: '',
            password: ''
        },
        onSubmit: (val) => { 
            Data.map((item) => {
                if (item.Email == val.email) {
                    if (item.Email == val.email && item.Password == val.password) {
                        toast.success("Login Sucessful", {
                            position: "top-center",
                            hideProgressBar: true,
                            theme: 'colored',
                            autoClose: 2000
                        })
                        setisLoggedIn(true);
                        history.push("/Dashboard");
                    } else if (item.Password !== val.password){
                        toast.error("Password Not Mached", {
                            position: "top-center",
                            hideProgressBar: true,
                            theme: 'colored',
                            autoClose: 2000
                        })
                    }
                    else {
                        toast.error("Login Failed", {
                            position: "top-center",
                            hideProgressBar: true,
                            theme: 'colored',
                            autoClose: 2000
                        })
                        console.log('else');
                    }
                }
            })
        },
        validationSchema: Yup.object({
            email: Yup.string().email('Invalid Email').required('Required!!'),
            password: Yup.string().required('Required!!').min(6).matches("[.!@#$%^&*()_+-=]",
                "At least one special character required").max(12),
        })
    })

    return (
        <>
            <div className="Login">
                <Navbar />
                <div className="logindiv">
                    <Card className="LoginCard shadow-lg">
                        <h4 className="text-center fw-bold text-decoration-underline">Login</h4>
                        <div className="mt-3">
                            <form
                                onSubmit={formik.handleSubmit}
                            // onSubmit={handleLogin}
                            >
                                <div>
                                    <label>Email:</label>
                                    <TextField className="mt-2" autoComplete="off" type="text" id="email" size="small" label="Enter Email" fullWidth
                                        onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.email}
                                    // onChange={handleEmail} 
                                    />
                                    <div>
                                        {
                                            formik.touched.email && formik.errors.email ? (
                                                <small className="text-danger">
                                                    {formik.errors.email}
                                                </small>
                                            ) : null
                                        }
                                    </div>
                                </div>
                                <div className="mt-3">
                                    <label>Password:</label>
                                    <TextField className="mt-2" id="password" autoComplete="off" type="password" size="small" label="Enter Password" fullWidth
                                        onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.password}
                                    // onChange={handlePassword}
                                    />
                                    <div>
                                        {
                                            formik.touched.password && formik.errors.password ? (
                                                <small className="text-danger">
                                                    {formik.errors.password}
                                                </small>
                                            ) : null
                                        }
                                    </div>
                                </div>
                                <Button type="submit" variant="contained" fullWidth className="mt-3 text-capitalize loginBtn">LogIn</Button>
                                <div className="mt-3 justify-content-end d-flex">
                                    <span>New User? &nbsp;<Link className="text-decoration-none link-success" to="/SignUp">Click Here</Link> </span>
                                </div>
                            </form>
                        </div>
                    </Card>
                </div>
            </div>
        </>
    )
}

export default Login

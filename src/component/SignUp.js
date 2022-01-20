import React, { useState } from 'react'
import Navbar from './Navbar';
import { Card, TextField, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import * as Yup from 'yup';
import { useFormik } from "formik"
import { SignUpData } from "../Redux/action/actionindex"
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { useHistory } from 'react-router-dom';


const SignUp = () => {

    // const [signUpData,setSignUpData] = useState({
    //     username:"",
    //     email:"",
    //     password:""
    // })

    // const handleUserName=(e)=>{
    //     setSignUpData({
    //         ...signUpData,
    //             username:e.target.value
    //     })
    // }

    // const handleEmail=(e)=>{
    //     setSignUpData({
    //         ...signUpData,
    //             email:e.target.value
    //     })
    // }

    // const handlePassword=(e)=>{
    //     setSignUpData({
    //         ...signUpData,
    //             password:e.target.value
    //     })
    // }

    // const handleSignUp=(e)=>{
    //     e.preventDefault();
    //     console.log(signUpData);
    // }

    const history = useHistory()


    const formik = useFormik({
        initialValues: {
            username: '',
            email: '',
            password: ''
        },
        onSubmit: (val,{resetForm}) => {
            dispatch(SignUpData(val.username, val.email, val.password))
            toast.success("Register Sucessfully",{
                position: "top-center",
                hideProgressBar: true,
                theme:'colored',
                autoClose:2000
            })
            history.push("/")
            resetForm({val:''})
            // console.log(val);
        },
        validationSchema: Yup.object({
            username: Yup.string().required('Required!!').max(15),
            email: Yup.string().email('Invalid Email').required('Required!!'),
            password: Yup.string().required('Required!!').min(6).matches("[.!@#$%^&*()_+-=]",
                "At least one special character required").max(12),
        })
    })

    const dispatch = useDispatch();


    return (
        <>
            <div className="SignUp">
                <Navbar />
                <div className="signUpdiv">
                    <Card className="signUpCard shadow-lg">
                        <h4 className="text-center fw-bold  text-decoration-underline">SignUp</h4>
                        <div className="mt-3">
                            <form
                                onSubmit={formik.handleSubmit}
                            // onSubmit={handleSignUp}
                            >
                                <div>
                                    <label>UserName:</label>
                                    <TextField className="mt-2" type="text" autoComplete="off" id="username" size="small" label="Enter UserName" fullWidth
                                        // onChange={handleUserName}
                                        onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.username}
                                    />
                                    <div>
                                        {
                                            formik.touched.username && formik.errors.username ? (
                                                <small className="text-danger">
                                                    {formik.errors.username}
                                                </small>
                                            ) : null
                                        }
                                    </div>
                                </div>
                                <div className="mt-3">
                                    <label>Email:</label>
                                    <TextField className="mt-2" type="email" autoComplete="off" size="small" id="email" label="Enter Email" fullWidth
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
                                    <TextField className="mt-2" type="password" autoComplete="off" size="small" id="password" label="Enter Password" fullWidth
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
                                <Button type="submit" variant="contained" fullWidth className="mt-3 text-capitalize signUpBtn">SignUp</Button>
                                <div className="mt-3 justify-content-end d-flex">
                                    <span>Already User? &nbsp;<Link className="text-decoration-none link-success" to="/">Click Here</Link> </span>
                                </div>
                            </form>
                        </div>
                    </Card>
                </div>
            </div>
        </>
    )
}

export default SignUp

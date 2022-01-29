import React, { useState, useEffect } from 'react'
import Navbar from './Navbar';
import { Card, TextField, Button } from '@mui/material';
import * as Yup from 'yup';
import { useFormik } from "formik"
import { CreateProjectData } from "../Redux/action/actionindex"
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { useHistory } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux'
import { EditCreateProjectData } from "../Redux/action/actionindex"


const ProjectEdit = () => {

    const history = useHistory()
    const { id } = useParams();

    const Data = useSelector((state) => state.CreateProjectReducer.CreateProject);
    const CurrData = Data.find((item) => item.id === id)


    const formik = useFormik({
        enableReinitialize: true,
        initialValues: {
            title: CurrData.Title,
            member: CurrData.Member,
            period: CurrData.Period
        },
        onSubmit: (val, { resetForm }) => {
            dispatch(EditCreateProjectData(val.title, val.member, val.period, id))
            toast.success("Project Updated Successful", {
                position: "top-center",
                hideProgressBar: true,
                theme: 'colored',
                autoClose: 2000
            })
            history.push("/Dashboard")
            resetForm({ val: '' })
        },
        validationSchema: Yup.object({
            title: Yup.string().required('Required!!').max(20),
            member: Yup.string().required('Required!!'),
            period: Yup.string().required('Required!!')
        })
    })

    const dispatch = useDispatch();


    return (
        <>
            <div className="editProject">
                <Navbar />
                <div className="editProjectStart">
                    <Card className="editProjectStartCard shadow-lg">
                        <h4 className="text-center fw-bold  text-decoration-underline">Edit Project</h4>
                        <div className="mt-3">
                            <form
                                onSubmit={formik.handleSubmit}
                            >
                                <div>
                                    <label>Project Title:</label>
                                    <TextField className="mt-2" type="text" autoComplete="off" id="title" size="small" label="Enter Project Title" fullWidth
                                        onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.title}
                                    />
                                    <div>
                                        {
                                            formik.touched.title && formik.errors.title ? (
                                                <small className="text-danger">
                                                    {formik.errors.title}
                                                </small>
                                            ) : ""
                                        }
                                    </div>
                                </div>
                                <div className="mt-3">
                                    <label>Team Member:</label>
                                    <TextField className="mt-2" type="number" autoComplete="off" size="small" id="member" label="Enter No. of Team Member" fullWidth
                                        onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.member}
                                    />
                                    <div>
                                        {
                                            formik.touched.member && formik.errors.member ? (
                                                <small className="text-danger">
                                                    {formik.errors.member}
                                                </small>
                                            ) : ""
                                        }
                                    </div>
                                </div>
                                <div className="mt-3">
                                    <label>Time Period:</label>
                                    <TextField className="mt-2" type="text" autoComplete="off" size="small" id="period" label="Entet Time Period" fullWidth
                                        onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.period}
                                    />
                                    <div>
                                        {
                                            formik.touched.period && formik.errors.period ? (
                                                <small className="text-danger">
                                                    {formik.errors.period}
                                                </small>
                                            ) : ""
                                        }
                                    </div>
                                </div>
                                <div className="d-flex">
                                    <Button type="submit" variant="contained" fullWidth className="mt-3 text-capitalize createProjectBtn">Edit Project</Button>
                                    <Button type="submit" variant="contained" fullWidth className="mt-3 text-capitalize cancleBtn" onClick={() => { history.push("/Dashboard") }}>Cancel</Button>
                                </div>
                            </form>
                        </div>
                    </Card>
                </div>
            </div>
        </>
    )
};

export default ProjectEdit;

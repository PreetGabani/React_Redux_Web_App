import React, { useState } from 'react'
import Navbar from './Navbar';
import { Card, TextField, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import * as Yup from 'yup';
import { useFormik } from "formik"
import { CreateProjectData } from "../Redux/action/actionindex"
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { useHistory } from 'react-router-dom';


const CreateProject = () => {

  const history = useHistory()

    const formik = useFormik({
      initialValues: {
          title: '',
          member: '',
          period: ''
      },
      onSubmit: (val,{resetForm}) => {
          dispatch(CreateProjectData(val.title, val.member, val.period))
          toast.success("Project Created Sucessfully",{
              position: "top-center",
              hideProgressBar: true,
              theme:'colored',
              autoClose:2000
          })
          history.push("/Dashboard")
          resetForm({val:''})
          // console.log(val);
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
      <div className="createProject">
        <Navbar />
          <div className="createProjectStart">
            <Card className="createProjectCard shadow-lg">
              <h4 className="text-center fw-bold  text-decoration-underline">Create Project</h4>
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
                                  ) : null
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
                                  ) : null
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
                                  ) : null
                              }
                          </div>
                      </div>
                      <Button type="submit" variant="contained" fullWidth className="mt-3 text-capitalize createProjectBtn">Create Project</Button>
                  </form>
              </div>
              </Card>
          </div>
      </div>
    </>
  )
};

export default CreateProject;

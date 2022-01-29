import React from 'react';
import Navbar from './Navbar';
import MaterialTable from 'material-table';
import { useSelector } from 'react-redux'
import { DeleteCreateProjectData } from "../Redux/action/actionindex"
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';


const Dashboard = () => {
    const history = useHistory()
    const dispatch = useDispatch();

    const Data = useSelector((state) => state.CreateProjectReducer.CreateProject);

    const columns = [
        { title: "Project Title", field: "Title" },
        { title: "No. Of Member", field: "Member" },
        { title: "Time Period", field: "Period" },
    ]

    return (
        <>
            <div className="dashboard">
                <Navbar />
                <div className="ListOfProjectDashboard">
                    <MaterialTable
                        title="Project List"
                        data={Data}
                        columns={columns}
                        options={{
                            // search:false,
                            // title: false,
                            // paging: false,
                            actionsColumnIndex: -1,
                            exportButton:true,
                        }}
                        actions={[
                            {
                                icon: 'delete',
                                tooltip: 'Delete',
                                onClick: (event, rowData) => {
                                    const confirmBox = window.confirm("Do you really want to delete ")
                                    if (confirmBox === true) {
                                        dispatch(DeleteCreateProjectData(rowData.id))
                                        toast.success("Delete Successful", {
                                            position: "top-center",
                                            hideProgressBar: true,
                                            theme: 'colored',
                                            autoClose: 2000
                                        })
                                    }
                                }
                            },
                            {
                                icon: 'edit',
                                tooltip: 'Edit',
                                onClick: (event, rowData) => {
                                    history.push(`/ProjectEdit/${rowData.id}`)
                                }
                            }
                        ]}
                    />
                </div>
            </div>
        </>
    )
}

export default Dashboard

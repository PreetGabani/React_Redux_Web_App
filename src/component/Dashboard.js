import React from 'react';
import Navbar from './Navbar';
import MaterialTable from 'material-table';
import { useSelector } from 'react-redux'


const Dashboard = () => {
    // const history = useHistory()

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
                            // actionsColumnIndex: -1
                        }}
                    />
                    
                </div>
            </div>
        </>
    )
}

export default Dashboard

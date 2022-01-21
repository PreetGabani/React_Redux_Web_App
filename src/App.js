import React, { Suspense, lazy } from 'react'
import Loader from './component/Loader'
// import Login from './component/Login'
// import SignUp from './component/SignUp'
// import Dashboard from './component/Dashboard'
// import CreateProject from './component/CreateProject'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { ToastContainer, Zoom } from 'react-toastify';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import 'react-toastify/dist/ReactToastify.css';
import './App.css';


const Login = lazy(() => new Promise(resolve => {
  setTimeout(() => resolve(import("../src/component/Login")), 3000);
}));
const SignUp = lazy(() => new Promise(resolve => {
  setTimeout(() => resolve(import("../src/component/SignUp")), 3000);
}));
const Dashboard = lazy(() => new Promise(resolve => {
  setTimeout(() => resolve(import("../src/component/Dashboard")), 3000);
}));
const CreateProject = lazy(() => new Promise(resolve => {
  setTimeout(() => resolve(import("../src/component/CreateProject")), 3000);
}));

const App = () => {
  return (
    <>
      <BrowserRouter>
        <ToastContainer transition={Zoom} className="Toast" />
        <Switch>
          <Suspense fallback={<Loader />}>
            <Route exact path="/" component={Login} />
            <Route exact path="/signUp" component={SignUp} />
            <Route exact path="/Dashboard" component={Dashboard} />
            <Route exact path="/CreateProject" component={CreateProject} />
          </Suspense>
        </Switch>
      </BrowserRouter>
    </>
  )
}

export default App

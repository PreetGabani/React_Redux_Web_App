import React, { Suspense, lazy } from 'react'
import { BrowserRouter, Route, Switch, useHistory } from 'react-router-dom';
import { ToastContainer, Zoom, toast } from 'react-toastify';
import Protected from './component/Protected';
import Loader from "./component/Loader"
import Idle from './component/Idle';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import 'react-toastify/dist/ReactToastify.css';
import './App.css';

const Login = lazy(() => new Promise(resolve => {
  setTimeout(() => resolve(import("../src/component/Login")), 1000);
}));
const SignUp = lazy(() => new Promise(resolve => {
  setTimeout(() => resolve(import("../src/component/SignUp")), 1000);
}));
const Dashboard = lazy(() => new Promise(resolve => {
  setTimeout(() => resolve(import("../src/component/Dashboard")), 1000);
}));
const CreateProject = lazy(() => new Promise(resolve => {
  setTimeout(() => resolve(import("../src/component/CreateProject")), 1000);
}));

const ProjectEdit = lazy(() => new Promise(resolve => {
  setTimeout(() => resolve(import("../src/component/ProjectEdit")), 1000);
}))


const App = () => {
  return (
    <>
      <BrowserRouter>
        <ToastContainer transition={Zoom} className="Toast" />
        <Idle />
        <Switch>
          <Suspense fallback={<Loader />}>
            <Route exact path="/" component={Login} />
            <Route exact path="/SignUp" component={SignUp} />
            <Protected exact path="/Dashboard" component={Dashboard} />
            <Protected path="/CreateProject" component={CreateProject} />
            <Protected exact path="/CreateProject" component={CreateProject} />
            <Protected exact path="/ProjectEdit/:id" component={ProjectEdit} />
          </Suspense>
        </Switch>
      </BrowserRouter>
    </>
  )
}

export default App

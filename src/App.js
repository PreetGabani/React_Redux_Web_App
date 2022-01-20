import React from 'react'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import Login from './component/Login'
import SignUp from './component/SignUp'
import Dashboard from './component/Dashboard'
import CreateProject from './component/CreateProject'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { ToastContainer, Zoom } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <ToastContainer transition={Zoom} className="Toast" />
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/signUp" component={SignUp} />
          <Route exact path="/Dashboard" component={Dashboard} />
          <Route exact path="/CreateProject" component={CreateProject} />
        </Switch>
      </BrowserRouter>
    </>
  )
}

export default App

import React from 'react'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import Login from './component/Login'
import SignUp from './component/SignUp'
import Dashboard from './component/Dashboard'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import { ToastContainer, Zoom } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <ToastContainer transition={Zoom} style={{ marginTop: -3 }} />
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/signUp" component={SignUp} />
          <Route exact path="/Home" component={Dashboard} />
        </Switch>
      </BrowserRouter>
    </>
  )
}

export default App

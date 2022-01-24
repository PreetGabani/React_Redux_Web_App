import React from 'react'
import { Navbar, Container, Nav } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'

const navbar = () => {
    const isLogin = localStorage.getItem("isLoggedIn")
    return (
        <>
            <div className="NavBar">
                <Navbar className="navBorder fix-top shadow-lg" expand="lg">
                    <Container>
                        <div className="navCollapse w-100 d-flex justify-content-between">
                            <Navbar.Brand>React Redux Web App</Navbar.Brand>
                            <Navbar.Toggle aria-controls="basic-navbar-nav" />
                            <Navbar.Collapse id="basic-navbar-nav">
                                {
                                    isLogin == "true" ? (
                                        <Nav>
                                            <NavLink exact activeClassName="active" className="navLink mt-1 text-center ms-3" to="/Dashboard">Home</NavLink>
                                            <NavLink exact activeClassName="active" className="navLink mt-1 text-center ms-3" to="/CreateProject">Create Project</NavLink>
                                            <NavLink exact activeClassName="active" className="navLink mt-1 text-center ms-3" to="/">Logout</NavLink>
                                        </Nav>
                                    ) :
                                        <Nav>
                                            <NavLink exact  activeClassName="active" className="navLink mt-1 text-center ms-3" to="/">Login</NavLink>
                                            <NavLink exact  activeClassName="active" className="navLink mt-1 text-center ms-3" to="/SignUp">SignUp</NavLink>
                                        </Nav>
                                } 
                            </Navbar.Collapse>
                        </div>
                    </Container>
                </Navbar>
            </div>
        </>
    )
}

export default navbar

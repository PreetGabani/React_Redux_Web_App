import React from 'react'
import { Navbar, Container, Nav } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'

const navbar = () => {
    return (
        <>
            <div className="p-3 NavBar">
                <Navbar className="bg-dark navbar-dark fix-top rounded-3 shadow-lg" expand="lg">
                    <Container>
                        <div className="navCollapse w-100 d-flex justify-content-between">
                            <Navbar.Brand>React Redux Web App</Navbar.Brand>
                            <Navbar.Toggle aria-controls="basic-navbar-nav" />
                            <Navbar.Collapse id="basic-navbar-nav">
                                <Nav>
                                    <NavLink className="navLink mt-1 text-center ms-3" to="/">Login</NavLink>
                                    <NavLink className="navLink mt-1 text-center ms-3" to="/SignUp">SignUp</NavLink>
                                </Nav>
                            </Navbar.Collapse>
                        </div>
                    </Container>
                </Navbar>
            </div>
        </>
    )
}

export default navbar

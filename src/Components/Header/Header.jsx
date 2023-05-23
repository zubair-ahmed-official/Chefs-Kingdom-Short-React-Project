// import React from 'react';

import { useContext, useState } from "react";
import { Button, Container, Nav, NavItem, Navbar } from "react-bootstrap";
import { Link, Outlet, useNavigation } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";
import Footer from "../Footer/Footer";
import { MDBBtn } from "mdb-react-ui-kit";
import ActiveLink from "../ActiveLink/ActiveLink";
import './Header.css'

const Header = () => {
    const navigateLoading = useNavigation();
    const { user, logOut } = useContext(AuthContext);
    const handleLogout = () => {
        logOut()
            .then()
            .catch(err => console.error(err))
    }
    const [isShown, setIsShown] = useState(false);

    // this function is called when the mouse hovers over box A
    const handleMouseOver = () => {
        setIsShown(true);
    }

    // this function is called when the mouse out box A
    const handleMouseOut = () => {
        setIsShown(false);
    }
    return (
        <div>
            <Navbar className="bg-dark p-3 align-center" sticky="top">
                <Container className="m-auto">
                    <Navbar.Collapse id="basic-navbar-nav" className="text-white">
                        <Nav><h3>Chefs Kingdom</h3></Nav>
                        <Nav className="m-auto text-white" >
                            <Nav.Link className="inactive"
                            ><ActiveLink to='/'>Home</ActiveLink></Nav.Link>
                            <Nav.Link className="inactive">
                                <ActiveLink to='/blog'>Blog</ActiveLink></Nav.Link>
                        </Nav>
                    </Navbar.Collapse>

                    {/* Mouse hover for displaying Name */}

                    {user ?
                        <NavItem className="photoUrl">

                            {isShown &&
                                <span className="displayName"> {user.displayName}</span>}&nbsp;&nbsp;
                            <span onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}><img style={{ height: "55px", width: '55px', borderRadius: '50%' }} src={user.photoURL} alt=''></img></span>&nbsp;&nbsp;

                            <MDBBtn outline rounded className='mx-3' color='light' onClick={handleLogout}>
                                Log Out
                            </MDBBtn>
                        </NavItem> :
                        <NavItem><Link to='/signIn'><MDBBtn outline rounded className='m-auto' color='light'>
                            Login
                        </MDBBtn></Link></NavItem>}

                </Container>
            </Navbar>
            <div>{navigateLoading.state === 'loading' && 'Loading...'}</div>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Header;
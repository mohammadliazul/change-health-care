import React from 'react';
import { Navbar } from 'react-bootstrap';
import logo from '../../../Images/Logo.png';
import { NavLink } from 'react-router-dom';
import './Header.css';
import useAuth from '../../../hooks/useAuth';
import Button from '@restart/ui/esm/Button';
import { HashLink } from 'react-router-hash-link';

const Header = () => {
    const { user, logOut } = useAuth();
    return (
        <>
            <Navbar className='nav-bar' collapseOnSelect expand="lg md" sticky='top'>
                <>
                    <Navbar.Brand to="#home"><img className="logo-size" src={logo} alt="" /></Navbar.Brand>
                    <br />
                    <Navbar.Toggle />
                    <Navbar.Collapse className='justify-content-end'>
                        <NavLink to="/home" className='nav-Link text-white fs-3'>Home</NavLink>
                        <NavLink as={HashLink} to="/services" className='nav-Link text-white fs-3'>Services</NavLink>
                        <NavLink to="/about" className='nav-Link text-white fs-3'>About</NavLink>
                        <NavLink to="/contact" className='nav-Link text-white fs-3' > Contact</NavLink>
                        {
                            user?.email && <Navbar.Text className='text-white fs-3'>
                                Signed: <Navbar.Text className='text-warning' >{user?.displayName}</Navbar.Text>
                            </Navbar.Text>
                        }
                        {
                            user?.email ?
                                <Button onClick={logOut} className='ms-5 px-4 logout-btn text-white fs-4'>Log Out</Button> :
                                <>
                                    <NavLink to="/login" className='nav-Link text-white fs-3'>Login</NavLink>
                                    <NavLink to="/signup" className='nav-Link text-white fs-3'>Sign Up</NavLink></>

                        }




                    </Navbar.Collapse >
                </>
            </Navbar >
        </>
    );
};

export default Header;
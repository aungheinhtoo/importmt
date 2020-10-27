import React, {Component, useContext} from 'react';
import { Button } from "../Button"
import './Navbar.css'
import AuthContext from "../../context/authContext";

const Navbar = () =>{
    const authContext = useContext(AuthContext);
    const { isAuthenticated, logout, user, loading } = authContext;
    console.log("NavBar: ",isAuthenticated);
    alert(isAuthenticated);
    const authLinks = [{
            title: 'Home',
            url: '/',
            cName: 'nav-links'
        },
            {
                title: 'Logout',
                url: '/login',
                cName: 'nav-links'
            },
            {
                title: 'Menu',
                url: '/menu',
                cName: 'nav-links'
            }]
    ;

    const guestLinks = [{
            title: 'Home',
            url: '/',
            cName: 'nav-links'
        },
            {
                title: 'Login',
                url: '/login',
                cName: 'nav-links'
            },
            {
                title: 'Register',
                url: '/register',
                cName: 'nav-links'
            }]
    ;
    let MenuItems;
    if (isAuthenticated){
        MenuItems = authLinks;
    }
    else{
        MenuItems = guestLinks;
    }
    return(
        <nav className="NavbarItems">
            <h1 className="navbar-logo">imporTMT</h1>
            {/* <i className="fab fa-react"></i> */}

            <ul className='nav-menu'>
                {MenuItems.map((item, index) => {
                    return (
                        <li key={index}>
                            <a className={item.cName} href={item.url}>
                                {item.title}
                            </a>
                        </li>
                    )
                })}
            </ul>
        </nav>
    )
}

export default Navbar;
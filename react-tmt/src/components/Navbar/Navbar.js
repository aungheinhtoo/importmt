import React, {Component, useContext} from 'react';
import './Navbar.css'
import AuthContext from "../../context/authContext";
import {Link, NavLink} from 'react-router-dom';
import Dropdown from "react-bootstrap/Dropdown";

const CustomToggle = React.forwardRef(({ children, onClick: onClick}, ref) => {
    return (
        <a
            href=""
            ref={ref}
            className='nav-links'
            onClick={(e) => {
                e.preventDefault();
                onClick(e);
            }}
        >
            {children}
            &#x25bc;
        </a>
    );
});

const Navbar = () =>{
    const authContext = useContext(AuthContext);
    const { isAuthenticated, logout, user, loading, domain } = authContext;
    console.log("NavBar: ",isAuthenticated, 'for ', user);
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
                {/*<li key={index}>*/}
                {/*    <a className={item.cName} href={item.url}>*/}
                {/*        {item.title}*/}
                {/*    </a>*/}
                {/*</li>*/}
                {MenuItems.map((item, index) => {

                    return (
                        // {item.title==='Logout'? <Link to={item.url} className = {item.cName}>
                        //         {item.title}
                        //     </Link> :
                        //
                        // }
                        <Link to={item.url} className = {item.cName}>
                            {item.title}
                        </Link>
                    )
                })}
                {isAuthenticated ?
                    <Dropdown>
                        <Dropdown.Toggle as={CustomToggle} id="loginstate">
                            {user}
                        </Dropdown.Toggle>


                        <Dropdown.Menu>
                            <Dropdown.Item><Link to={'/Menu'}>Menu</Link></Dropdown.Item>
                            <Dropdown.Item><Link to={'/login'}>Logout</Link></Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                    :
                    <Dropdown></Dropdown>
                }

            </ul>
        </nav>
    )
}

export default Navbar;
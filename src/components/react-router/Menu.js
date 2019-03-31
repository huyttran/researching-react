import React, { Component } from 'react';
import { Route, Link } from "react-router-dom";

const menuList = [
    {
        to: '/',
        label: 'Home',
        exact: true
    },
    {
        to: '/about',
        label: 'About',
        exact: true
    },
    {
        to: '/contact',
        label: 'Contact',
        exact: true
    },
    {
        to: '/products',
        label: 'Products',
        exact: true
    },
    {
        to: '/login',
        label: 'Login',
        exact: false
    },
    {
        to: '/form',
        label: 'Form',
        exact: false
    },
    {
        to: '/todolist',
        label: 'ToDoList',
        exact: false
    }
]
const MenuLink = ({ label, to, activeOnlyWhenExact }) => {
    return (
        <Route
            path={to}
            exact={activeOnlyWhenExact}
            children={({ match }) => {
                const active = match ? 'routeActive' : '';
                return (
                    <li className={`my-li ${active}`}>
                        <Link
                            to={to}
                        >
                            {label}
                        </Link>
                    </li>
                )
            }}
        />
    )
}
class Menu extends Component {

    showMenu = (menuList) => {
        let result = null;
        if (menuList.length > 0) {
            result = menuList.map((menu, index) => {
                return (
                    <MenuLink key={index} label={menu.label} to={menu.to} activeOnlyWhenExact={menu.exact} />
                );
            });
        }
        return result;
    }
    render() {
        return (
            <nav className="navbar navbar-default">
                <ul className="nav navbar-nav">
                    {this.showMenu(menuList)}
                    {/* <MenuLink label="Home" to="/" activeOnlyWhenExact={true} />
                    <MenuLink label="About" to="/about" />
                    <MenuLink label="Contact" to="/contact" /> */}
                    {/* <li>
                        <NavLink
                            activeClassName="routeActive"
                            exact to="/"
                        >
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            activeClassName="routeActive"
                            to="/about"
                        >
                            About
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            activeClassName="routeActive"
                            to="/contact"
                        >
                            Contact
                        </NavLink>
                    </li> */}
                </ul>
            </nav>
        );
    }
}
export default Menu;

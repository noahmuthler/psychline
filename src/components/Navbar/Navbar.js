import React, { Component } from 'react';
import { MenuItems } from "./MenuItems"
import './Navbar.css'
import { Button } from "../Button"
import LoginButton from "../Home/LoginButton";
import browserHistory from "history/createBrowserHistory";

class Navbar extends Component {
    state = { clicked: false }

    handleClick = () => {
        this.setState({ clicked: !this.state.clicked })
    }

    checkUrl(item_url) {
        if (item_url != 'null')
            return (item_url)
        else return null;
    }

    handleLogin(item_title) {
        if (item_title == "login") {
            <LoginButton />
        }
    }

    handleClick(item_title, item_url) {
        if (item_title != 'login') {
            this.history.push(item_url)
        } else {
            <LoginButton />
        }
    }

    render() {
        return (
            <nav className="NavbarItems">
                <h1 className="navbar-logo">PsychLine</h1>
                <div className="menu-icon" onClick={this.handleClick}>
                    
                </div>
                <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
                    {MenuItems.map((item, index) => {
                        return (
                            <li key={index}>
                                <a className={item.cName} href={item.url}>
                                    <Button >{item.title}</Button>
                                </a>
                            </li>
                        )
                    })}
                    <li>
                        <a className="ham-icon">
                            <i class="fa fa-bars" aria-hidden="true"></i>
                        </a>
                    </li>
                </ul>
            </nav >
        )
    }
}

export default Navbar;
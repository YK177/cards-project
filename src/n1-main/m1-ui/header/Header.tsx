import React from 'react'
import {NavLink} from 'react-router-dom'
import {PATH} from '../routing/Routing'

export const Header = () => {


    return (
        <header>
            <nav>
                <ul>
                    <li><NavLink to={PATH.LOGIN}>Login</NavLink></li>
                    <li><NavLink to={PATH.REGISTRATION}>Registration</NavLink></li>
                    <li><NavLink to={PATH.CHANGE_PASSWORD}>Change password</NavLink></li>
                    <li><NavLink to={PATH.RECOVER_PASSWORD}>Recover password</NavLink></li>
                    <li><NavLink to={PATH.PROFILE}>Profile</NavLink></li>
                    <li><NavLink to={PATH.TEST}>Test</NavLink></li>
                </ul>
            </nav>
        </header>
    )
}

import {Link} from "react-router-dom";
import React, {useContext, useState} from "react";
import UserContext from "../contexts/UserContext";
import AuthContext from "../contexts/AuthContext";


export default function NavBar() {
    const {loginStatus} = useContext(AuthContext)
    const {loggedInUser} = useContext(UserContext)
    return (
        <>
            <nav className={'Nav'}>
                <div className={'navLinksCnt'}>
                    <div className={'navLinkTitle'}>
                        <Link to={'/'}>TDAMS</Link>
                    </div>
                    <div className={'navLinkCnt'}>
                        <Link to={'/'}>Home</Link>
                    </div>
                    <div className={'navLinkCnt'}>
                        <Link to={'/login'}> {(loginStatus === 1) ? 'Logout' : 'Login'}
                        </Link>
                    </div>
                    <div className={'navLinkCnt'}>
                        <Link to={'/about'}>About Us</Link>
                    </div>
                    <div className={'navLinkCnt'}>
                        {
                            (loggedInUser.role === "ROLE_ADMIN" && loginStatus === 1) ?
                                <Link to={'/adminDashboard'}> Dashboard
                                </Link>
                                : null
                        }
                        {
                            (loggedInUser.role === "ROLE_CUSTOMER" && loginStatus === 1) ?
                                <Link to={'/customerDashboard'}>Dashboard</Link>
                                : null
                        }
                        {
                            (loggedInUser.role === "ROLE_DELIVERY_PERSONNEL" && loginStatus === 1) ?
                                <Link to={'/delDashboard'}>Dashboard</Link>
                                : null
                        }
                        {
                            (loggedInUser.role === "ROLE_VENDOR" && loginStatus === 1) ?
                                <Link to={'/vendorDashboard'}>Dashboard</Link>
                                : null
                        }
                    </div>
                </div>
            </nav>
        </>
    )
}
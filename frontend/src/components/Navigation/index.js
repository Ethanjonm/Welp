
import React from "react";
import { useSelector } from "react-redux";
// import { Link } from "react-router-dom";
import LogoutButton from "./Logoutbutton";
// import { useDispatch } from 'react-redux';
import Icon from "./ProfileButton";
import { NavLink } from "react-router-dom";
import DemoLogin from "../DemoLogin/DemoLogin";

function Navigation() {
    const sessionUser = useSelector((state) => state.session.user);


    
    if (!sessionUser) {
        return <div className="Navigation">
                <Icon />
                <NavLink className="login" to="/login">
                    Log In
                </NavLink>
                <NavLink className="signUp" to="/signup">
                    Sign Up
                </NavLink>
                <DemoLogin />
            </div>
    } else {
        return  <div className="Navigation">
                <Icon />
                <LogoutButton />
                </div>
    }
    



}

export default Navigation;

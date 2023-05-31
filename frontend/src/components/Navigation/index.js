
import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import LogoutButton from "./Logoutbutton";
import { useDispatch } from 'react-redux';


function Navigation() {
    const sessionUser = useSelector((state) => state.session.user);


    
    if (!sessionUser) {
        return <div>
                <Link className="login" to="/login">
                    Log In
                </Link>
                <Link className="signUp" to="/signup">
                    Sign Up
                </Link>
            </div>
    } else {
        return <LogoutButton></LogoutButton>
    }
    



}

export default Navigation;

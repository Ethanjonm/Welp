
import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import LogoutButton from "./Logoutbutton";
import Icon from "./ProfileButton";
import { NavLink } from "react-router-dom";
import DemoLogin from "../DemoLogin/DemoLogin";
import "./Navigation.css"
import { useState } from "react";
import { useDispatch } from 'react-redux';
import * as sessionActions from '../../store/session';


const  Navigation = () => {

    const dispatch = useDispatch();
    const sessionUser = useSelector((state) => state.session.user);
    const [showDropdown, setShowDropdown] = useState(false);

    const handleDemo = (e) => {
      e.preventDefault()
      return dispatch(sessionActions.login({ email: "ethan@gmail.com", password:"password" }));
    }
    
  
    const toggleDropdown = () => {
      setShowDropdown(!showDropdown);
    };

    const handleLogout = () => {
        dispatch(sessionActions.logout()); 
    };

  
    const handleNavLinkClick = () => {
      setShowDropdown(false);
    }
    
    
    if (!sessionUser) {
        return (
          <div className="Navigation">
            <div className="divIcon">
              <Icon className="icon" />
            </div>
            <div className="divRight">
              <div style={{ color: "Black", fontSize: "30px" }} className="dropicon" onClick={toggleDropdown}>
                <i class="fa-solid fa-house"></i>
              </div>
              {showDropdown && (
                <div className="dropdown-menu">
                  <NavLink onClick={handleNavLinkClick} className="login" to="/login">Log In</NavLink>
                  <NavLink onClick={handleNavLinkClick} className="signUp" to="/signup">Sign Up</NavLink>
                  <div onClick={handleDemo}>
                    <NavLink onClick={handleNavLinkClick} className="demoLogin" to="/">Demo Login</NavLink>
                  </div>
                </div>
              )}
            </div>
          </div>
        );
      } else {
        return (
          <div className="Navigation">
            <div className="divIcon">
              <Icon className="Icon" />
            </div>
            <div className="divRight">
              <div style={{ color: "Black", fontSize: "30px" }} className="dropicon" onClick={toggleDropdown}>
                <i class="fa-solid fa-circle-user"></i>
              </div>
              {showDropdown && (
                <div className="dropdown-menu">
                    <div onClick={handleLogout}>
                      <NavLink onClick={handleNavLinkClick} className="Logout" to="/">Log Out</NavLink>
                    </div>
                </div>
              )}
            </div>
          </div>
        );
      }



}

export default Navigation;

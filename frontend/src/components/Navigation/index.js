
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
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";


const  Navigation = () => {

    const dispatch = useDispatch();
    const sessionUser = useSelector((state) => state.session.user);
    const [showDropdown, setShowDropdown] = useState(false);
    const history = useHistory()

    const handleSearch = (e) => {
      e.preventDefault()
      history.push("/businesses")

    }

    const handleDemo = (e) => {
      e.preventDefault()
      return dispatch(sessionActions.login({ email: "ethan@ethan.com", password:"password" }));
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
              <input type="text" className="searchbar" placeholder="Pizza, Seafood, Burgers"></input>
              <button className="searchbutton" onClick={handleSearch}><i className="fa-solid fa-magnifying-glass"></i></button>
            </div>
            <div className="divRight">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                  <button className="githubbutton">GitHub</button>
              </a>
              <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                  <button className="linkedinbutton">LinkedIn</button>
              </a>
              <div style={{ color: "Red", fontSize: "30px" }} className="dropicon" onClick={toggleDropdown}>
                <i className="fa-solid fa-house"></i>
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
              <input type="text" className="searchbar" placeholder="Pizza, Seafood, Burgers"></input>
              <button className="searchbutton" onClick={handleSearch}><i className="fa-solid fa-magnifying-glass"></i></button>
            </div>
            <div className="divRight">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                  <button className="githubbutton">GitHub</button>
              </a>
              <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                  <button className="linkedinbutton">LinkedIn</button>
              </a>
              <div style={{ color: "Red", fontSize: "30px" }} className="dropicon" onClick={toggleDropdown}>
                <i className="fa-solid fa-circle-user"></i>
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

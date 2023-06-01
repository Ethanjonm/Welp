
import React from "react";
import { useSelector } from "react-redux";
// import { Link } from "react-router-dom";
import LogoutButton from "./Logoutbutton";
// import { useDispatch } from 'react-redux';
import Icon from "./ProfileButton";
import { NavLink } from "react-router-dom";
import DemoLogin from "../DemoLogin/DemoLogin";
import "./Navigation.css"

function Navigation() {
    const sessionUser = useSelector((state) => state.session.user);


    
    if (!sessionUser) {
        return (
          <div className="Navigation">
            <div className="divIcon">
              <Icon className="icon" />
            </div>
            <div className="divRight">
              <div>
                <NavLink className="login" to="/login">
                  Log In
                </NavLink>
              </div>
              <div>
                <NavLink className="signUp" to="/signup">
                  Sign Up
                </NavLink>
              </div>
              <div>
                <DemoLogin className="demoLogin" />
              </div>
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
              <div>
                <LogoutButton className="LogoutButton" />
              </div>
            </div>
          </div>
        );
      }
    



}

export default Navigation;

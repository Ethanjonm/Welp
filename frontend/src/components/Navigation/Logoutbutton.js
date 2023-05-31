import React from 'react';
import * as sessionActions from '../../store/session';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';


const LogoutButton = () => {
    const dispatch = useDispatch();
    const history = useHistory();

    const logout = async (e) => {
        e.preventDefault();
        dispatch(sessionActions.logout());
        history.push("/");
    }

    return (
        <div>
            <button type="submit" onClick={logout} id="logoutButtonInDropDown">
                Log Out
            </button>
        </div>
    )

};

export default LogoutButton;
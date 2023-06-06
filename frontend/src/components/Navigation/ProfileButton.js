import React from 'react';
import { useHistory } from 'react-router-dom';
import "./ProfileButton.css"


function Icon() {
    const history = useHistory()

    const home = async (e) => {
        e.preventDefault();
        history.push("/");
    }

    return (
        <div className='Icon-Container' onClick={home}>
            <h1 className='Title'>Welp</h1>
            <div style={{ color: "Red", fontSize: "30px" }} className="icon">
            <i className="fa-brands fa-yelp"></i>
            </div>
        </div>
    )
}

export default Icon;
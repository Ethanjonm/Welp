import React from 'react';
import { useHistory } from 'react-router-dom';


function Icon() {
    const history = useHistory()

    const home = async (e) => {
        e.preventDefault();
        history.push("/");
    }

    return (
        <div>
            <div style={{ color: "purple", fontSize: "70px" }} onClick={home}>
                <i class="fa-brands fa-yelp"></i>
            </div>
        </div>
    )
}

export default Icon;
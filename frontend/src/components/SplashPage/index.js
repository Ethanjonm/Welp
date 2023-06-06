import React from 'react';
import "./SplashPage.css"
import Slider from './Slider';
import data from "./data"
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';


const SplashPage = ()  => {
    const history = useHistory()

    const businessIndex = async (e) => {
        e.preventDefault();
        history.push("/businesses");
    }

    
    return (
        <div className='splashpage'>
            <Slider slides={data} className="sliderindex"></Slider>
            <div className="centered-content">
                <div className="header-content">
                    <h1 className='splashh1'>Welp</h1>
                    <div style={{ color: "Red", fontSize: "30px" }} className="splashicon">
                        <i class="fa-brands fa-yelp"></i>
                    </div>
                </div>
                <h2 className='splashh2'>Feeling Hungry?</h2>
                <button className="red-button" onClick={businessIndex}>Find Businesses</button>
            </div>
        </div>
    )

    

}

export default SplashPage;
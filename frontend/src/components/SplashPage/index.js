import React from 'react';
import "./SplashPage.css"
import Slider from './Slider';
import data from "./data"


const SplashPage = ()  => {
    
    return (
        <div className='splashpage'>
            <Slider slides={data} className="sliderindex"></Slider>
            <div className="centered-content">
                <div className="header-content">
                    <h1 className='splashh1'>Welp</h1>
                    <div style={{ color: "purple", fontSize: "30px" }} className="splashicon">
                        <i class="fa-brands fa-yelp"></i>
                    </div>
                </div>
                <h2 className='splashh2'>Find  Spooky Businesses</h2>
                <h3>Place holder Business Index Button</h3>
            </div>
        </div>
    )

    

}

export default SplashPage;
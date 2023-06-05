import "./Slider.css"
import { SliderData } from "./data"
import React, { useState, useEffect, useCallback } from 'react';
// import {FaArrowCircleRight, FaArrowCircleLeft} from 'react-icons/fa'



const Slider = ( { slides } ) => {
    const [current, setCurrent] = useState(0)
    const length = slides.length

    const nextSlide = useCallback(() => {
        setCurrent(current => (current === length - 1 ? 0 : current + 1));
    }, [length]);

    const prevSlide = useCallback(() => {
        setCurrent(current => (current === 0 ? length - 1 : current - 1));
    }, [length]);

    useEffect(() => {
        const slideInterval = setInterval(nextSlide, 5000); 

        
        return () => clearInterval(slideInterval);
    }, [nextSlide]);

    if (!Array.isArray(slides) || slides.length <= 0) {
        return null;
    }

    // console.log(current)

    return (
        <section className="slider">
            {/* <FaArrowCircleLeft className="left-arrow"  onClick={prevSlide}/>
            <FaArrowCircleRight className="right-arrow"  onClick={nextSlide}/> */}
            {SliderData.map((slide, index) => {

                return (
                    <div className={index === current ? 'slide active' : 'slide'} key={index}>
                        {index === current && (<img src={slide.image} alt="food image" className="sliderimage"/>)}
                    </div>
                )
            })}
        </section>
    )
}

export default Slider;
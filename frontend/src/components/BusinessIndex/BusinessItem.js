import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchBusiness, getBusiness } from '../../store/business';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import ramen from "../images/food4.jpg";
import burger from "../images/food7.jpg";
import pizza from "../images/food10.jpg";
import "./BusinessItem.css"


const BusinessItem = ({ business }) => {

    const dispatch = useDispatch();
    const history = useHistory();

    const handleClick = (e) => {
        e.preventDefault();
        dispatch(getBusiness(business.id));
        history.push(`/businesses/${business.id}`);
    }

    const dollarSigns = [];
    for (let i = 0; i < business.priceRange; i++) {
      dollarSigns.push(<i key={i} className="fa-solid fa-dollar-sign" style={{ color: "black" }}></i>);
    }
    let food

    if (business.category === "Pizza") {
        food = pizza
    }
    if (business.category === "Burgers") {
        food = burger
    }
    if (business.category === "Ramen") {
        food = ramen
    }


    let rating = business.rating;
    let starColor1 = rating >= 1 ? "gold" : "grey";
    let starColor2 = rating >= 2 ? "gold" : "grey";
    let starColor3 = rating >= 3 ? "gold" : "grey";
    let starColor4 = rating >= 4 ? "gold" : "grey";
    let starColor5 = rating >= 5 ? "gold" : "grey";



    return (
        <div className='indexItems' onClick={handleClick}>
            <div className='indexImageContainer'>
                <img src={food} className="indexImage"></img>
            </div>
            <div className='infoContainer'>
            <h1 className='businessName'>{business.name}</h1>
            {/* <div className='businessRating'>Rating: {business.rating}</div> */}
            <div className="starRating">
                <i className="fa-solid fa-star" style={{ color: starColor1 }}></i>
                <i className="fa-solid fa-star" style={{ color: starColor2 }}></i>
                <i className="fa-solid fa-star" style={{ color: starColor3 }}></i>
                <i className="fa-solid fa-star" style={{ color: starColor4 }}></i>
                <i className="fa-solid fa-star" style={{ color: starColor5 }}></i>
            </div>
            <div className='businessCategory'>{business.category} NYC {dollarSigns}</div>
            {/* <div className='businessCity'></div> */}
            {/* <div className='businessPrice'>{dollarSigns}</div> */}
            <div className='businessTime'>Open Until 9 PM</div>
            </div>
        </div>
    )
}

export default BusinessItem;

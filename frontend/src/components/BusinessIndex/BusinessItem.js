import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchBusiness, getBusiness } from '../../store/business';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import food3 from "../images/food3.jpg";
import "./BusinessItem.css"


const BusinessItem = ({ business }) => {

    const dispatch = useDispatch();
    const history = useHistory();

    const handleClick = (e) => {
        e.preventDefault();
        dispatch(getBusiness(business.id));
        history.push(`/businesses/${business.id}`);
    }

    return (
        <div className='indexItems' onClick={handleClick}>
            <div className='indexImageContainer'>
                <img src={food3} className="indexImage"></img>
            </div>
            <div className='infoContainer'>
            <h1 className='businessName'>Name: {business.name}</h1>
            <div className='businessRating'>Rating: {business.rating}</div>
            <div className='businessCategory'>Category: {business.category}</div>
            <div className='businessPrice'>Price: {business.priceRange}</div>
            <div className='businessCity'>City: {business.city}</div>
            </div>
        </div>
    )
}

export default BusinessItem;

import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchBusiness, getBusiness } from '../../store/business';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import food3 from "../images/food3.jpg";


const BusinessItem = ({ business }) => {

    const dispatch = useDispatch()




    return (
        <div>
            <img src={food3}></img>
            <h1>Name: {business.name}</h1>
            <div>Rating: {business.rating}</div>
            <div>Category: {business.category}</div>
            <div>Price: {business.priceRange}</div>
            <div>City: {business.city}</div>
            <div onClick={(e) => dispatch(getBusiness(business.id))}>
                
            <Link to={`/businesses/${business.id}`}>LINK</Link>
            </div>

        </div>
    )
}

export default BusinessItem;
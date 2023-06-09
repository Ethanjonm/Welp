import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchBusinesses, getBusinesses } from '../../store/business';
import BusinessItem from './BusinessItem';
import "./BusinessIndex.css";
import map1 from "../images/map1.jpg"


const BusinessIndex = ()  => {
    const dispatch = useDispatch();
   
    const businesses = useSelector(getBusinesses)
    
    
    useEffect(() => {
        dispatch(fetchBusinesses());
    }, [dispatch]);


    // console.log(businesses, "hello");

    // let items = businesses.map(data => <BusinessItem data={data}></BusinessItem>)

    return (
        <div className='businessindex'>
            {businesses.map((business) => {
                return (
                <div className='businessItem' key={business.id}>
                    <BusinessItem business={business} />
                    <div className='mapDiv'>
                        <img src={map1} className="map"></img>
                    </div>
                </div>
                )
                
            })}

        </div>
    );
}

export default BusinessIndex;

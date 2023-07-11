import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchBusinesses, getBusinesses } from '../../store/business';
import BusinessItem from './BusinessItem';
import "./BusinessIndex.css";
import map1 from "../images/map1.jpg"
import IndexMap from '../Map/IndexMap';


const BusinessIndex = ()  => {
    const dispatch = useDispatch();
   
    const businesses = useSelector(getBusinesses)
    
    
    useEffect(() => {
        dispatch(fetchBusinesses());
    }, [dispatch]);


    // console.log(businesses, "hello");

    // let items = businesses.map(data => <BusinessItem data={data}></BusinessItem>)

    return (
        <div>
            <div className='businessindex'>
                {businesses.map((business) => {
                    return (
                    <div className='businessItem' key={business.id}>
                        <BusinessItem business={business} />
                    </div>
                    )
                    
                })}

            </div>
            <IndexMap />
        </div>
    );
}

export default BusinessIndex;

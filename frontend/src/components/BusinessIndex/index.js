import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchBusinesses, getBusinesses } from '../../store/business';


const BusinessIndex = ()  => {
    const dispatch = useDispatch();
   
    const businesses = useSelector((state) => Object.values(state.business))
    
    
    useEffect(() => {
        dispatch(fetchBusinesses());
    }, [dispatch]);

    console.log(businesses, "hello");

    return (
        <div>
            <h1>BUSINESS Name</h1>
            <p>Business .price</p>
            <p>business .state</p>
            <p>business .zip_code</p>
            {businesses}
        </div>
    );
}

export default BusinessIndex;

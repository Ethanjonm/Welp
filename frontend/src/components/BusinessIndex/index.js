import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchBusinesses, getBusinesses } from '../../store/business';
import BusinessItem from './BusinessItem';


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
                </div>
                )
                
            })}

        </div>
    );
}

export default BusinessIndex;

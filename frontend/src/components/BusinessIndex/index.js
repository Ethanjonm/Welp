import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchBusinesses, getBusinesses } from '../../store/business';
import BusinessItem from './BusinessItem';
import "./BusinessIndex.css";
import IndexMap from '../Map/IndexMap';
import { useParams } from 'react-router-dom';


const BusinessIndex = ()  => {
    const dispatch = useDispatch();
    const { search } = useParams();
    const [filteredBusinesses, setFilteredBusinesses] = useState([]);
   
    const businesses = useSelector(getBusinesses)
    
    
    useEffect(() => {
        if (businesses && search) {
            setFilteredBusinesses(businesses.filter(b => b.name.toLowerCase().includes(search.toLowerCase())));
        } else {
            setFilteredBusinesses(businesses);
        }
    }, [businesses, search]);
    
    useEffect(() => {
        dispatch(fetchBusinesses());
    }, [dispatch]);

    return (
        <div>
            <div className='businessindex'>
                {filteredBusinesses.map((business) => {
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

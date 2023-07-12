import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchBusinesses, getBusinesses } from '../../store/business';
import BusinessItem from '../BusinessIndex/BusinessItem';
import "../BusinessIndex/BusinessIndex.css";
import SearchMap from '../Map/SearchMap';
import { useParams } from 'react-router-dom';


const Search = ()  => {
    const dispatch = useDispatch();
    const  search  = useParams();
    const [filteredBusinesses, setFilteredBusinesses] = useState([]);
   
    const businesses = useSelector(getBusinesses)

    console.log(search.term)
    
    
    useEffect(() => {
        if (businesses && search) {
            setFilteredBusinesses(businesses.filter(b => b.name.toLowerCase().includes(search.term.toLowerCase())));
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
            <SearchMap filteredBusinesses={filteredBusinesses}/>
        </div>
    );
}

export default Search;

import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchBusinesses, getBusinesses } from '../../store/business';
import BusinessItem from '../BusinessIndex/BusinessItem';
import "../BusinessIndex/BusinessIndex.css";
import SearchMap from '../Map/SearchMap';
import { useParams } from 'react-router-dom';
import IndexMap from '../Map/IndexMap';


const Search = ()  => {
    const dispatch = useDispatch();
    const  search  = useParams();
    const [filteredBusinesses, setFilteredBusinesses] = useState([]);
   
    const businesses = useSelector(getBusinesses)
    
    
    useEffect(() => {
        if (businesses && search) {
            setFilteredBusinesses(businesses.filter(b => b.category.toLowerCase().includes(search.term.toLowerCase())));
        } else {
            setFilteredBusinesses(businesses);
        }
    }, [businesses, search]);
    
    useEffect(() => {
        dispatch(fetchBusinesses());
    }, [dispatch]);

    if (filteredBusinesses.length === 0) {
        return (
            <div className='pageContainer'>
                <div className='businessindex'>
                    <div className='Browsing'>No Results Found</div>
                </div>
                <SearchMap filteredBusinesses={filteredBusinesses}/>
            </div>
        );
    }

    return (
        <div className="pageContainer">
            <div className='businessindex'>
                <h2 className='Browsing'>Browsing New York, NY businesses</h2>
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

{/* <SearchMap filteredBusinesses={filteredBusinesses}/> */}

import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchBusinesses, getBusinesses } from '../../store/business';


function BusinessIndex() {
    const dispatch = useDispatch();
    debugger
    const businesses = useSelector((state) => Object.values(state.business))
    debugger
    const shops = useSelector(getBusinesses)
    
    useEffect(() => {
        debugger
        dispatch(fetchBusinesses());
    }, [dispatch]);

    console.log(businesses, shops, "hello");

    return (
        <div>
            <h1>BUSINESS INDEX</h1>
            <p>

            </p>
        </div>
    );
}

export default BusinessIndex;

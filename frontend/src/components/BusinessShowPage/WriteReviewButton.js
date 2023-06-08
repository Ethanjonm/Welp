import React from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import * as sessionActions from '../../store/session';
import "./ReviewButton.css";



const WriteReviewButton = ({businessId}) => {
    const dispatch = useDispatch();
    const history = useHistory();
    const sessionUser = useSelector(state => state.session.user);

    const writeReviewPage = () => {

        history.push(`/businesses/${businessId}/writereview`);
    };

    const loggedIn = (e) => {
        e.preventDefault();
        history.push("/login");
    };

    if (!sessionUser) {
        return (
            <div className="writeReviewLink" onClick={loggedIn}>
                <button className="reviewButton" > 
                        
                        Write a Review
                </button>
            </div>
        )
    } else {
        return (
            <div className="writeReviewLink" onClick={writeReviewPage}>
                <button className="reviewButton"> 
                        
                        Write a review
                </button>
            </div>
        )
    }
    
}

export default WriteReviewButton; 




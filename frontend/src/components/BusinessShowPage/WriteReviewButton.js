import React from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import * as sessionActions from '../../store/session';
import { getReviews } from "../../store/review";
import "./ReviewButton.css";



const WriteReviewButton = ({ businessId }) => {
    const dispatch = useDispatch();
    const history = useHistory();
    const sessionUser = useSelector(state => state.session.user);
    const reviews = useSelector(getReviews);
    const { id } = useParams();
  
    const currentUser = useSelector(state => state.session.user);
  
    const userHasReview = reviews.some(
      (review) => review.businessId === Number(businessId) && review.userId === currentUser?.id
    );
  
    const writeReviewPage = () => {
      if (userHasReview) {
        history.push(`/businesses/${businessId}/updatereview`);
      } else {
        history.push(`/businesses/${businessId}/writereview`);
      }
    };
  
    const loggedIn = (e) => {
      e.preventDefault();
      history.push("/login");
    };
  
    let buttonText = "Login"; // default text
    if (sessionUser) {
      buttonText = userHasReview ? "Update review" : "Write a review";
    }
  
    return (
      <div className="writeReviewLink" onClick={sessionUser ? writeReviewPage : loggedIn}>
        <button className="reviewButton"> {buttonText} </button>
      </div>
    )
  };
  
  export default WriteReviewButton;
  


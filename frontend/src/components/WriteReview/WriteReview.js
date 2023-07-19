import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createReview } from '../../store/review';
import { useHistory, useParams } from 'react-router-dom';
import './WriteReview.css';
import { getBusiness } from '../../store/business';
import { fetchBusiness } from '../../store/business';
import { getReviews } from '../../store/review';
import { fetchReviews } from '../../store/review';

const WriteReview = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const [body, setBody] = useState('');
  const [rating, setRating] = useState('');
  const businessId = useParams();
  const business = useSelector(getBusiness(businessId.id));
  const rev = useSelector(getReviews);

  useEffect(() => {
    dispatch(fetchBusiness(businessId.id));
  }, [businessId.id]);

  useEffect(() => {
    dispatch(fetchReviews(business));
  }, [business]);

  if (!business || !rev) {
    return <div>...Loading</div>;
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const reviewObj = {
      body,
      rating,
      business_id: businessId.id
    };
    
    await dispatch(createReview(reviewObj, businessId.id, history));
  };

  let starColor1 = rating >= 1 ? "gold" : "grey";
  let starColor2 = rating >= 2 ? "gold" : "grey";
  let starColor3 = rating >= 3 ? "gold" : "grey";
  let starColor4 = rating >= 4 ? "gold" : "grey";
  let starColor5 = rating >= 5 ? "gold" : "grey";

  const handleStarClick = (value) => {
    setRating(value);
  };


  return (
      <div className='ReviewForm'>
          <h1 className='ReviewFormTitle'>Write a Review</h1>
          <br></br>
      <div className='ReviewFormWrap'>
        <h1 className='ReviewRatingTitle'>Rating</h1>
        <form onSubmit={handleSubmit}>
          <label className="ReviewFormRating">
            <div className='reviewStarRating'>
              <i className="fa-solid fa-star" style={{ color: starColor1 }} onClick={() => handleStarClick(1)}></i>
              <i className="fa-solid fa-star" style={{ color: starColor2 }} onClick={() => handleStarClick(2)}></i>
              <i className="fa-solid fa-star" style={{ color: starColor3 }} onClick={() => handleStarClick(3)}></i>
              <i className="fa-solid fa-star" style={{ color: starColor4 }} onClick={() => handleStarClick(4)}></i>
              <i className="fa-solid fa-star" style={{ color: starColor5 }} onClick={() => handleStarClick(5)}></i>
            </div>
            {/* <input
              type="number"
              min="1"
              max="5"
              value={rating}
              onChange={(e) => setRating(e.target.value)}
              required
            /> */}
          </label>
          <h1 className='YourReview'>Your Review</h1>
          <label className='ReviewFormTextarea'>
            <textarea
              value={body}
              onChange={(e) => setBody(e.target.value)}
              required
              className='PleaseWork'
              maxLength="1300"
              minLength="100"
              placeholder="Write a review"
            />
          </label>
          <button type="submit" className='ReviewFormSubmit'>Submit Review</button>
        </form>
      </div>
    </div>
  );
};

export default WriteReview;
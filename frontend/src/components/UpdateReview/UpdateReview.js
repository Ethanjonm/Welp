import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateReview } from '../../store/review';
import { useHistory, useParams } from 'react-router-dom';
import './UpdateReview.css';
import { getBusiness } from '../../store/business';
import { fetchBusiness } from '../../store/business';
import { getReviews } from '../../store/review';
import { fetchReviews } from '../../store/review';

const UpdateReview = () => {
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
    
    await dispatch(updateReview(reviewObj, rev[0].id, businessId.id, history));
  };

  return (
      <div className='ReviewForm'>
          <h1 className='ReviewFormTitle'>{business.name}</h1>
      <div className='ReviewFormWrap'>
        <form onSubmit={handleSubmit}>
          <label className="ReviewFormRating">
            <input
              type="number"
              min="1"
              max="5"
              value={rating}
              onChange={(e) => setRating(e.target.value)}
              required
            />
          </label>
          <label className='ReviewFormTextarea'>
            <textarea
              value={body}
              onChange={(e) => setBody(e.target.value)}
              required
              className='PleaseWork'
              maxLength="1300"
              minLength="100"
              placeholder="UPDATE, but I was practically dying of hunger so I popped in. 
            The definition of a hole-in-the-wall. I got the regular hamburger and wow…  there are no words. 
            A classic burger done right. Crisp bun, juicy patty, stuffed with all the essentials 
            (ketchup, shredded lettuce, tomato, and pickles). There’s about a million options available between 
            the menu board and wall full of specials, so it can get a little overwhelming, but you really can’t 
            go wrong. Not much else to say besides go see for yourself! You won’t be disappointed."
            />
          </label>
          <button type="submit" className='ReviewFormSubmit'>Submit Review</button>
        </form>
      </div>
    </div>
  );
};

export default UpdateReview;
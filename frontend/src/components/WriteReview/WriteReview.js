import React, { useState } from 'react';
import { useDispatch  } from 'react-redux';
import { createReview } from '../../store/review';
import { useHistory, useParams } from 'react-router-dom';

const WriteReview = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const [body, setBody] = useState('');
  const [rating, setRating] = useState('');
  const  businessId  = useParams();
//   cq

  const handleSubmit = async (e) => {
    e.preventDefault();
    const reviewObj = {
      body,
      rating,
      business_id: businessId.id
      
    };
    debugger
    await dispatch(createReview(reviewObj, businessId.id, history));
  };

  return (
    <div>
      <h1>Write a Review</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Body:
          <textarea
            value={body}
            onChange={(e) => setBody(e.target.value)}
            required
          />
        </label>
        <label>
          Rating:
          <input
            type="number"
            min="1"
            max="5"
            value={rating}
            onChange={(e) => setRating(e.target.value)}
            required
          />
        </label>
        <button type="submit">Submit Review</button>
      </form>
    </div>
  );
};

  
export default WriteReview;
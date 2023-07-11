import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams, useHistory } from "react-router-dom";
import { fetchBusiness } from "../../store/business";
import { getBusiness } from "../../store/business";
import { getReviews } from "../../store/review";
import business5 from "../images/business5.jpg";
import { fetchReviews } from "../../store/review";
import WriteReviewButton from "./WriteReviewButton";
import "./BusinessShow.css";
import { deleteReview } from "../../store/review";
import BusinessMap from "../Map/BusinessMap";


const BusinessShowPage = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { id } = useParams();
  const business = useSelector(getBusiness(id));
  const reviews = useSelector(getReviews);


  const currentUser = useSelector(state => state.session.user);

  
  useEffect(() => {
    dispatch(fetchReviews(business));
  }, [business]);

  useEffect(() => {
    dispatch(fetchBusiness(id));
  }, [id]);

  if (!business || !reviews) {
    return <div>...Loading</div>;
  }

  const filteredReviews = Object.values(reviews)
  .filter((item) => item.businessId === Number(id));
  
  const filteredReviewsId = Object.values(reviews)
    .filter((item) => item.businessId === Number(id))
    .map((item) => item.userId);


  let rating = business.rating;
  let starColor1 = rating >= 1 ? "gold" : "grey";
  let starColor2 = rating >= 2 ? "gold" : "grey";
  let starColor3 = rating >= 3 ? "gold" : "grey";
  let starColor4 = rating >= 4 ? "gold" : "grey";
  let starColor5 = rating >= 5 ? "gold" : "grey";

  let price = business.priceRange;
  const dollarSigns = [];
  for (let i = 0; i < price; i++) {
    dollarSigns.push(<i key={i} className="fa-solid fa-dollar-sign"></i>);
  }







  return (
    <div className="businessShowContainer">
      <div className="topImage">
        <img src={business5} alt="Business" className="showImage" />
      </div>
      <div className="businessInfo">
        <h1 className="businessName">{business.name}</h1>
        <div className="starRating">
          <i className="fa-solid fa-star" style={{ color: starColor1 }}></i>
          <i className="fa-solid fa-star" style={{ color: starColor2 }}></i>
          <i className="fa-solid fa-star" style={{ color: starColor3 }}></i>
          <i className="fa-solid fa-star" style={{ color: starColor4 }}></i>
          <i className="fa-solid fa-star" style={{ color: starColor5 }}></i>
        </div>
        <div className="priceRange">{dollarSigns}</div>
        <h3 className="category">{business.category}</h3>
        <p>Open 9:00am ~ 9:00pm</p>
        <br></br>
        <br></br>
      </div>
      <div className="openingHours">
      </div>
      {/* <WriteReviewButton businessId={id} /> */}
      <div className="reviewSection">
        <WriteReviewButton businessId={id} />
        {filteredReviews.map((review, index) => (
          <div key={index}>
            <p>Review {index + 1}: {review.body}</p>
            {review.userId === currentUser?.id && 
              <button onClick={() => dispatch(deleteReview(review.id))}>Delete Review</button>}
          </div>
        ))}
      </div>
      <BusinessMap business={business} />
    </div>
  );
};

export default BusinessShowPage;

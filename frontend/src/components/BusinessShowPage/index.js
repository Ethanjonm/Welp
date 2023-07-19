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
        <div className="businessInfo">
          <h1 className="topbusinessName">{business.name}</h1>
          <div className="starRating">
            <i className="fa-solid fa-star" style={{ color: starColor1 }}></i>
            <i className="fa-solid fa-star" style={{ color: starColor2 }}></i>
            <i className="fa-solid fa-star" style={{ color: starColor3 }}></i>
            <i className="fa-solid fa-star" style={{ color: starColor4 }}></i>
            <i className="fa-solid fa-star" style={{ color: starColor5 }}></i>
          </div>
          <div className="toppriceRange">{dollarSigns}</div>
          {/* <h3 className="topcategory">{business.category}</h3>
          <p>Open 9:00am ~ 9:00pm</p> */}
          <br></br>
          <br></br>
        </div>
      </div>
      <div className="businessBottom">
        <div className="rButton">
          <WriteReviewButton businessId={id}/>
        </div>
        <hr className="break"></hr>
        <h2 className="lah">Location and Hours</h2>
        <div className="locationAndTime">
        <div className="mapSection">
          <BusinessMap business={business} />
          <p className="zipcode">NYC NY, 10011</p>
          <p className="mapname">{business.name}</p>
          </div>
          <ul className="openTime">
            <p>Mon: 9:00 am ~ 9:00 pm</p>
            <p>Tue: 9:00 am ~ 9:00 pm</p>
            <p>Wed: 9:00 am ~ 9:00 pm</p>
            <p>Thu: 9:00 am ~ 9:00 pm</p>
            <p>Fri: 9:00 am ~ 9:00 pm</p>
            <p>Sat: 9:00 am ~ 9:00 pm</p>
            <p>Sun: 9:00 am ~ 9:00 pm</p>
          </ul>
        </div>
        <hr></hr>
        <div className="reviewSection">
          {/* <WriteReviewButton businessId={id} /> */}
          {filteredReviews.map((review, index) => {
            // Determine the star colors for this specific review.
            let reviewRating = review.rating;
            let RstarColor1 = reviewRating >= 1 ? "gold" : "grey";
            let RstarColor2 = reviewRating >= 2 ? "gold" : "grey";
            let RstarColor3 = reviewRating >= 3 ? "gold" : "grey";
            let RstarColor4 = reviewRating >= 4 ? "gold" : "grey";
            let RstarColor5 = reviewRating >= 5 ? "gold" : "grey";

            return (
              <div key={index}>
                <div className="RstarRating">
                  <i className="fa-solid fa-star" style={{ color: RstarColor1 }}></i>
                  <i className="fa-solid fa-star" style={{ color: RstarColor2 }}></i>
                  <i className="fa-solid fa-star" style={{ color: RstarColor3 }}></i>
                  <i className="fa-solid fa-star" style={{ color: RstarColor4 }}></i>
                  <i className="fa-solid fa-star" style={{ color: RstarColor5 }}></i>
                </div>
                <p className="reviewBody">{review.body}</p>
                {review.userId === currentUser?.id && 
                  <button className="writeReviewLink reviewButton" onClick={() => dispatch(deleteReview(review.id))}>Delete Review</button>
                }
              </div>
            );
          })}
        </div>
        {/* <BusinessMap business={business} /> */}
      </div>
    </div>
  );
};

export default BusinessShowPage;


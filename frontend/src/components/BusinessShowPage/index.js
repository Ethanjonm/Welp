import { useSelector, useDispatch } from "react-redux";
import { useParams, Redirect } from "react-router-dom";
import { fetchBusiness } from "../../store/business";
import { useEffect } from "react"
import { getBusiness } from "../../store/business";
import { getReviews } from "../../store/review";
import business1 from "../images/business1.jpg"
import { fetchReviews } from "../../store/review";
import WriteReviewButton from "./WriteReviewButton";




const BusinessShowPage = () => {
    
    const dispatch = useDispatch()
    let shopId  = useParams()
    let business = useSelector(getBusiness(shopId.id))
    const reviews = useSelector(getReviews)
    
    console.log(shopId.id)

    const body = Object.values(reviews).map(item => item.body);

    // console.log(ids)

    
    // console.log(businessId.id , reviews, business, "hello")
    
    
    useEffect(() => {
        dispatch(fetchReviews(business))
    }, [business])   
    
    useEffect(() => {
        dispatch(fetchBusiness(shopId.id))
    }, [shopId.id])
    
    if (!business || !reviews) {
        return <div>...Loading</div>
    }
    const filteredReviews = Object.values(reviews)
    .filter(item => item.businessId === Number(shopId.id))
    .map(item => item.body);

    // console.log(filteredReviews);

    const reviewElements = filteredReviews.map((review, index) => (
        <p key={index}>Review {index + 1}: {review}</p>
      ));
    

    let rating = business.rating
    // let rating = 3
    let starColor1 = "grey"
    let starColor2 = "grey"
    let starColor3 = "grey"
    let starColor4 = "grey"
    let starColor5 = "grey"
    if (rating >= 1) {
        starColor1 = "gold"
    } else {
        starColor1 = "grey"
    }
    if (rating >= 2) {
        starColor2 = "gold"
    } else {
        starColor2 = "grey"
    }
    if (rating >= 3) {
        starColor3 = "gold"
    } else {
        starColor3 = "grey"
    }
    if (rating >= 4) {
        starColor4 = "gold"
    } else {
        starColor4 = "grey"
    }
    if (rating >= 5) {
        starColor5 = "gold"
    } else {
        starColor5 = "grey"
    }
    let price = business.priceRange
    const dollarSigns = [];
    for (let i = 0; i < price; i++) {
        dollarSigns.push(<i key={i} className="fa-solid fa-dollar-sign"></i>);
      }
    
    

    return (
        <div>
            <div className="topimage">
                <img src={business1} className="showimage"/>
            </div>
            <div className="bussinessinfo">
            <h1 className="businessName">{business.name}</h1>
            <div className="starRating">
            <i className="fa-solid fa-star" style={{ color: starColor1 }}></i>
            <i className="fa-solid fa-star" style={{ color: starColor2 }}></i>
            <i className="fa-solid fa-star" style={{ color: starColor3 }}></i>
            <i className="fa-solid fa-star" style={{ color: starColor4 }}></i>
            <i className="fa-solid fa-star" style={{ color: starColor5 }}></i>
            </div>
            {dollarSigns}
            <h3>{business.category}</h3>
            </div>
            <div>
                <p>Open</p>
                <p>9:00am ~ 9:00pm</p>
            </div>
            <div className="bottominfo">
            </div>
            <div>
                <WriteReviewButton businessId={shopId.id}/>
            </div>
            <div>
                {reviewElements}
            </div>
          
        </div>
    )

}

export default BusinessShowPage;
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchBusiness } from "../../store/business";
import { useEffect } from "react"
import { getBusiness} from "../../store/business";
import business1 from "../images/business1.jpg"



const BusinessShowPage = () => {

    const dispatch = useDispatch()
    let  businessId  = useParams()
    let business = useSelector(getBusiness(businessId.id))
    // console.log(businessId, business, "hello")

    useEffect(() => {
        dispatch(fetchBusiness(businessId.id))
    }, [businessId.id])


    let rating = business.rating
    let starColor1 = "grey"
    let starColor2 = "grey"
    let starColor3 = "grey"
    let starColor4 = "grey"
    let starColor5 = "grey"
    if (rating >= 1) {
        starColor1 = "gold"
    }
    if (rating >= 2) {
        starColor2 = "gold"
    }
    if (rating >= 3) {
        starColor3 = "gold"
    }
    if (rating >= 4) {
        starColor4 = "gold"
    }
    if (rating >= 5) {
        starColor5 = "gold"
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
                <button>Write a Review</button>
            </div>
          
        </div>
    )

}

export default BusinessShowPage;
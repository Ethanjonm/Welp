import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchBusiness } from "../../store/business";
import { useEffect } from "react"
import { getBusiness} from "../../store/business";



function BusinessShowPage() {

    const dispatch = useDispatch()
    let { businessId } = useParams()
    let business = useSelector(getBusiness(businessId))

    useEffect(() => {
        dispatch(fetchBusiness(businessId))
    }, [business])

    

    return (
        <div>
            <h1>
               {business.name}
            </h1>
        </div>
    )

}

export default BusinessShowPage;
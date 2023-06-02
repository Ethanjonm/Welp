import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchBusiness } from "../../store/business";
import { useEffect } from "react"
import { getBusiness} from "../../store/business";



function BusinessShowPage() {

    const dispatch = useDispatch()
    let { Id } = useParams()
    let business = useSelector(getBusiness(Id))
    console.log(Id, "hello")
    useEffect(() => {
        dispatch(fetchBusiness(Id))
    }, [])

    

    return (
        <div>
            <h1>
               business show
            </h1>
        </div>
    )

}

export default BusinessShowPage;
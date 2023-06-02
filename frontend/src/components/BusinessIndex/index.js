import { useSelector, useDispatch } from "react-redux";
import { fetchBusinesses } from "../../store/business";
import { useEffect } from "react"



function BusinessIndex() {

    // const dispatch = useDispatch()
    // const business = useSelector(fetchBusinesses())

    // useEffect(() => {
    //     dispatch(fetchBusinesses())
    // }, [])



    return (
        <div>
            <h1>index</h1>
            <h2></h2>
        </div>
    )

}


export default BusinessIndex;
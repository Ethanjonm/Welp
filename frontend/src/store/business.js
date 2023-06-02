

const RECEIVE_BUSINESS = 'business/RECEIVE_BUSINESS';
const RECEIVE_BUSINESSES = 'business/RECEIVE_BUSINESSES';


export const receiveBusinesses = (businesses) => ({
    type: RECEIVE_BUSINESSES,
    businesses,
});
  
export const receiveBusiness = (business) => ({
    type: RECEIVE_BUSINESS,
    business,
});

export const getBusiness = (businessId) => state => {
    return state?.business ? state.business[businessId] : null
}

export const getBusinesses = state => {
    return state?.business ? Object.values(state.business) : []
} 

export const fetchBusinesses = () => async (dispatch) => {
    const res = await fetch("/api/businesses");
    const data = await res.json();
    dispatch(receiveBusinesses(data));
};
  
export const fetchBusiness = (business_id) => async (dispatch) => {
    const res = await fetch(`/api/businesses/${business_id}`);
    const data = await res.json();
    dispatch(receiveBusiness(data));
};

const businessReducer = (state = {}, action) => {
    const newState = { ...state };
    switch (action.type) {
    case RECEIVE_BUSINESSES:
        return { ...state, ...action.business };
    case RECEIVE_BUSINESS:
        return { ...state, [action.business.id]: action.business };
    default:
        return { ...state };
    }
};

export default businessReducer;
  
  


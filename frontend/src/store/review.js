import csrfFetch from './csrf'

const RECEIVE_REVIEW = 'reviews/receiveReview';
const RECEIVE_REVIEWS = 'reviews/receiveReviews'; 
const REMOVE_REVIEW = 'reviews/removeReview';

export const receiveReview = (review) => ({
    type: RECEIVE_REVIEW,
    review
});

export const receiveReviews = (reviews) => ({
    type: RECEIVE_REVIEWS,
    reviews
}); 

export const removeReview = (reviewId) => ({
    type: REMOVE_REVIEW,
    reviewId
});


export const getReview = (reviewId) => (state) => {
    if (state.reviews) {
        return state.reviews[reviewId]
    } else {
        return null;
    }
};

export const getReviews = (state) => {
    if (state.reviews) {
        return Object.values(state.reviews);
    } else {
        return [];
    }
}

export const fetchReviews = (businessId) => async (dispatch) => {
    const res = await csrfFetch(`/api/businesses/${businessId}/reviews`); 

    if (res.ok) {
        const reviews = await res.json();
        dispatch(receiveReviews(reviews)); 
    }
    return res; 
};

export const fetchReview = (reviewId) => async (dispatch) => {
    const res = await csrfFetch(`/api/reviews/${reviewId}`); 

    if (res.ok) {
        const review = await res.json(); 
        dispatch(receiveReview(review))
    }
    return res;
}


export const createReview = (reviewObj, businessId, history) => async (dispatch) => {
    const res = await csrfFetch('/api/reviews/', {
        method: "POST",
        body: JSON.stringify(reviewObj)
    }); 

    if (res.ok) {
        const review = await res.json();
        dispatch(receiveReview(review));
        history.push(`/businesses/${businessId}`);
    }
    return res;
};

export const updateReview = (reviewObj, reviewId, businessId, history) => async (dispatch) => {
    const res = await csrfFetch(`/api/reviews/${reviewId}`, {
        method: "PATCH",
        body: JSON.stringify(reviewObj)
    });

    if (res.ok) {
        const review = await res.json();
        dispatch(receiveReview(review));
        history.push(`/businesses/${businessId}`); 
    }
    return res;
};

export const deleteReview = (reviewId) => async (dispatch) => {
    const res = await csrfFetch(`/api/reviews/${reviewId}`, {
        method: "DELETE"
    }); 

    if (res.ok) {
        dispatch(removeReview(reviewId)); 
    }
};



const reviewsReducer = (oldState = {}, action) => {
    const newState = {...oldState};

    switch(action.type) {
        case RECEIVE_REVIEW: 
            newState[action.review.businessId] = action.review.businessId; 
            return newState;
        case RECEIVE_REVIEWS: 
            return { ...oldState, ...action.reviews };
        case REMOVE_REVIEW:
            delete newState[action.reviewId];
            return newState; 
        default: 
            return newState; 
    };
};


export default reviewsReducer; 
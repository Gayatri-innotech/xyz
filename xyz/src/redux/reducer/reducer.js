import { GET_DETAILS, POST_DETAILS, UPDATE_DETAILS, DELETE_DETAILS, GET_DETAILS_USER } from "../type";

const initialState = {
    details: [],
    detailsById: [],
    userDetails: [],
    // isUpdateResponse: false,
    // isDeleteResponse: false,
    // isResponse: false,
};

const Reducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_DETAILS:
            return {
                details: action.payload,
            };
        case GET_DETAILS_USER:
            return {
                userDetails: action.payload,
            };
        // case POST_DETAILS:
        //     return {
        //         isResponse: action.payload,
        //     };
        // case UPDATE_DETAILS:
        //     return {
        //         isUpdateResponse: action.payload
        //     };
        // case DELETE_DETAILS:
        //     return {
        //         isDeleteResponse: action.payload
        //     };
        default:
            return state;
    }
};

export default Reducer;
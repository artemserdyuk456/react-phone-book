import * as actionTypes from '../action/actionTypes'

const initialState = {
    fireContacts: [],
    error: false,
    loading: false
};

const reducer = (state =initialState, action) => {
    switch (action.type){
        case actionTypes.FIREBASE_GET_DATA_START:
            return {
                ...state,
                loading: true
            };
        case actionTypes.FIREBASE_GET_DATA_SUCCESS:
            return {
                ...state,
                fireContacts: action.fireContacts,
                error: true
            };
        case actionTypes.FIREBASE_GET_DATA_FAIL:
            return {
                ...state,
                loading: false
            };
        case actionTypes.FIREBASE_DELETE_DATA:
            return {
                ...state,
                fireContacts: action.fireContacts
            };
        default: return state;
    }

};

export default reducer;
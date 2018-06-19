import * as actionTypes from '../action/actionTypes';

const initialState = {
    contacts: [],
    loading: false
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.GET_CONTACTDATA_START:
            return {
                ...state,
                loading: true
            };
        case actionTypes.GET_CONTACTDATA_SUCCESS:
            return {
                ...state,
                contacts: action.contacts,
                loading: false
            };
        case actionTypes.GET_CONTACTDATA_FAILED:
            return {
                ...state,
                loading: false
            };

        default: return state;
    }
};

export default reducer;
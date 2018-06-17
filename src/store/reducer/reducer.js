import * as actionTypes from '../action/actionTypes'

const initialState = {
    orderForm: [],
    error: false
};
const reducer = (state =initialState, action) => {
    switch (action.type){
        case actionTypes.POST_CONTACTDATA:
            return {
                ...state,
                orderForm: action.orderForm,
                error: false
            };
        case actionTypes.FETCH_CONTACT_FAILED:
            return {
                ...state,
                error: true

            }

    }

};

export default reducer;
import * as actionTypes from './actionTypes';
import axios from "axios";


//
// export const setContactData = (contact) => {
//     return {
//         type: actionTypes.SET_CONTACTDATA,
//         contact: contact
//     }
// };
//
// export const fetchContactFailed = () => {
//     return {
//         type: actionTypes.FETCH_CONTACT_FAILED
//     }
// };
//




export const successLoadData = (id, orderData) => {
    return {
        type: actionTypes.SUCCESS_LOAD_DATA,
        orderId: id,
        orderData: orderData


    }

};
export const failedLoadData = (error) => {
    return {
        type: actionTypes.FAILED_LOAD_DATA,
        error: error


    }

};
export const postContactData = (orderData) => {
    return dispatch => {
        axios.post('https://react-phone-book-app.firebaseio.com/contacts.json', orderData)
            .then( response =>{
                console.log(response.data);
                dispatch(successLoadData(response.data, orderData))
            })
            .catch( error => {
                dispatch(failedLoadData(error));
            })
    }
};

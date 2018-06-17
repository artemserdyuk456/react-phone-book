import * as actionTypes from './actionTypes';
import axios from "axios/index";

export const postContactData = (name) => {
    return {
        type: actionTypes.POST_CONTACTDATA,
        contactName: name
    }
};

export const getContactData = (name) => {
    return {
        type: actionTypes.GET_CONTACTDATA,
        contactName: name
    }
};

export const setContactData = (contact) => {
    return {
        type: actionTypes.SET_CONTACTDATA,
        contact: contact
    }
};

export const fetchContactFailed = () => {
    return {
        type: actionTypes.FETCH_CONTACT_FAILED
    }
};


export const initContacts = () => {
    return dispatch => {
        axios.post('https://react-phone-book-app.firebaseio.com/contacts.json', order)
            .then( response =>{
                console.log(response.data);
                dispatch(setContactData(response.data))
            })
            .catch( error => {
                dispatch(fetchContactFailed());
            })
    }

};

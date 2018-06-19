import  * as actionTypes from './actionTypes';
import axios from "axios";


export const getContactDataSuccess = (contacts) => {
    return {
        type: actionTypes.GET_CONTACTDATA_SUCCESS,
        contacts: contacts
    }
};

export const getContactDataFailed = (error) => {
    return {
        type: actionTypes.GET_CONTACTDATA_FAILED,
        error: error
    }
};

export const getContactDataStart = () => {
    return {
        type: actionTypes.GET_CONTACTDATA_START,
    }
};

export const getContactData = () => {
    return dispatch => {
        dispatch(getContactDataStart());
        axios.get('https://react-phone-book-app.firebaseio.com/contacts.json')
            .then( response => {
                const fetchedData = [];
                for (let key in response.data){
                    fetchedData.push({
                        ...response.data[key],
                        id: key
                    })
                }
                console.log(fetchedData);

                // Object.keys().map( key => ({ id: key, text: response.data[key].text}))
                dispatch(getContactDataSuccess(fetchedData));
                // console.log(fetchedData);
            })
            .catch(error => {
                dispatch(getContactDataFailed(error));
            })
    }

};

import * as actionTypes from './actionTypes';

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

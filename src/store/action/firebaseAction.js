import * as actionType from './actionTypes';
import { database } from '../../firebase/firebase';

export const firebaseGetDataSuccess = (fireContacts) => {
    return {
        type: actionType.FIREBASE_GET_DATA_SUCCESS,
        fireContacts: fireContacts
    }
};

export const firebaseGetDataFail = (error) => {
    return {
        type: actionType.FIREBASE_GET_DATA_FAIL,
        error: error
    }
};

export const firebaseGetDataStart = () => {
    return {
        type: actionType.FIREBASE_GET_DATA_START

    }
};

export const firebaseDeleteData = (fireContacts) => {
    return {
        type: actionType.FIREBASE_DELETE_DATA,
        fireContacts: fireContacts
    }
};

export const firebaseGetData = () => {
    return dispatch => {
        const contactsRef = database.ref('/contacts');
        contactsRef.on('value', (snapshot) => {
            const snpht = snapshot.val();
            const fireContacts = [];
            for (let key in snpht){
                fireContacts.push({...snpht[key],
                    id: key})
            }

            dispatch(firebaseGetDataSuccess(fireContacts));
            console.log(fireContacts);
        });
    }
};


// export const firebaseDeleteData = () => {
//     return dispatch => {
//         const fireForSearch = database.ref('/contacts');
//         fireForSearch.ref.child().on('value', (snapshot) => {
//             snapshot.ref().remove();
//             console.log(snapshot.val());
//         })
//     }
// };

import React, {Component} from 'react';

import {connect} from 'react-redux';
import { database } from '../../firebase/firebase';

// import Contacts from '../../components/Contacts/Contacts'
import * as searchDataAction from '../../store/action/searchDataAction';
import * as firebaseAction from '../../store/action/firebaseAction';

import * as actions from '../../store/action/index';
import map from 'lodash/map';

import axios from 'axios';


class SearchData extends Component {
    //USE FIREBASE
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         contacts: null
    //     };
    //     this.contactsRef = database.ref('/contacts');
    //
    // }





    // state = {
    //     contacts: [],
    //     loading: true
    // };




//USE FIREBASE1
    componentDidMount() {
        // this.contactsRef.on('value', (snapshot) => {
        //     this.setState({ contacts: snapshot.val()});
        //     // console.log(snapshot.val())
        // })
        this.props.firebaseGetData();
    }
/////////////////////////

    getContactData() {
        // this.props.onGetContacts();


        // axios.get('https://react-phone-book-app.firebaseio.com/contacts.json')
        //     .then( response => {
        //         const fetchedData = [];
        //         for (let key in response.data){
        //             fetchedData.push({
        //                 ...response.data[key],
        //                 id: key
        //             })
        //         }
        //         console.log(fetchedData);
        //
        //         this.setState({ loading:false, contacts: fetchedData});
        //
        //
        //     })
        //     .catch(error => console.log(error))
    }







    render() {
        //use firebase1
        // const {contacts} = this.state;


        return (
            <div>
                {/*//USE FIREBASE1*/}
                {/*<button onClick={this.componentDidMount}>CLICK ME</button>*/}

                {map(this.props.firebaseData, (contact, key) =>
                    <ul key={key}>
                        <li>Name:{}</li>
                        {/*<li>Name:{contact.orderData.lastName}</li>*/}
                        {/*<li>Company:{contact.orderData.company}</li>*/}
                        {/*<li>Number:{contact.orderData.phoneNumber}</li>*/}
                        {/*<li>Number:{contact.orderData.}</li>*/}
                    </ul>)}


                {/*<button onClick={this.getContactData}>Click</button>*/}

                {/*{Object.keys(this.state.contacts).map(contact =>(*/}
                    {/*<li key={contact.id}*/}
                    {/*name={contact.orderData.deliveryMethod}></li>*/}
                {/*))}*/}

                {/*without reduxXXX*/}
                {/*{contacts.map(contact =>*/}
                {/*<div >*/}
                    {/*<li>Name:{contact.name}</li>*/}
                {/*</div>)}*/}

                {/*<li></li>*/}

            </div>
        )
    }
}

const mapStateToProps = state => {
     return {
         // contacts: state.contact.contacts,
         // loading: state.contact.loading,
         firebaseData: state.firebase.fireContacts

     }
};

const mapDispatchToProps = dispatch => {
     return {
         firebaseGetData: () => dispatch(firebaseAction.firebaseGetData()),
         onGetContacts: () => dispatch(searchDataAction.getContactData())
     }
};


export default connect(mapStateToProps, mapDispatchToProps)(SearchData);

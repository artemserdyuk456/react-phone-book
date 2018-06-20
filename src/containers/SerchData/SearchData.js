import React, {Component} from 'react';

import {connect} from 'react-redux';
import { database } from '../../firebase/firebase';

import SectionAbout from '../../components/Contacts/SectionAbout';

// import Contacts from '../../components/Contacts/Contacts'
import * as searchDataAction from '../../store/action/searchDataAction';
import * as firebaseAction from '../../store/action/firebaseAction';

import * as actions from '../../store/action/index';
import map from 'lodash/map';

import Button from '../../components/UI/Button/Button';

import ContentEditable from 'react-contenteditable';

// import InlineEdit from 'react-edit-inline'; did not work get ERRoR


class SearchData extends Component {
    //USE FIREBASE
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         characters: null
    //     };
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

    // componentWillMount() {
    //     const fireForSearch = database.ref('/contacts');
    //     fireForSearch.orderByChild('name').on('value', (snapshot) => {
    //         this.setState({
    //             characters: snapshot.val()
    //         });
    //         console.log(snapshot.val());
    //     })
    // }


    removeContact(id) {
        const fireForSearch = database.ref('/contacts');
        fireForSearch.child(id).remove();


        // fireForSearch.ref.child(key).on('value', (snapshot) => {
        //     snapshot.ref().remove();
        //     console.log(snapshot.val());
        // })


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

    handleChange = evt => {
        this.setState({html: evt.target.value});
    };







    render() {
        //use firebase1
        // const {characters} = this.state;




        return (
            
            
            <div>
                {/*//USE FIREBASE1*/}
                {/*<button onClick={this.componentDidMount}>CLICK ME</button>*/}


                <form action="">
                    <input type='text' placeholder='search' />
                </form>
                
                {/*REDUX FIREBASE*/}
                {map(this.props.firebaseData, (contact, key) =>
                    <div key={key}>
                        <form >
                            <ContentEditable html={contact.orderData.name} onChange={this.handleChange}/>
                            <ContentEditable html={contact.orderData.lastName} onChange={this.handleChange}/>
                            <ContentEditable html={contact.orderData.company} onChange={this.handleChange}/>
                            <ContentEditable html={contact.orderData.phoneNumber} onChange={this.handleChange}/>
                            <ContentEditable html={contact.orderData.email} onChange={this.handleChange}/>

                            <Button btnType="Danger">Save</Button>

                        </form>

                        {/*<ul >*/}
                            {/*<li>{}</li>*/}
                            {/*<li>Name:{}</li>*/}
                            {/*<li>Company:{}</li>*/}
                            {/*<li>Number:{}</li>*/}
                            {/*<li>Email:{}</li>*/}
                        {/*</ul>*/}
                        <button onClick={() => this.removeContact(contact.id)}>DELETE</button>
                    </div>
                    )}



                {/*{map(characters,(contSerch, key) =>*/}
                    {/*<div key={key}>*/}
                        {/*<ul>*/}
                            {/*<li>Name: {contSerch.orderData.name}</li>*/}
                            {/*<li>Last Name: {contSerch.orderData.lastName}</li>*/}
                            {/*<li>Company: {contSerch.orderData.company}</li>*/}
                            {/*<li>Number: {contSerch.orderData.phoneNumber}</li>*/}
                        {/*</ul>*/}
                        {/**/}
                    {/*</div>*/}


                {/*)}*/}
                    {/**/}


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
         // onGetContacts: () => dispatch(searchDataAction.getContactData())
     }
};


export default connect(mapStateToProps, mapDispatchToProps)(SearchData);

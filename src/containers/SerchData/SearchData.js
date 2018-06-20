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

// import ContentEditable from 'react-contenteditable';
import * as contactDataActions from "../../store/action";

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


    state = {
        rewriteForm: {
            name: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Your Name'
                },
                value: '',
                validation: {
                    required: true
                },
                valid: false,
                touched: false
            },
            lastName: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Lastname'
                },
                value: '',
                validation: {
                    required: true
                },
                valid: false,
                touched: false
            },
            phoneNumber: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Phone number'
                },
                value: '',
                validation: {
                    required: true,
                    minLength: 10,
                    maxLength: 10
                },
                valid: false,
                touched: false
            },
            company: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Company'
                },
                value: '',
                validation: {
                    required: true
                },
                valid: false,
                touched: false
            },
            email: {
                elementType: 'input',
                elementConfig: {
                    type: 'email',
                    placeholder: 'Your E-Mail'
                },
                value: '',
                validation: {
                    required: true
                },
                valid: false,
                touched: false
            },
            deliveryMethod: {
                elementType: 'select',
                elementConfig: {
                    options: [
                        {value: 'male', displayValue: 'Male'},
                        {value: 'female', displayValue: 'Female'}
                    ]
                },
                value: '',
                validation: {},
                valid: true
            }
        },
        formIsValid: false,
        loading: false
    };



    reWriteContactHandler = ( event ) => {
        event.preventDefault();
        const reformData = {};
        for (let formElementIdentifier in this.state.rewriteForm) {
            reformData[formElementIdentifier] = this.state.rewriteForm[formElementIdentifier].value;
        }
        const reContact = {
            reData: reformData
        };

        this.props.onPostContactData(reContact);
    };

    reChangedHandler = (event, identifier) => {
        const updatedContactForm = {
            ...this.state.orderForm
        };
        const updatedFormElement = {
            ...updatedContactForm[identifier]
        };
        updatedFormElement.value = event.target.value;
    } ;



//USE FIREBASE1
    componentDidMount() {
        this.props.firebaseGetData();
    }

    removeContact(id) {
        const fireForSearch = database.ref('/contacts');
        fireForSearch.child(id).remove();
    }
/////////////////////////

    getContactData() {
        // this.props.onGetContacts();

    }

    handleChange = (evt) => {
        this.setState({rewriteValue: evt.target.value});
        // console.log(evt.target.value)

    };







    render() {
        //use firebase1
        // const {characters} = this.state;
        const reValue = this.handleChange;

        const reFormElementsArray = [];
        for (let key in this.state.rewriteForm) {
            reFormElementsArray.push({
                id: key,
                config: this.state.rewriteForm[key]
            });
        }
        return (
            <div>
                <form action="">
                    <input type='text' placeholder='search' />
                </form>
                {/*REDUX FIREBASE*/}

                {map(this.props.firebaseData, (contact, key) =>
                    <div key={key}>
                        <div onSubmit={this.reWriteContactHandler}>
                            {reFormElementsArray.map(reElementValue =>(
                                <span
                                    key={reElementValue.id}
                                    contentEditable
                                    onChange={(event)=>this.reChangedHandler(event, reElementValue.id)}> {contact.orderData.email}</span>
                                // <span   contentEditable onChange={this.handleChange}> {contact.orderData.lastName}</span>
                                // <span   contentEditable onChange={this.handleChange}> {contact.orderData.company}</span>
                                // <span   contentEditable onChange={this.handleChange}> {contact.orderData.phoneNumber}</span>
                                // <span   contentEditable onChange={this.handleChange}> {contact.orderData.email}</span>
                                //
                            ))}
                            <button>Save</button>
                        </div>
                        <button onClick={() => this.removeContact(contact.id)}>DELETE</button>
                    </div>
                )}

                            {/*<ContentEditable html= onChange={this.handleChange}/>*/}
                            {/*<ContentEditable html={contact.orderData.lastName} onChange={this.handleChange}/>*/}
                            {/*<ContentEditable html={contact.orderData.company} onChange={this.handleChange}/>*/}
                            {/*<ContentEditable html={contact.orderData.phoneNumber} onChange={this.handleChange}/>*/}
                            {/*<ContentEditable html={contact.orderData.email} onChange={this.handleChange}/>*/}


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
         onPostContactData: (orderData) => dispatch(contactDataActions.postContactData(orderData)),
         firebaseGetData: () => dispatch(firebaseAction.firebaseGetData()),
         // onGetContacts: () => dispatch(searchDataAction.getContactData())
     }
};


export default connect(mapStateToProps, mapDispatchToProps)(SearchData);

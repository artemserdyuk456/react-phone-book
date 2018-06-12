import React, { Component } from 'react';

import Input from '../../components/UI/Input/Input';
import Button from '../../components/UI/Button/Button';
import InputImg from '../../components/UI/InputImg/InputImg';
import axios from 'axios';
import ImageUploader from 'react-images-upload';
import classes from './ContactData.css';



class ContactData extends Component {
    constructor(props) {
        super(props);
        this.imgState = { pictures: []};
        this.onDrop = this.onDrop.bind(this);
    }

    onDrop(picture) {
        this.setState({
            pictures: this.imgState.pictures.concat(picture),
        })
    }

    state = {
        orderForm: {
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
        loading: false
    };

    orderHandler = ( event ) => {
        event.preventDefault();
        this.setState( { loading: true } );
        const formData = {};
        for (let formElementIdentifier in this.state.orderForm) {
            formData[formElementIdentifier] = this.state.orderForm[formElementIdentifier].value;
        }
        const order = {
            orderData: formData
        };
        axios.post('https://react-phone-book-app.firebaseio.com/contacts.json', order)
            .then( response =>{
                console.log(response) ;
                this.setState( {loading: false});
            })
            .catch( error => {
                this.state( {loading: false});
            })
    };

    //custom validation
    checkValidity (value, rules) {
        let isValid = true;

        if (rules.required) {
            isValid = value.trim() !== '' && isValid;
        }

        if (rules.minLength) {
            isValid = value.length >= rules.minLength && isValid;
        }

        if (rules.maxLength) {
            isValid = value.length <= rules.maxLength && isValid;
        }

        return isValid;


    }

    inputChangedHandler = (event, inputIdentifier) => {
        const updatedOrderForm = {
            ...this.state.orderForm
        };
        const updatedFormElement = {
            ...updatedOrderForm[inputIdentifier]
        };
        updatedFormElement.value = event.target.value;
        updatedFormElement.valid = this.checkValidity(updatedFormElement.value, updatedFormElement.validation); //validation
        updatedFormElement.touched = true;
        updatedOrderForm[inputIdentifier] = updatedFormElement;
        console.log(updatedFormElement); //validation work
        this.setState({orderForm: updatedOrderForm});
    };


    render () {
        const formElementsArray = [];
        for (let key in this.state.orderForm) {
            formElementsArray.push({
                id: key,
                config: this.state.orderForm[key]
            });
        }
        let form = (
            <form onSubmit={this.orderHandler}>
                {formElementsArray.map(formElement => (
                    <Input
                        key={formElement.id}
                        elementType={formElement.config.elementType}
                        elementConfig={formElement.config.elementConfig}
                        value={formElement.config.value}
                        invalid={!formElement.config.valid}
                        shouldValidate = {formElement.config.validation}
                        touched={formElement.config.touched}
                        changed={(event) => this.inputChangedHandler(event, formElement.id)} />
                ))}
                <Button btnType="Success">Add Contact</Button>
            </form>
        );

        return (
            <div className={classes.ContactData}>
                <h4>Enter your Phone Contact Data</h4>
                {/*<InputImg/>*/}
                <ImageUploader
                    withIcon={false}
                    buttonText='Add image'
                    onChange={this.onDrop}
                    withPreview={true}/>
                    {/*imgExtension={['.jpg', '.git', '.png']}*/}
                {form}
            </div>
        );
    }
}

export default ContactData;
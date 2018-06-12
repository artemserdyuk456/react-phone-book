import React, { Component } from 'react';

import Input from '../../components/UI/Input/Input';
import Button from '../../components/UI/Button/Button';
import InputImg from '../../components/UI/InputImg/InputImg';
import axios from 'axios';
import ImageUploader from 'react-images-upload';
import classes from './ContactData.css';



class ContactData extends Component {

    //add img fnc
    constructor(props) {
        super(props);
        this.imgState = {
            picture: '',
            imagePreviewUrl: ''
        };
        // this._handleImgChange = this._handleImgChange.bind(this);
        // this._handleSubmit = this._handleSubmit.bind(this)
    }

    _handleSubmit (e) {
        e.preventDefault();
    };

    _handleImgChange (e) {
        e.preventDefault();

        let reader = new FileReader();
        let picture = e.target.files[0];

        reader.onloadend = () => {
            this.setState({
                picture: picture,
                imagePreviewUrl: reader.result
            })
        };

        reader.readAsDataURL(picture)

    };






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
        formIsValid: false,
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
        // console.log(updatedFormElement); //validation work

        let formIsValid = true;
        for (let inputIdentifier in updatedOrderForm) {
            formIsValid = updatedOrderForm[inputIdentifier].valid && formIsValid;
        }
        this.setState({orderForm: updatedOrderForm, formIsValid: formIsValid});
    };


    render () {
        let {imagePreviewUrl} = this.imgState;
        let $imagePreview = null;

        if (imagePreviewUrl) {
            $imagePreview = (<img src={imagePreviewUrl}/> )
        } else {
            $imagePreview =(<div className={classes.PreviewText}>
                add img</div>);
        }

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
                <Button btnType="Success" disabled={!this.state.formIsValid}>Add Contact</Button>
            </form>
        );

        return (
            <div className={classes.ContactData}>
                <h4>Enter your Phone Contact Data</h4>

                {/*<form onSubmit={(e) => this._handleSubmit(e)}>*/}
                    {/*<input className={classes} type="file" onChange={(e) => this._handleImgChange(e)} />*/}
                    {/*<button type="submit" onClick={(e) => this._handleSubmit(e)}>Add Image</button>*/}
                {/*</form>*/}
                {/*<div className={classes.ImgPreview}>*/}
                    {/*{$imagePreview}*/}
                {/*</div>*/}

                {form}
            </div>
        );
    }
}

export default ContactData;
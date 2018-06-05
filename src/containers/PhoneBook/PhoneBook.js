import React, { Component } from 'react';
import "./PhoneBook.css";
import ContactData from "../ContactData/ContactData";


class PhoneBook extends Component {
    render () {
        return (
            <div className="PhoneBook">
                <ContactData/>
            </div>
        )
    }
}

export default PhoneBook;
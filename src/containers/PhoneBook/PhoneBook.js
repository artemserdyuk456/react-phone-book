import React, { Component } from 'react';
import "./PhoneBook.css";
import ContactData from "../ContactData/ContactData";
import SearchData from "../SerchData/SearchData";


class PhoneBook extends Component {
    render () {
        return (
            <div className="PhoneBook">
                <ContactData/>
                <SearchData/>
            </div>
        )
    }
}

export default PhoneBook;
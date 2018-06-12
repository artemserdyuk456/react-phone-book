import React, { Component } from 'react';
import axios from 'axios';

class InputImg extends Component {
    state = {
        selectedImg: null
    };

    imgSelectedHandler = event => {
        this.setState({
            selectedImg: event.target.files[0]
        })
    };

    imgUpLoadHandler = () => {
        axios.post('https://react-phone-book-app.firebaseio.com/contacts.json', this.state)

    };

    render () {
        return (
            <div className="">
                <input type="file" onChange={this.imgSelectedHandler}/>
            </div>
        )
    }
}

export default InputImg;

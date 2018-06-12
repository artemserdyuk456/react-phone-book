import React, { Component } from 'react';

class InputImg extends Component {
    imgSelectedHandler = event => {
        console.log(event.target.file[0]);
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

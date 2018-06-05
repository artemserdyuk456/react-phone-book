import React, { Component } from 'react';

import PhoneBook from './containers/PhoneBook/PhoneBook'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
          <PhoneBook/>
      </div>
    );
  }
}

export default App;

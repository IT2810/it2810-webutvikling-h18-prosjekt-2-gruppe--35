import React, { Component } from 'react';
import axios from 'axios';
import logo from './logo.svg';
import ImageTabs from './ImageTabs.jsx'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Title of thing</h1>
        <ImageTabs />
      </div>
    );
  }
}

export default App;

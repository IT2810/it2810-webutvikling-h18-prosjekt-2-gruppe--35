import React, { Component } from 'react';
import logo from './logo.svg';
import ImageTabs from './components/ImageTabs.jsx'

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

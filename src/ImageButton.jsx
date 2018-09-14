import React, { Component } from 'react';
import './ImageTabs.css';

class ImageButton extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name : this.props.name,
            text : this.props.text,
        }
    };

    render() {
    return <div className="tab" onClick={() => alert(this.props.text)}>{this.state.name}</div>;
  };
}

export default ImageButton;

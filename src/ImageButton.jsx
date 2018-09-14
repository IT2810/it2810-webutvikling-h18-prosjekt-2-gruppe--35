import React, { Component } from 'react';

class ImageButton extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name : this.props.name,
            text : this.props.text,
        }
    };

    render() {
    return <button onClick={() => alert(this.props.text)}>{this.state.name}</button>;
  };
}

export default ImageButton;

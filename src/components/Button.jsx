import React, { Component } from 'react';
import "./Button.css";

class Button extends Component {
    render() {
        return (
            <div>
                <div className="tab" onClick={() => {this.props.handleClick(this.props.index, this.props.name)}}>{this.props.name}</div>
            </div>
        );
    };
}

export default Button;

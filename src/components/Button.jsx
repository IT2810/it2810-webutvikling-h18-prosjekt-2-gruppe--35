import React, { Component } from 'react';
import "./Button.css";

class Button extends Component {
    render() {
        let buttonClass = (this.props.name === this.props.activeButton)? "active" : "tab";
        return (
            <div>
                <div
                    className={buttonClass}
                    onClick={() =>
                        {this.props.handleClick(
                            this.props.index,
                            this.props.name)}}>{this.props.name}</div>
            </div>
        );
    };
}

export default Button;

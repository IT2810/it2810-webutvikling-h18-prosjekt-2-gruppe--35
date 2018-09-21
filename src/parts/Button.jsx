import React, { Component } from 'react';
import "./Button.css";

/*
*   The Button.jsx file has the purpose of creating a div that looks like a
*   button, displaying some text. It is sent down a function that tells its parent
*   who is selected, and the parent sends that value down to all of the buttons.
*   Then the buttons has the responsibility to check themselves if they are
*   checked or not.
*/

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

import React, { Component } from 'react';
import Button from "./Button.jsx";

class ButtonTabs extends Component {
    constructor() {
        super();
        this.state = {
            activeButton:null,
        }
    }

    buttonClick(index, buttonName) {
        this.setState({activeButton:buttonName});
        this.props.onSelected(index);
    }

    createButtons() {
        const buttons = [];
        const buttonNames = ["Home", "One", "Two", "Three", "Four"];
        const numberOfButtons = buttonNames.length
        for (let button = 0; button < numberOfButtons; button++) {
            buttons.push(<Button handleClick={this.buttonClick.bind(this)} name={buttonNames[button]} index={button} activeButton={this.state.activeButton} />);
        }
        return buttons;
    }

    render() {
            return (
                <div>
                    {this.createButtons()}
                </div>
            );
        }
}

export default ButtonTabs;

import React, { Component } from 'react';
import Button from "../parts/Button.jsx";

/*
*   The ButtonTabs.jsx file has the responisbility of telling the parent (App.js)
*   which one of the buttons has been clicked.
*/

class ButtonTabs extends Component {
    constructor() {
        super();
        this.state = {
            activeButton:"Home",
        }
    }

    //Sends the clicked button to the parent
    buttonClick(index, buttonName) {
        this.setState({activeButton:buttonName});
        this.props.onSelected(index);
    }

    //Dynamically creates all of the buttons 
    createButtons() {
        const buttons = [];
        const buttonNames = ["Home", "One", "Two", "Three", "Four"];
        const numberOfButtons = buttonNames.length
        for (let button = 0; button < numberOfButtons; button++) {
            buttons.push(
                <Button
                    key={button}
                    handleClick={this.buttonClick.bind(this)}
                    name={buttonNames[button]}
                    index={button}
                    activeButton={this.state.activeButton} />);
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

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

    render() {
            return (
                <div id="test">
                    <Button name="Home" handleClick={this.buttonClick.bind(this)} index="0" activeButton={this.state.activeButton}/>
                    <Button name="One" handleClick={this.buttonClick.bind(this)} index="1" activeButton={this.state.activeButton}/>
                    <Button name="Two" handleClick={this.buttonClick.bind(this)} index="2" activeButton={this.state.activeButton}/>
                    <Button name="Three" handleClick={this.buttonClick.bind(this)} index="3" activeButton={this.state.activeButton}/>
                    <Button name="Four" handleClick={this.buttonClick.bind(this)} index="4" activeButton={this.state.activeButton}/>
                </div>
            );
        }
}

export default ButtonTabs;

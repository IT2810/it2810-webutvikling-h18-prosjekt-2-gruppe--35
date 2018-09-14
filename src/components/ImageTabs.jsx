import React, { Component } from 'react';
import axios from "axios";
import ImageButton from "./ImageButton.jsx";

class ImageTabs extends Component {
    constructor() {
        super();
        this.state = {
            activeButton:null,
        }
    }

    hallo(buttonName) {
        this.setState({activeButton:buttonName});
    }

    render() {
            return (
                <div>
                    <ImageButton name="Home" onclick={this.hallo.bind(this)} activeButton={this.state.activeButton}/>
                    <ImageButton name="One" onclick={this.hallo.bind(this)} activeButton={this.state.activeButton}/>
                    <ImageButton name="Two" onclick={this.hallo.bind(this)} activeButton={this.state.activeButton}/>
                    <ImageButton name="Three" onclick={this.hallo.bind(this)} activeButton={this.state.activeButton}/>
                    <ImageButton name="Four" onclick={this.hallo.bind(this)} activeButton={this.state.activeButton}/>
                </div>
            );
        }
}

export default ImageTabs;

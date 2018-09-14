import React, { Component } from 'react';
import axios from "axios";
import ImageButton from "./ImageButton.jsx";

class ImageTabs extends Component {
    constructor() {
        super();
    }

    render() {
            return (
                <div>
                    <ImageButton name="HomePage" />
                    <ImageButton name="One" />
                    <ImageButton name="Two" />
                    <ImageButton name="Three" />
                    <ImageButton name="Four" />
                </div>
            );
        }
}

export default ImageTabs;

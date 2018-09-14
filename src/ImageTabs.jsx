import React, { Component } from 'react';
import axios from "axios";
import ImageButton from "./ImageButton.jsx";

const instyle = {
    display: 'flex',
    flexDirection: 'column'
}

class ImageTabs extends Component {
    constructor() {
        super();
        this.state = {
            romanticNationalism : {},
            owenWilson : {},
            shakespeare : {},
            text : {}
        };
    }

    componentDidMount() {
        fetch("../resources/poem.json")
          .then(res => res.json())
          .then(
              (result) => {
                  this.setState({romanticNationalism:result.romanticNationalism});
                  this.setState({owenWilson:result.owenWilson});
                  this.setState({shakespeare:result.shakespeare});
              }
          )
    }

    renderPoemText(poem) {

    }

    render() {
            return (
                <div style={instyle}>
                    <ImageButton name="Home" text="Müller" />
                    <ImageButton name="One" text={this.state.romanticNationalism.poemOne} />
                    <ImageButton name="Two" text={this.state.owenWilson.poemOne} />
                    <ImageButton name="Three" text={this.state.shakespeare.poemOne} />
                    <ImageButton name="Four" />
                </div>
            );
        }
}

export default ImageTabs;

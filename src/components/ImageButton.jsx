import React, { Component } from 'react';
import Image from '../parts/Image.jsx'

class ImageButton extends Component {
    constructor() {
        super();
        this.state = {
            imageUrl:"",
            poem:"",
            show:false,
        }
    }

    prepareFecth(imageNumber) {
        switch(imageNumber) {
            case "One":
                fetch("../resources/poem.json")
                    .then(res => res.json())
                    .then(
                        (result) => {
                            this.setState({poem:result.romanticNationalism.poemOne});
                        });
                fetch("../../resources/images/sloyfegutt/img1.jpg")
                    .then(result => this.setState({imageUrl:result.url}));
                break;
            case "Two":
                break;
            case "Three":
                break;
        }
    }

    fetchResources(textUrl, imageUrl, soundUrl) {

    }

    render() {
        return (
            <div>
                <button onClick={() => this.prepareFecth(this.props.name)}>{this.props.name}</button>
                <Image imageUrl={this.state.imageUrl}/>
                <p>{this.state.poem}</p>
            </div>
        );
    };
}

export default ImageButton;

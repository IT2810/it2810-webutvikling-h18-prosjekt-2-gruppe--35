import React, { Component } from 'react';
import Image from '../parts/Image.jsx';
import "../ImageTabs.css";

class ImageButton extends Component {
    constructor() {
        super();
        this.state = {
            imageUrl:"",
            poem:"",
            show:false,
        }
    }

    prepareFetch(imageNumber) {
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
                fetch("../resources/poem.json")
                    .then(res => res.json())
                    .then(
                        (result) => {
                            this.setState({poem:result.romanticNationalism.poemTwo});
                        });
                fetch("../../resources/images/sloyfegutt/img2.jpg")
                    .then(result => this.setState({imageUrl:result.url}));
                break;
            case "Three":
                fetch("../resources/poem.json")
                    .then(res => res.json())
                    .then(
                        (result) => {
                            this.setState({poem:result.romanticNationalism.poemThree});
                        });
                fetch("../../resources/images/sloyfegutt/img3.jpg")
                    .then(result => this.setState({imageUrl:result.url}));
                break;
            case "Four":
                fetch("../resources/poem.json")
                    .then(res => res.json())
                    .then(
                        (result) => {
                            this.setState({poem:result.romanticNationalism.poemFour});
                        });
                fetch("../../resources/images/sloyfegutt/img4.jpg")
                    .then(result => this.setState({imageUrl:result.url}));
                break;
        }
    }

    checkActiveButton() {
        console.log(this.props.name);
        console.log(this.props.activeButton);
        if (this.props.name === this.props.activeButton) {
            this.prepareFetch(this.props.name);
            return (
                <div>
                    <Image imageUrl={this.state.imageUrl}/>
                    <p>{this.state.poem}</p>
                </div>
            );
        }
    }

    render() {
        return (
            <div>
                <div className="tab" onClick={() => this.props.onclick(this.props.name)}>{this.props.name}</div>
                {this.checkActiveButton()}
            </div>
        );
    };
}

export default ImageButton;

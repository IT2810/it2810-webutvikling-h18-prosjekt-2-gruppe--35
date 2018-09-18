import React, { Component } from 'react';
import Image from '../parts/Image.jsx';
import Audio from '../parts/Audio.jsx';
import "../ImageButton.css";

class ImageButton extends Component {
    constructor() {
        super();
        this.state = {
            imageUrl:"",
            poem:"",
            soundUrl:"",
            loaded:false,
        }
    }

    fetchJson(url){
        return fetch(url);
    }

    prepareFetch(imageNumber) {
        let poem, img, audio;
        switch(imageNumber) {
            case "One":
                poem = new Promise ((resolve) => resolve((this.fetchJson("../resources/poem.json").then(res => res.json()))));
                img = new Promise ((resolve) => resolve(this.fetchJson("../../resources/images/sloyfegutt/img1.jpg")));
                audio = new Promise((resolve) => resolve(this.fetchJson('../../resources/audio/sport/sport_1.mp3')));
                Promise.all([poem, img, audio]).then((result) => this.setState({poem:result[0].romanticNationalism.poemOne, imageUrl:result[1].url, audioUrl:result[1].url}));
                break;

            case "Two":
                poem = new Promise ((resolve) => resolve((this.fetchJson("../resources/poem.json").then(res => res.json()))));
                img = new Promise ((resolve) => resolve(this.fetchJson("../../resources/images/sloyfegutt/img2.jpg")));
                Promise.all([poem, img]).then((result) => this.setState({poem:result[0].romanticNationalism.poemTwo, imageUrl:result[1].url}));
                break;
            case "Three":
                poem = new Promise ((resolve) => resolve((this.fetchJson("../resources/poem.json").then(res => res.json()))));
                img = new Promise ((resolve) => resolve(this.fetchJson("../../resources/images/sloyfegutt/img3.jpg")));
                Promise.all([poem, img]).then((result) => this.setState({poem:result[0].romanticNationalism.poemThree, imageUrl:result[1].url}));
                break;
            case "Four":
                poem = new Promise ((resolve) => resolve((this.fetchJson("../resources/poem.json").then(res => res.json()))));
                img = new Promise ((resolve) => resolve(this.fetchJson("../../resources/images/sloyfegutt/img4.jpg")));
                Promise.all([poem, img]).then((result) => this.setState({poem:result[0].romanticNationalism.poemOne, imageUrl:result[1].url}));
                break;
        }
    }

    checkActiveButton() {
        if (this.props.name === this.props.activeButton) {
            return (
                <div>
                    <Image imageUrl={this.state.imageUrl}/>
                    <p>{this.state.poem}</p>

                    <Audio audioUrl={this.state.audioUrl}/>
                </div>

            );
        }
    }

    render() {
        return (
            <div>
                <div className="tab" onClick={() => {this.props.onclick(this.props.name), this.prepareFetch(this.props.name)}}>{this.props.name}</div>
                {this.checkActiveButton()}
            </div>
        );
    };
}

export default ImageButton;

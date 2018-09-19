import React, { Component } from 'react';
//import logo from './logo.svg';
import ButtonTabs from './components/ButtonTabs.jsx';
import CheckboxTabs from './components/CheckboxTabs.jsx';
import ContentBox from './parts/ContentBox.jsx';
import Audio from './parts/Audio.jsx';
import "./App.css";

const imageDict = {
                    Animals:'/resources/images/dyr',
                    BowtieLad:'/resources/images/sloyfegutt',
                    BlackAndWhite:'/resources/images/svarthvitt'};

const textDict = {  OwenWilson: '/resources/json/wilfredOwen.json',
                    RomanticNationalism: 'resources/json/romanticNationalism.json',
                    Shakespeare: '/resources/json/shakespeare.json'};

const soundDict = { ASMR: '/resources/audio/ASMR',
                    Sport: '/resources/audio/sport',
                    Music: '/resources/audio/music'};


class App extends Component {
    constructor() {
        super();
        this.state = {
            text:null,
            textNumber:null,
            imageCategory:null,
            soundCategory:null,
            imageUrl:null,
            soundUrl:null,
            soundNumber:0,
        }
    }

    pushSelectedCategory(id, category) {
        id = id.replace(/ /g, '');
        let resourceUrl;
        switch(category) {
            case 'image':
                resourceUrl = this.iterateDictionary(id, imageDict);
                console.log("image");
                this.setState({imageCategory:resourceUrl});
                break;
            case 'text':
                resourceUrl = this.iterateDictionary(id, textDict);
                this.textFetching(resourceUrl);
                break;
            case 'sound':
                resourceUrl = this.iterateDictionary(id, soundDict);
                this.setState({soundCategory:resourceUrl});
                break;
            default:
                this.setState({imageCategory:null, text:null, soundCategory:null});
                break;
        }
    }

    iterateDictionary(id, dict) {
        for (const option in dict) {
            if (id === option) {
                return dict[option];
            }
        }
    }

    textFetching(resourceUrl) {
        if (!this.caching(resourceUrl)) {
            resourceUrl = new Promise ((resolve) => resolve(fetch(resourceUrl).then(res => res.json())));
            Promise.all([resourceUrl]).then((result) => this.textParseJson(result[0]));
        }
    }

    textParseJson(textObject) {
        let textPElements = [];
        for (const poemNr in textObject) {
            textPElements.push(<p key={poemNr}>{textObject[poemNr]}</p>);
        }
        const textDiv = (<div>{textPElements}</div>);
        const textPromise = new Promise ((resolve) => resolve(this.setState({text:textDiv})));
    }

    textGetPoemDiv(index) {
        for (const lineNr in this.state.text) {
            const pElement = (<p>{this.state.text[lineNr]}</p>);
            console.log(pElement);
        }
    }

    caching(resour) {
        return false;
    }

    getImageIndex(index) {
        index = parseInt(index, 10);
        let url, urlSound;
        switch(index) {
            case 0:
                break;
            case 1:
                url = "/img1.jpg";
                urlSound="/resources/audio/ASMR/asmr1.mp3";
                break;
            case 2:
                url = "/img2.jpg";
                urlSound="/asmr2.mp3";
                break;
            case 3:
                url = "/img3.jpg";
                urlSound="/asmr3.mp3";
                break;
            case 4:
                url = "/img4.jpg";
                urlSound="/asmr4.mp3";
                break;
            default:
                url = "/";
        }
        this.setState({imageUrl:url});
        this.setState({soundUrl:urlSound});
    }

    getImageUrl() {
        const categoryUrl = this.state.imageCategory;
        const imageUrl = this.state.imageUrl;
        return (categoryUrl + imageUrl);
    }

    getSoundUrl() {
        const categoryUrl2 = this.state.soundCategory;
        const soundUrl = this.state.soundUrl;
        return (categoryUrl2 + soundUrl);
    }

    renderContentBox() {
        if (this.state.text !== null && this.state.imageUrl !== null && this.state.imageCategory !== null) {
            return (<ContentBox textDiv={this.state.text} imageUrl={this.getImageUrl()} soundUrl={this.getSoundUrl()}/>);
        } else {
            return false;
        }
    }

    render() {
        return (
          <div className="App">
            <h1>Title of thing</h1>
            <div className="container">
                <ButtonTabs className="ImageTabs" onSelected={this.getImageIndex.bind(this)}/>
                {this.renderContentBox()}
                <Audio soundUrl={this.state.soundUrl}/>
                <CheckboxTabs className="CheckboxTabs" selectedCategory={this.pushSelectedCategory.bind(this)} />
            </div>          </div>
        );
    }
}

export default App;

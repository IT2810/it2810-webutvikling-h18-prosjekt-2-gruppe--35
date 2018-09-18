import React, { Component } from 'react';
//import logo from './logo.svg';
import ButtonTabs from './components/ButtonTabs.jsx';
import CheckboxTabs from './components/CheckboxTabs.jsx';
import ContentBox from './parts/ContentBox.jsx';

const imageDict = {
                    Animals:'/resources/images/dyr',
                    BowtieLad:'/resources/images/sloyfegutt',
                    BlackAndWhite:'/resources/images/svarthvitt'};

const textDict = {  OwenWilson: '/resources/json/owenWilson.json',
                    RomanticNationalism: 'resources/json/romanticNationalism.json',
                    Shakespeare: '/resources/json/shakespeare.json'};

const soundDict = {};


class App extends Component {
    constructor() {
        super();
        this.state = {
            text:null,
            textNumber:0,
            imageCategory:null,
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
                this.setState({imageCategory:resourceUrl});
                break;
            case 'text':
                resourceUrl = this.iterateDictionary(id, textDict);
                this.textFetching(resourceUrl);
                break;
            case 'sound':
                resourceUrl = this.iterateDictionary(id, soundDict);
                this.setState({soundUrl:resourceUrl});
                break;
            default:
                this.setState({imageCategory:null, text:null, soundUrl:null});
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
        let url;
        switch(index) {
            case 0:
                break;
            case 1:
                url = "/img1.jpg";
                break;
            case 2:
                url = "/img2.jpg";
                break;
            case 3:
                url = "/img3.jpg";
                break;
            case 4:
                url = "/img4.jpg";
                break;
            default:
                url = "/";
        }
        this.setState({imageUrl:url});
    }

    getImageUrl() {
        const categoryUrl = this.state.imageCategory;
        const imageUrl = this.state.imageUrl;
        return (categoryUrl + imageUrl);
    }

    renderContentBox() {
        if (this.state.text !== null && this.state.getImageUrl !== null) {
            return (<ContentBox textDiv={this.state.text} imageUrl={this.getImageUrl()}/>);
        } else {
            return false;
        }
    }

    render() {
        return (
          <div className="App">
            <h1>Title of thing</h1>
            <ButtonTabs onSelected={this.getImageIndex.bind(this)} />
            {this.renderContentBox()}
            <CheckboxTabs selectedCategory={this.pushSelectedCategory.bind(this)} />
          </div>
        );
    }
}

export default App;

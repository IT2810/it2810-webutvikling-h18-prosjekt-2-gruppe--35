import React, { Component } from 'react';
//import logo from './logo.svg';
import ButtonTabs from './components/ButtonTabs.jsx';
import CheckboxTabs from './components/CheckboxTabs.jsx';
import ContentBox from './components/ContentBox.jsx';
import "./App.css";

const imageDict = {
                    Animals:'/resources/images/animals',
                    Gems:'/resources/images/gems',
                    BlackAndWhite:'/resources/images/black&white'};

const textDict = {  WilfredOwen: '/resources/json/wilfredOwen.json',
                    RomanticNationalism: 'resources/json/romanticNationalism.json',
                    Shakespeare: '/resources/json/shakespeare.json'};

const soundDict = { ASMR: '/resources/audio/ASMR',
                    Sport: '/resources/audio/sport',
                    Music: '/resources/audio/music'};


class App extends Component {
    constructor() {
        super();
        this.state = {
            textObject:null,
            text:null,
            index:0,
            imageCategory:null,
            textCategory:null,
            soundCategory:null,
            imageUrl:null,
            soundUrl:null,
        }
    }

    updateCategory(id, category) {
        id = id.replace(/ /g, '');
        let resourceUrl;
        switch(category) {
            case 'image':
                resourceUrl = this.iterateDictionary(id, imageDict);
                this.setState({imageCategory:resourceUrl});
                break;
            case 'text':
                resourceUrl = this.iterateDictionary(id, textDict);
                this.setState({textCategory:resourceUrl});
                break;
            case 'sound':
                resourceUrl = this.iterateDictionary(id, soundDict);
                this.setState({soundCategory:resourceUrl});
                break;
            default:
                this.setState({imageCategory:null, text:null, soundCategory:null});
                break;
        }
        this.renderUpdate(this.state.index);
    }

    iterateDictionary(id, dict) {
        for (const option in dict) {
            if (id === option) {
                return dict[option];
            }
        }
    }

    fetchJsonPromise() {
        const resourceUrl = this.state.textCategory;
        if (!this.caching(resourceUrl)) {
            const jsonPromise = new Promise ((resolve) =>
                resolve(fetch(resourceUrl)
                    .then(res => res.json())));
            return jsonPromise;
        }
    }

    fetchJson(resourceUrl) {
        return fetch(resourceUrl).then(res => res.json());
    }


    getCorrectPoem(index, textObject) {
        const textPElements = [];
        for (const poemNr in textObject) {
            if (index === parseInt(poemNr, 10)) {
                for (const lineNr in textObject[poemNr]) {
                        textPElements.push(<p>{textObject[poemNr][lineNr]}</p>);
                }
            }
        }
        return (<div>{textPElements}</div>);
    }

    caching(resour) {
        return false;
    }

    renderUpdate(index) {
        index = parseInt(index, 10);
        let text;
        const imageUrl = this.updateImage(index);
        const soundUrl = this.updateSound(index);
        const promise = this.fetchJsonPromise();
        Promise.all([promise]).then((result) => {
            text = this.getCorrectPoem(index, result[0]);
            this.setState({imageUrl:imageUrl, text:text, soundUrl:soundUrl, index:index});
        });
    }

    updateImage(index) {
        const url = "/img" + index + ".svg";
        return url;
    }

    updateSound(index) {
        const url = "/sound" + index + ".mp3";
        return url;
    }

    render() {
        return (
          <div className="App">
            <h1>Title of thing</h1>
            <div className="container">
                <ButtonTabs className="ImageTabs" onSelected={this.renderUpdate.bind(this)} />
                {this.renderContentBox()}
                <CheckboxTabs className="CheckboxTabs" selectedCategory={this.updateCategory.bind(this)} />
            </div>
         </div>
        );
    }

    renderContentBox() {
        if (this.canRender()) {
            return (<ContentBox index={this.state.index}
                textDiv={this.state.text}
                imageUrl={this.getImageUrl()}
                soundUrl={this.getSoundUrl()} />);
        } else {
            return <ContentBox index={this.state.index} />;
        }
    }

    canRender() {
        return (this.props.imageCategory !== null
                && this.props.soundCategory !== null
                && this.props.textCategory !== null)
                && this.props.index !==0;
    }

    getImageUrl() {
        const categoryUrl = this.state.imageCategory;
        const imageUrl = this.state.imageUrl;
        return (categoryUrl + imageUrl);
    }

    getSoundUrl() {
        const categoryUrl = this.state.soundCategory;
        const soundUrl = this.state.soundUrl;
        return (categoryUrl + soundUrl);
    }
}

export default App;

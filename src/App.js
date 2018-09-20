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

const textDict = {  WilfredOwen: '/resources/json/wilfredOwen/',
                    RomanticNationalism: 'resources/json/romanticNationalism/',
                    Shakespeare: '/resources/json/shakespeare/'};

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
            image:null,
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

    fetchJsonPromise(filename) {
        const resourceUrl = this.state.textCategory + filename;
        const jsonPromise = new Promise ((resolve) =>
            resolve(fetch(resourceUrl)
                .then(res => res.json())));
        return jsonPromise;
    }

    getPoem(poem) {
        const textPElements = [];
        for (const lineNr in poem) {
            console.log(poem[lineNr]);
            textPElements.push(
                <p key={lineNr}>
                    {poem[lineNr]}
                </p>);
        }

        return (<div>{textPElements}</div>);
    }

    fetchSvg(imageUrl) {
        const imagePromise = new Promise((resolve) => resolve(
            fetch(imageUrl)
                .then(res => res.text())
            ));
        return imagePromise;
    }

    renderUpdate(index) {
        index = parseInt(index, 10);
        let text, image;
        let imageUrl = null, soundUrl = null;
        let imagePromise, textPromise;
        const indexPromise = new Promise((resolve) => resolve(this.setState({index:index})));
        if (this.state.imageCategory !== null &&
            this.state.textCategory !== null &&
            this.state.soundCategory !== null &&
            index !== 0) {

            imageUrl = this.getImageFilename(index);
            imagePromise = this.fetchSvg("" + this.state.imageCategory + imageUrl);
            textPromise = this.fetchJsonPromise(this.getJsonFilename(index));
            soundUrl = this.getSoundFilename(index);
        }
        Promise.all([textPromise, imagePromise, indexPromise]).then((result) => {
            text = this.getPoem(result[0]);
            image = result[1];
            this.setState({image:image, text:text, soundUrl:soundUrl});
        });
    }

    getImageFilename(index) {
        const url = "/img" + index + ".svg";
        return url;
    }

    getSoundFilename(index) {
        const url = "/sound" + index + ".mp3";
        return url;
    }

    getJsonFilename(index) {
        const url = "text" + index + ".json";
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
                image={this.state.image}
                soundUrl={this.getSoundUrl()} />);
        } else {
            return <ContentBox render={false} />;
        }
    }

    canRender() {
        return (this.state.imageCategory !== null
                && this.state.soundCategory !== null
                && this.state.textCategory !== null
                && this.state.soundUrl !== null
                && this.state.index !==0);
    }

    getSoundUrl() {
        const categoryUrl = this.state.soundCategory;
        const soundUrl = this.state.soundUrl;
        return (categoryUrl + soundUrl);
    }
}

export default App;

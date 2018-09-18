import React, { Component } from 'react';
//import logo from './logo.svg';
import ImageTabs from './components/ImageTabs.jsx';
import CheckboxTabs from './components/CheckboxTabs.jsx';
import "./App.css";

const imageDict = { Animals:'./resources/image/dyr',
                    BowtieLad:'./resources/image/sloyfegutt',
                    BlackAndWhite:'./resources/image/svarthvitt'};

const textDict = {  OwenWilson: './resources/json/owenWilson.json',
                    RomanticNationalism: './resources/json/romanticNationalism.json',
                    Shakespeare: './resources/json/shakespeare.json'};

const soundDict = {};


class App extends Component {
    constructor() {
        super();
        this.state = {
            textCategory:null,
            textNumber:null,
            imageCategory:null,
            imageNumber:null,
            soundCategory:null,
            soundNumber:null,
        }
    }

    pushSelectedCategory(id, category) {
        id = id.replace(/ /g, '');
        let resourceUrl;
        switch(category) {
            case 'image':
                this.setState({imageCategory:category});
                resourceUrl = App.iterateDictionary(id, imageDict);
                break;
            case 'text':
                this.setState({textCategory:category});
                resourceUrl = App.iterateDictionary(id, textDict);
                break;
            case 'sound':
                this.setState({soundCategory:category});
                resourceUrl = App.iterateDictionary(id, soundDict);
                break;
        }
        console.log(resourceUrl);
    }

    static iterateDictionary(id, dict) {
        for (const option in dict) {
            if (id === option) {
                return dict[option];
            }
        }
    }

    render() {
        return (
            <div className="App">
                <h1>Title of thing</h1>
                <div className="container">
                    <ImageTabs className="ImageTabs" />
                    <CheckboxTabs className="CheckboxTabs" selectedCategory={this.pushSelectedCategory.bind(this)} />
                </div>
          </div>
        );
    }
}

export default App;

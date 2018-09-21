import React, {Component} from 'react';
//import logo from './logo.svg';
import ButtonTabs from './components/ButtonTabs.jsx';
import CheckboxTabs from './components/CheckboxTabs.jsx';
import ContentBox from './components/ContentBox.jsx';
import "./App.css";

/*
*   The App.js class is the top level class which has the responsibility of
*   receiving information about what has been selected and throw that back down
*   to its relevant children (ContentBox.jsx). It also has the responsibility to
*   load what is needed.
*/

//The relative urls for all of the resources used
const imageDict = {
    Animals: '/resources/images/animals',
    Gems: '/resources/images/gems',
    BlackAndWhite: '/resources/images/black&white'
};

const textDict = {
    WilfredOwen: '/resources/json/wilfredOwen/',
    RomanticNationalism: 'resources/json/romanticNationalism/',
    Shakespeare: '/resources/json/shakespeare/'
};

const soundDict = {
    ASMR: '/resources/audio/ASMR',
    Sport: '/resources/audio/sport',
    Music: '/resources/audio/music'
};


class App extends Component {
    constructor() {
        super();
        this.state = {
            poemText: null,
            index: 0, //the index of the current button from the left sidebar
            imageCategory: null,
            textCategory: null,
            soundCategory: null,
            imageXml: null,
            soundFilename: null,
        }
    }

    //When CheckboxTabs.jsx sends an update about a new category this function
    //updates the current state which will then update the site.
    updateCategory(id, category) {
        id = id.replace(/ /g, '');
        let resourceUrl;
        switch (category) {
            case 'image':
                resourceUrl = this.iterateDictionary(id, imageDict);
                this.setState({imageCategory: resourceUrl});
                break;
            case 'text':
                resourceUrl = this.iterateDictionary(id, textDict);
                this.setState({textCategory: resourceUrl});
                break;
            case 'sound':
                resourceUrl = this.iterateDictionary(id, soundDict);
                this.setState({soundCategory: resourceUrl});
                break;
            default:
                this.setState({imageCategory: null, text: null, soundCategory: null});
                break;
        }
        this.renderUpdate(this.state.index);
    }

    //Iterates through the constants declared at the top to look for the correct path.
    iterateDictionary(id, dict) {
        for (const option in dict) {
            if (id === option) {
                return dict[option];
            }
        }
    }

    //Given a filename it finds the category and creates a promise reading the json file.
    fetchJsonPromise(filename) {
        const resourceUrl = this.state.textCategory + filename;
        const jsonPromise = new Promise((resolve) =>
            resolve(fetch(resourceUrl)
                .then(res => res.json())));
        return jsonPromise;
    }

    //Given a json file with a single array it Iterates through it and creates a <p> element
    getPoem(poem) {
        const textPElements = [];
        for (const lineNr in poem) {
            textPElements.push(
                <p key={lineNr}>
                    {poem[lineNr]}
                </p>);
        }

        return (<div>{textPElements}</div>);
    }

    //given the relative image url it creates a promise retrieving the xml of the file
    fetchSvg(imageUrl) {
        const imagePromise = new Promise((resolve) => resolve(
            fetch(imageUrl)
                .then(res => res.text())
        ));
        return imagePromise;
    }

    //Given an index of the buttons from the sidebar it will launch and load the correct files.
    renderUpdate(index) {
        index = parseInt(index, 10);
        //Separating the lets for clarity about what they are used for.
        let poem, image;
        let imageUrl = null, soundUrl = null;
        let imagePromise, poemPromise;
        const indexPromise = new Promise((resolve) => resolve(this.setState({index: index})));
        //If all the categories are selected and an index chosen it will load the files.
        if (this.state.imageCategory !== null &&
            this.state.soundCategory !== null &&
            this.state.textCategory !== null) {
            imageUrl = this.getImageFilename(index);
            imagePromise = this.fetchSvg("" + this.state.imageCategory + imageUrl);
            poemPromise = this.fetchJsonPromise(this.getJsonFilename(index));
            soundUrl = this.getSoundFilename(index);
        }
        Promise.all([poemPromise, imagePromise, indexPromise]).then((result) => {
            let imgkey = this.state.imageCategory + this.state.index;
            let poemkey = this.state.textCategory + this.state.index;

            if (this.keyInLocalStorage(imgkey)) {
                // console.log(imgkey);
                image = localStorage.getItem(imgkey);
            }
            else {
                image = result[1];
                localStorage.setItem(imgkey, image);
            }
            // if (this.keyInLocalStorage(poemkey)) {
            //     // console.log(poemkey);
            //     poem = localStorage.getItem(poemkey);
            // }
            // else {
            //     poem = this.getPoem(result[0]);
            //     console.log(poem);
            //     localStorage.setItem(poemkey, poem);
            // }
            poem = this.getPoem(result[0]);
            this.setState({imageXml: image, poemText: poem, soundFilename: soundUrl});
        });
    }

    keyInLocalStorage(key) {
        for (let i = 0; i < localStorage.length; i++) {
            if (localStorage.key(i) === key) {
                return true;
            }
        }
        return false;
    }

    //Gets the correct file names
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

    //Concatenates the relative url and the filename.
    getSoundUrl() {
        const soundCategory = this.state.soundCategory;
        const filename = this.state.soundFilename;
        return (soundCategory + filename);
    }

    render() {
        return (
            <div className="App">
                <h1>Title of thing</h1>
                <div className="container">
                    <ButtonTabs className="ImageTabs" onSelected={this.renderUpdate.bind(this)}/>
                    {this.renderContentBox()}
                    <CheckboxTabs className="CheckboxTabs" selectedCategory={this.updateCategory.bind(this)}/>
                </div>
            </div>
        );
    }

    //Creates the contentbox based on if it should or should not render all the media files.
    renderContentBox() {
        if (this.canRender()) {
            return (<ContentBox index={this.state.index}
                                textDiv={this.state.poemText}
                                image={this.state.imageXml}
                                soundUrl={this.getSoundUrl()}/>);
        } else {
            return <ContentBox render={false}/>;
        }
    }

    //Returns a boolean based on if it should render the media files
    canRender() {
        return (this.state.imageCategory !== null
            && this.state.soundCategory !== null
            && this.state.textCategory !== null
            && this.state.soundFilename !== null
            && this.state.index !== 0);
    }
}

export default App;

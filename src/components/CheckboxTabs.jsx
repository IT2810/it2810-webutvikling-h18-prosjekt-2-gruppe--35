import React, { Component } from 'react';
import CheckboxCategory from './CheckboxCategory';

const image = {
    option: [
        'Animals', 'Gems', 'Black And White'
    ]
}

const sound = {
    option: [
        'ASMR', 'Sport', 'Music'
    ]
}

const text = {
    option: [
        'Wilfred Owen', 'Romantic Nationalism', 'Shakespeare'
    ]
}

class CheckboxTabs extends Component {
    constructor() {
        super();
        this.state = {
            category:null,
            image:null,
            text:null,
            sound:null,
        }
    }

    pushSelectedImage(id) {
        const imagePromise = new Promise ((resolve) => resolve(this.setState({image:id, category:'image'})));
        Promise.all([imagePromise]).then((result) => this.props.selectedCategory(id, this.state.category));
    }

    pushSelectedText(id) {
        const textPromise = new Promise ((resolve) => resolve(this.setState({text:id, category:'text'})));
        Promise.all([textPromise]).then((result) => this.props.selectedCategory(id, this.state.category));
    }

    pushSelectedSound(id) {
        const soundPromise = new Promise ((resolve) => resolve(this.setState({sound:id, category:'sound'})));
        Promise.all([soundPromise]).then((result) => this.props.selectedCategory(id, this.state.category));
    }

    render() {
        return (
            <div>
                <CheckboxCategory onSelected={this.pushSelectedImage.bind(this)} category="Image" const={image}/>
                <CheckboxCategory onSelected={this.pushSelectedText.bind(this)} category="Text" const={text}/>
                <CheckboxCategory onSelected={this.pushSelectedSound.bind(this)} category="Sound" const={sound}/>
            </div>
        );
    }

}

export default CheckboxTabs;

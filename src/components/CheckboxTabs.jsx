import React, { Component } from 'react';
import CheckboxCategory from './CheckboxCategory';

const image = {
    option: [
        'Animals', 'Bowtie Lad', 'Black And White'
    ]
}

const sound = {
    option: [
        'Human Noises', 'Music', 'Noises'
    ]
}

const text = {
    option: [
        'Owen Wilson', 'Romantic Nationalism', 'Shakespeare'
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
        this.setState({image:id, category:'image'});
        this.props.selectedCategory(id, this.state.category);
    }

    pushSelectedText(id) {
        this.setState({text:id, category:'text'});
        this.props.selectedCategory(id, this.state.category);
    }

    pushSelectedSound(id) {
        this.setState({sound:id, category:'sound'});
        this.props.selectedCategory(id, this.state.category);
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

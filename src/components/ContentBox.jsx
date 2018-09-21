import React, { Component } from 'react';
import Image from '../parts/Image.jsx';
import Audio from '../parts/Audio.jsx';

/*
*   ContentBox is the 'box' displaying the audio, text and image. It uses the
*   Image.jsx and Audio.jsx files. If it doesn't display audio, text, and an
*   image it will display the homepage. That is only when the homepage button is
*   pressed or not one of all the three categories are chosen.
*   The if line in the render() function does that check.
*/

const homePage = <p>This is the homepage. To do something else you have
                    to select one of either three options in all three
                    categories and click on a button from 1-4. That is; One
                    option from the 'Image' category; one option from the
                    'Text' category, and one option from the 'Sound'
                    category. Doing that will let you choose up to 4
                    different types of images, sounds, and texts.</p>

class ContentBox extends Component {

    render() {
        if (this.props.index === 0 ||
            this.props.render === false) {
            return (
                <div id={"homeContent"}>
                    <div>{homePage}</div>
                    <Audio key={this.props.location} soundUrl={this.props.soundUrl}/>
                </div>
            );
        } else {
            return (
                <div>
                    <Image image={this.props.image}/>
                    <div id={"text"}>{this.props.textDiv}</div>
                    <Audio key={this.props.location} soundUrl={this.props.soundUrl}/>
                </div>
            );
        }
    }
}

export default ContentBox;

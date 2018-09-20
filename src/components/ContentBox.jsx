import React, { Component } from 'react';
import Image from '../parts/Image.jsx';
import Audio from '../parts/Audio.jsx';

const homePage = <p>This is the homepage. To do something else you have
                    to select one of either three options in all three
                    categories and click on a button from 1-4. That is; One
                    option from the 'Image' category; one option from the
                    'Text' category, and one option from the 'Sound'
                    category. Doing that will let you choose up to 4
                    different types of images, sounds, and texts.</p>

class ContentBox extends Component {

    render() {
        if (this.props.index === 0) {
            return homePage;
        } else {
            return (
                <React.Fragment>
                    <Image imageUrl={this.props.imageUrl}/>
                    <div>{this.props.textDiv}</div>
                    <Audio />
                </React.Fragment>
            );
        }
    }
}

export default ContentBox;

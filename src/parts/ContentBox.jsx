import React, { Component } from 'react';
import Image from '../parts/Image.jsx';

const homePage = <p>This is the homepage. To view other things you have to select
                    one of each type of category. That is one category of texts,
                    one category of images, and one category of sound types.</p>

class ContentBox extends Component {

    render() {
        if (this.props.index === 0 || this.props.index === null) {
            return homePage;
        } else {
            return (
                <React.Fragment>
                    <Image imageUrl={this.props.imageUrl}/>
                    <div>{this.props.textDiv}</div>
                </React.Fragment>
            );
        }
    }
}

export default ContentBox;

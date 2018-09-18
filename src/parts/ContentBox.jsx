import React, { Component } from 'react';
import Image from '../parts/Image.jsx';

class ContentBox extends Component {

    render() {
        return (
            <React.Fragment>
                <Image imageUrl={this.props.imageUrl}/>
                <div>{this.props.textDiv}</div>
            </React.Fragment>
        );
    }
}

export default ContentBox;

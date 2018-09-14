import React, { Component } from 'react';

class Image extends Component {
    render() {
        return <img  height="100" width="200" src={this.props.imageUrl} alt="text"/>
    }
}

export default Image;

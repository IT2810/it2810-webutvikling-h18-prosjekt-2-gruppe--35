import React, { Component } from 'react';

class Image extends Component {
    fetchSvg() {
        return false;
    }

    render() {
        return this.fetchSvg()
    }
}

export default Image;

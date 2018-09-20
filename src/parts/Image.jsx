import React, { Component } from 'react';

class Image extends Component {
    render() {
        return (
        <div className="graphic" dangerouslySetInnerHTML={{__html:this.props.image}}>
        </div>
        );
    }
}

export default Image;

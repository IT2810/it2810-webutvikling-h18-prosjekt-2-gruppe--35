import React, { Component } from 'react';

class Image extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        console.log(this.props.image);
        return (
        <div className="graphic" dangerouslySetInnerHTML={{__html:this.props.image}}>
        </div>
        );
    }
}

export default Image;

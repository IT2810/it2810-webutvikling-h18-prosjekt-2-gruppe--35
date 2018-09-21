import React, {Component} from 'react';

class Image extends Component {
    render() {
        return (
            <div className="Image" dangerouslySetInnerHTML={{__html: props.image}}>
            </div>)
    }
}

export default Image;



import React, {Component} from 'react';

/*
*   The Image.jsx file has the purpose of loading an image when given the proper
*   XML when given by its parent.
*/

class Image extends Component {
    render() {
        return (
            <div
                className="graphic"
                dangerouslySetInnerHTML={{__html: this.props.image}}>
            </div>
        );
    }
}

export default Image;

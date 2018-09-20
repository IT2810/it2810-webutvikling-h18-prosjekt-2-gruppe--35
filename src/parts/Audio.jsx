import React, { Component } from 'react';
/*
*   The Audo.jsx file has the purpose of loading the audiofiles when given
*   a url by its parent.
*   Adding a key property to the audio tag lets it stop and load the new files
*   by itself.
*/

class Audio extends Component {
    render() {
        if (this.props.soundUrl !== undefined) {
            return (
                <audio
                    key={this.props.soundUrl}
                    controls>
                        <source src={this.props.soundUrl}/>
                        Your browser does not support the audio element.
                </audio>
            );
        } else {
            return false;
        }
    }
}

export default Audio;

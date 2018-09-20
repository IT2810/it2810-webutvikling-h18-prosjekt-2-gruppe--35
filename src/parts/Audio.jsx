import React, { Component } from 'react';

class Audio extends Component {
    render() {
        if (this.props.soundUrl !== undefined) {
            return (
                <audio key={this.props.soundUrl} controls>
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

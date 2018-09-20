import React, { Component } from 'react';

class Audio extends Component {
    render() {
        return (
            <audio key={this.props.soundUrl} controls>
                    <source src={this.props.soundUrl}/>
                        Your browser does not support the audio element.
            </audio>
        );
    }
}

export default Audio;

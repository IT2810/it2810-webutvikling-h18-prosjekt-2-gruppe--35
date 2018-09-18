import React, { Component } from 'react';

class Audio extends Component {
    render() {
        return (
            <audio controls>
                    <source src={this.props.audioUrl}/>
                        Your browser does not support the audio element.
            </audio>
        );
    }
}

export default Audio;

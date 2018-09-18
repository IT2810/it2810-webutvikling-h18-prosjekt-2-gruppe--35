import React, { Component } from 'react';

class Checkbox extends Component {
    render() {
        return (
            <div onClick={() => {this.props.onclick(this.props.name)}}>
                <input type="checkbox" id={this.props.name}
                    checked={this.props.name === this.props.activeCheckbox}/>
                <label id={this.props.name}>{this.props.name}</label>
            </div>
        );
    }
}

export default Checkbox;

import React, { Component } from 'react';
import './Checkbox.css';

/*
*   The Checkbox.jsx file has the purpose of creating a checkbox input and
*   creating a label to itself. It is being sent a function from its parent
*   CheckboxCategory.jsx, tells what checkbox is selected. Then each checkbox
*   is sent that value and checks if it equals itself, if not it unchecks itself.
*   This works for all of the checkboxes in that category.
*/

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

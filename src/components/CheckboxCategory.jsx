import React, { Component } from 'react';
import Checkbox from '../parts/checkbox.jsx';

class CheckboxCategory extends Component {
    constructor() {
        super();
        this.state = {
            activeCheckbox : null,
        }
    }

    createCheckboxes() {
        const checkboxes = [];
        for (const option in this.props.const.option) {
            checkboxes.push(
                <Checkbox
                    key={this.props.const.option[option]}
                    name={this.props.const.option[option]}
                    activeCheckbox={this.state.activeCheckbox}
                    onclick={this.checkboxSelection.bind(this)}
                    />
            );
        }
        return checkboxes;
    }

    checkboxSelection(id) {
        this.setState({activeCheckbox:id});
        this.props.onSelected(id);
    }

    render() {
        return(
            <React.Fragment>
                <h3>{this.props.category}</h3>
                {this.createCheckboxes()}
            </React.Fragment>
        );
    }
}

export default CheckboxCategory;

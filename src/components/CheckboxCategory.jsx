import React, { Component } from 'react';
import Checkbox from '../parts/Checkbox.jsx';
import "./CheckboxCategory.css";

/*
*   The CheckboxCategory.jsx file has the responsibility of grouping all of the
*   options together, and keeping track of which one is currently clicked and
*   tell the parent CheckboxTabs.jsx that.
*/
class CheckboxCategory extends Component {
    constructor() {
        super();
        this.state = {
            activeCheckbox : null,
        }
    }

    //Creates the checkboxes dynamically
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

    //The function sent to the child, which also uses the function sent by this component's parent
    checkboxSelection(id) {
        this.setState({activeCheckbox:id});
        this.props.onSelected(id);
    }

    render() {
        return(
            <React.Fragment>
                <h3>{this.props.category}</h3>
                <div  id={"CheckboxCategory"} className="CheckboxCategory">
                    {this.createCheckboxes()}
                </div>
            </React.Fragment>
        );
    }
}

export default CheckboxCategory;

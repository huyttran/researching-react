import React, { Component } from 'react';
import { Prompt } from "react-router-dom";

class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isChecked: false
        }
    }

    onClick = (isChecked) => {
        this.setState({
            isChecked: isChecked
        });
    }
    render() {
        const { isChecked } = this.state
        return (
            <div>
                Contact page  (Prompt)<br />
                <button type="button" className="btn btn-default" onClick={() => { this.onClick(false) }}>Allow</button>
                <button type="button" className="btn btn-default" onClick={() => { this.onClick(true) }}>Disallow</button>
                <Prompt
                    when={isChecked}
                    message={location => (`Are you sure redirect to ${location.pathname}`)}
                />
            </div>
        );
    }
}
export default Contact;

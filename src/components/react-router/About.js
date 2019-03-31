import React, { Component } from 'react';

class About extends Component {
    constructor(props) {
        super(props);
        this.state = {
            colors: ['red', 'green', 'blue', '#ccc']
        }
    }

    render() {
        return (
            <div>
                About page
           </div>
        );
    }
}
export default About;

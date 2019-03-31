import React, { Component } from 'react';

class Sort extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <div className="dropdown">
                <button className="btn btn-primary dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                    Sort <span className="fa fa-caret-square-o-down ml-5"></span>
                </button>
                <ul className="dropdown-menu" aria-labelledby="dropdownMenu1">
                    <li>
                        <a role="button">
                            <span className="fa fa-sort-alpha-asc pr-5">
                                A-Z
                </span>
                        </a>
                    </li>
                    <li>
                        <a role="button">
                            <span className="fa fa-sort-alpha-desc pr-5">
                                Z-A
                </span>
                        </a>
                    </li>
                    <li role="separator" className="divider"></li>
                    <li><a role="button">Active</a></li>
                    <li><a role="button">Done</a></li>
                </ul>
            </div>
        );
    }
}
export default Sort;

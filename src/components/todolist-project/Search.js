import React, { Component } from 'react';

class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <div className="input-group">
                <input type="text" className="form-control" placeholder="Enter keyword..." />
                <span className="input-group-btn">
                    <button className="btn btn-primary" type="button">
                        <span className="fa fa-search mr-5"></span>Search
                    </button>
                </span>
            </div>
        );
    }
}
export default Search;

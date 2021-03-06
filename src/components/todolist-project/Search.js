import React, { Component } from 'react';

class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            keyWord: ''
        }
    }

    onChangeHandler = (event) => {
        const target = event.target;
        const name = target.name;
        const value = target.value;
        this.setState({
            [name]: value
        });
    }

    onSubmit = () => {
        this.props.onSearch(this.state.keyWord);
    }

    render() {
        const { keyWord } = this.state;
        return (
            <div className="input-group">
                <input
                    name="keyWord"
                    type="text"
                    className="form-control"
                    placeholder="Enter keyword..."
                    value={keyWord}
                    onChange={this.onChangeHandler}
                />
                <span className="input-group-btn">
                    <button
                        className="btn btn-primary"
                        type="button"
                        onClick={this.onSubmit}
                    >
                        <span className="fa fa-search mr-5"></span>Search
                    </button>
                </span>
            </div>
        );
    }
}
export default Search;

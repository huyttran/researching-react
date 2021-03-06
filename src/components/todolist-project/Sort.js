import React, { Component } from 'react';

class Sort extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    onSortHandler = (sortBy, sortValue) => {
        this.props.onSort(sortBy, sortValue);
    }
    render() {
        return (
            <div className="dropdown">
                <button className="btn btn-primary dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                    Sort <span className="fa fa-caret-square-o-down ml-5"></span>
                </button>
                <ul className="dropdown-menu" aria-labelledby="dropdownMenu1">
                    <li onClick={() => this.onSortHandler('name', 1)}>
                        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                        <a
                            role="button"
                            className={
                                (this.props.sortBy === 'name' &&
                                    this.props.sortValue === 1) ?
                                    'sort_selected' :
                                    ''
                            }
                        >
                            <span className="fa fa-sort-alpha-asc pr-5">
                                A-Z
                            </span>
                        </a>
                    </li>
                    <li onClick={() => this.onSortHandler('name', -1)}>
                        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                        <a
                            role="button"
                            className={
                                (this.props.sortBy === 'name' &&
                                    this.props.sortValue === -1) ?
                                    'sort_selected' :
                                    ''
                            }
                        >
                            <span className="fa fa-sort-alpha-desc pr-5">
                                Z-A
                            </span>
                        </a>
                    </li>
                    <li role="separator" className="divider"></li>
                    <li onClick={() => this.onSortHandler('status', 1)}>
                        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                        <a
                            role="button"
                            className={
                                (this.props.sortBy === 'status' &&
                                    this.props.sortValue === 1) ?
                                    'sort_selected' :
                                    ''
                            }
                        >Active</a>
                    </li>
                    <li onClick={() => this.onSortHandler('status', -1)}>
                        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                        <a
                            role="button"
                            className={
                                (this.props.sortBy === 'status' &&
                                    this.props.sortValue === -1) ?
                                    'sort_selected' :
                                    ''
                            }
                        >Done</a>
                    </li>
                </ul>
            </div>
        );
    }
}
export default Sort;

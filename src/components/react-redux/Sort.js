import React, { Component } from 'react';
import { connect } from 'react-redux'
import { onSetSortOptions } from '../../actions';

class Sort extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    onSortHandler = (sortBy, sortValue) => {
        this.props.onSetSortOptions({ sortBy: sortBy, sortValue: sortValue });
    }
    onSelected = (sortBy, sortValue) => {
        const { sortOptions } = this.props;
        if (sortOptions.sortBy === sortBy && sortOptions.sortValue === sortValue) {
            return 'sort_selected';
        }
        return '';
    }
    render() {
        return (
            < div className="dropdown" >
                <button className="btn btn-primary dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                    Sort <span className="fa fa-caret-square-o-down ml-5"></span>
                </button>
                <ul className="dropdown-menu" aria-labelledby="dropdownMenu1">
                    <li onClick={() => this.onSortHandler('name', 1)}>
                        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                        <a
                            role="button"
                            className={this.onSelected('name', 1)}
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
                            className={this.onSelected('name', -1)}
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
                            className={this.onSelected('status', 1)}
                        >Active</a>
                    </li>
                    <li onClick={() => this.onSortHandler('status', -1)}>
                        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                        <a
                            role="button"
                            className={this.onSelected('status', -1)}
                        >Done</a>
                    </li>
                </ul>
            </div >
        );
    }
}

const mapStateToProps = state => ({
    sortOptions: state.sortOptions
});

const mapDispatchToProps = dispatch => {
    return {
        onSetSortOptions: ({ sortBy, sortValue }) => {
            dispatch(onSetSortOptions({ sortBy, sortValue }));
        }
    }
};
export default connect(mapStateToProps, mapDispatchToProps)(Sort);

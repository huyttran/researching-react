import React, { Component } from 'react';
import TaskItem from './TaskItem';
import { connect } from 'react-redux'

class TaskTable extends Component {
    constructor(props) {
        super(props);
        this.state = {
            filterName: '',
            filterStatus: -1
        }
    }

    onChangHandler = (event) => {
        const target = event.target;
        const name = target.name;
        let value = (name === "filterStatus") ? parseInt(target.value, 10) : target.value;
        this.setState({
            [name]: value
        });
    }

    render() {
        let { tasks, keyWord, sortOptions } = this.props;
        let { filterName, filterStatus } = this.state;

        if (filterName) {
            tasks = tasks.filter(task => {
                return task.name.toLowerCase().indexOf(filterName) !== -1;
            });
        }

        if (filterStatus !== -1) {
            tasks = tasks.filter(task => {
                return task.status === (filterStatus === 1 ? true : false);
            });
        }

        if (keyWord) {
            tasks = tasks.filter(task => task.name.toLowerCase().indexOf(keyWord.toLowerCase()) !== -1);
        }

        if (sortOptions.sortBy === 'name') {
            tasks.sort((prev, next) => {
                if (prev.name < next.name) return -sortOptions.sortValue;
                if (prev.name > next.name) return sortOptions.sortValue;
                else return 0;
            });
        } else {
            tasks.sort((prev, next) => {
                if (prev.status < next.status) return sortOptions.sortValue;
                if (prev.status > next.status) return -sortOptions.sortValue;
                else return 0;
            });
        }

        const elemTaskItem = tasks.map((task, index) => {
            return <TaskItem
                key={task.id}
                index={index}
                task={task}
                onUpdateStatus={this.props.onUpdateStatus}
            />;
        });
        return (
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <table className="table table-bordered table-hover">
                    <thead>
                        <tr>
                            <th className="text-center">No.</th>
                            <th className="text-center">Name</th>
                            <th className="text-center">Status</th>
                            <th className="text-center">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td></td>
                            <td>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="filterName"
                                    value={filterName}
                                    onChange={this.onChangHandler}
                                />
                            </td>
                            <td>
                                <select
                                    className="form-control"
                                    name="filterStatus"
                                    value={filterStatus}
                                    onChange={this.onChangHandler}
                                >
                                    <option value="-1">All</option>
                                    <option value="0">Done</option>
                                    <option value="1">Active</option>
                                </select>
                            </td>
                            <td></td>
                        </tr>
                        {elemTaskItem}
                    </tbody>
                </table>
            </div>
        );
    }
}
const mapStateToProps = state => ({
    tasks: state.tasks,
    keyWord: state.keyWord,
    sortOptions: state.sortOptions
});

export default connect(mapStateToProps, null)(TaskTable);

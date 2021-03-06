import React, { Component } from 'react';
import TaskItem from './TaskItem';

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
        let value = target.value;
        this.props.onFilter(
            name === "filterName" ? value : this.state.filterName,
            name === "filterStatus" ? value : this.state.filterStatus);
        this.setState({
            [name]: value
        });
    }

    render() {
        const { tasks, filterName, filterStatus } = this.props;
        const elemTaskItem = tasks.map((task, index) => {
            return <TaskItem
                key={task.id}
                index={index}
                task={task}
                onUpdateStatus={this.props.onUpdateStatus}
                onDeleteItem={this.props.onDeleteItem}
                onUpdateItem={this.props.onUpdateItem}
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
export default TaskTable;

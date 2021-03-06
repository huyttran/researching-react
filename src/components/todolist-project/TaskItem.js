import React, { Component } from 'react';

class TaskItem extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    onUpdateStatus = () => {
        this.props.onUpdateStatus(this.props.task.id);
    }

    onDeleteItem = () => {
        this.props.onDeleteItem(this.props.task.id);
    }

    onUpdateItem = () => {
        this.props.onUpdateItem(this.props.task.id);
    }

    render() {
        const { task, index } = this.props;
        return (
            <tr>
                <td>{index + 1}</td>
                <td>{task.name}</td>
                <td className="text-center">
                    <span
                        className={`label ${task.status === false ? 'label-success' : 'label-danger'}`}
                        onClick={this.onUpdateStatus}
                    >
                        {task.status === true ? 'Acive' : 'Done'}
                    </span>
                </td>
                <td className="text-center">
                    <button
                        type="button"
                        className="btn btn-warning"
                        onClick={this.onUpdateItem}
                    >
                        <span className="fa fa-pencil mr-5"></span>Edit
                </button>
                    &nbsp;
                <button
                        type="button"
                        className="btn btn-danger"
                        onClick={this.onDeleteItem}
                    >
                        <span className="fa fa-trash mr-5"></span>Delete
                </button>
                </td>
            </tr>
        );
    }
}
export default TaskItem;

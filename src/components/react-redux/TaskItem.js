import React, { Component } from 'react';
import { connect } from 'react-redux'
import { updateStatus, onCloseForm, onOpenForm, onSetTaskEditingData, onDeleteTask } from '../../actions/index'

class TaskItem extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    onUpdateStatus = () => {
        this.props.updateStatus(this.props.task.id)
    }

    onDeleteItem = () => {
        this.props.onDeleteTask(this.props.task.id);
        this.props.onCloseForm();
    }

    onUpdateItem = () => {
        this.props.onOpenForm();
        this.props.onSetTaskEditingData(this.props.task);
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

const mapDispatchToProps = dispatch => {
    return {
        updateStatus: (id) => {
            dispatch(updateStatus(id));
        },
        onDeleteTask: (id) => {
            dispatch(onDeleteTask(id));
        },
        onCloseForm: (task) => {
            dispatch(onCloseForm(task))
        },
        onOpenForm: () => {
            dispatch(onOpenForm())
        },
        onSetTaskEditingData: (task) => {
            dispatch(onSetTaskEditingData(task));
        }
    }
};

export default connect(null, mapDispatchToProps)(TaskItem);

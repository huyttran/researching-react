import React, { Component } from 'react';
import { connect } from 'react-redux'
import { onCloseForm, onSaveTask } from '../../actions/index'


class TaskForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: '',
            name: '',
            status: true
        }
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps && nextProps.taskEditing) {
            const { id, name, status } = nextProps.taskEditing;
            this.setState({
                id: id,
                name: name,
                status: status
            });
        } else if (!nextProps.taskEditing) {
            this.setState({
                id: '',
                name: '',
                status: true
            });
        }

    }

    onCloseForm = () => {
        this.props.onCloseForm();
    }

    onChangHandler = (event) => {
        const target = event.target;
        const name = target.name;
        let value = target.value;
        if (name === 'status') {
            value = target.value === 'true' ? true : false;
        }
        this.setState({
            [name]: value
        });
    }

    onSubmit = (event) => {
        event.preventDefault();
        // This solution is not good => every bussiness logic that handled in reducer
        // if (this.state.id) {
        //     this.props.onUpdateTask(this.state);
        // } else {
        //     this.props.createTask(this.state);
        // }
        this.props.onSaveTask(this.state);
        this.onClearForm();
        const { taskEditing } = this.props;
        if (taskEditing && taskEditing.id) {
            this.onCloseForm();
        }
    }

    onClearForm = () => {
        this.setState({
            name: '',
            status: true
        });
    }
    render() {
        const { isDisplayForm } = this.props;
        const { id, name, status } = this.state;
        if (!isDisplayForm) return '';
        return (
            <div className="panel panel-warning">
                <div className="panel-heading">
                    <h3 className="panel-title">{id ? 'Update' : 'Add todo'}
                        <span className="fa fa-plus mr-5" onClick={this.onCloseForm}></span>
                    </h3>
                </div>
                <div className="panel-body">
                    <form onSubmit={this.onSubmit}>
                        <div className="form-group">
                            <label>Name :</label>
                            <input
                                type="text"
                                className="form-control"
                                name="name"
                                value={name}
                                onChange={this.onChangHandler}
                            />
                        </div>
                        <label>Status :</label>
                        <select
                            className="form-control"
                            required="required"
                            name="status"
                            value={status}
                            onChange={this.onChangHandler}
                        >
                            <option value={true}>Active</option>
                            <option value={false}>Done</option>
                        </select>
                        <br />
                        <div className="text-center">
                            <button
                                type="submit"
                                className="btn btn-warning"
                            >Add</button>&nbsp;
                            <button
                                type="button"
                                className="btn btn-danger"
                                onClick={this.onClearForm}
                            >Clear</button>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    isDisplayForm: state.isDisplayForm,
    taskEditing: state.taskEditing
});

const mapDispatchToProps = dispatch => {
    return {
        onCloseForm: (task) => {
            dispatch(onCloseForm(task))
        },
        onSaveTask: (task) => {
            dispatch(onSaveTask(task))
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(TaskForm);

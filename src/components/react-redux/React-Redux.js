import React, { Component } from 'react';
import TaskForm from './TaskForm';
import Control from './Control';
import TaskTable from './TaskTable';
import { connect } from 'react-redux'
import { onToggleForm, onClearTaskEditingData, onOpenForm } from '../../actions/index'

class ReactRedux extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    componentWillMount() {
        if (localStorage && localStorage.getItem('tasks')) {
            const tasks = localStorage.getItem('tasks');
            this.setState({
                tasks: JSON.parse(tasks)
            });
        }
    }

    onOpenForm = () => {
        const { taskEditing } = this.props;
        if (taskEditing && taskEditing.id) {
            this.props.onOpenForm();
            this.props.onClearTaskEditingData();
        } else {
            this.props.onToggleForm();
        }
    }

    render() {
        const { isDisplayForm } = this.props
        return (
            <div className="container">
                <div className="text-center">
                    <h1>Todo list management</h1>
                    <hr />
                </div>
                <div className="row">
                    <div className={isDisplayForm ? "col-xs-4 col-sm-4 col-md-4 col-lg-4" : ''}>
                        <TaskForm />
                    </div>
                    <div className={isDisplayForm ?
                        "col-xs-8 col-sm-8 col-md-8 col-lg-8" :
                        "col-xs-12 col-sm-12 col-md-12 col-lg-12"}>
                        <button
                            type="button"
                            className="btn btn-primary"
                            onClick={this.onOpenForm}>
                            <span className="fa fa-plus mr-5"></span>Add todo
                        </button>
                        <div className="row mt-15">
                            <Control />
                        </div>
                        <div className="row mt-15">
                            <TaskTable />
                        </div>
                    </div>
                </div>
            </div >
        );
    }
}
const mapStateToProps = state => ({
    isDisplayForm: state.isDisplayForm,
    taskEditing: state.taskEditing
});

const mapDispatchToProps = dispatch => {
    return {
        onToggleForm: (id) => {
            dispatch(onToggleForm());
        },
        onClearTaskEditingData: () => {
            dispatch(onClearTaskEditingData());
        },
        onOpenForm: () => {
            dispatch(onOpenForm());
        }
    }
};
export default connect(mapStateToProps, mapDispatchToProps)(ReactRedux);

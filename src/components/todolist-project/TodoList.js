import React, { Component } from 'react';
import TaskForm from './TaskForm';
import Control from './Control';
import TaskTable from './TaskTable';

class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tasks: [

            ]
        }
    }
    componentWillMount() {
        if (localStorage && localStorage.getItem('tasks')) {
            const tasks = localStorage.getItem('tasks');
            this.setState({
                tasks: JSON.parse(tasks)
            });
        }
    }

    onGenerateData = () => {
        const task = [
            {
                id: this.generateID(),
                name: 'Learn somthings1',
                status: true
            },
            {
                id: this.generateID(),
                name: 'Learn somthings2',
                status: false
            },
            {
                id: this.generateID(),
                name: 'Learn somthings3',
                status: true
            },
            {
                id: this.generateID(),
                name: 'Learn somthings4',
                status: false
            }
        ];
        localStorage.setItem('tasks', JSON.stringify(task));
    }

    s4() {
        return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
    }

    generateID() {
        return this.s4() + this.s4() + '-' + this.s4() + '-' + this.s4() + '-' + this.s4() + this.s4() + this.s4();
    }

    render() {
        const { tasks } = this.state;
        return (
            <div className="container">
                <div className="text-center">
                    <h1>Todo list management</h1>
                    <hr />
                </div>
                <div className="row">
                    <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                        <TaskForm />
                    </div>
                    <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8">
                        <button type="button" className="btn btn-primary">
                            <span className="fa fa-plus mr-5"></span>Add todo
                        </button>
                        <button
                            type="button"
                            className="btn btn-danger"
                            onClick={this.onGenerateData}
                        >
                            Generate task
                        </button>
                        <div className="row mt-15">
                            <Control />
                        </div>
                        <div className="row mt-15">
                            <TaskTable tasks={tasks} />
                        </div>
                    </div>
                </div>
            </div >
        );
    }
}
export default TodoList;

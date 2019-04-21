import React, { Component } from 'react';
import TaskForm from './TaskForm';
import Control from './Control';
import TaskTable from './TaskTable';
import { filter as filterld, findIndex } from 'lodash';

class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tasks: [],
            isDisplayForm: false,
            taskEditing: null,
            filter: {
                name: '',
                status: -1
            },
            keyWord: '',
            sortBy: 'name',
            sortValue: 1
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

    onToggleForm = () => {
        if (this.state.isDisplayForm && this.state.taskEditing !== null) {
            this.setState({
                isDisplayForm: false,
                taskEditing: null
            });
        } else {
            this.setState((state, props) => ({
                isDisplayForm: !state.isDisplayForm,
                taskEditing: null
            }));
        }
    }

    onCloseForm = () => {
        this.onToggleForm();
    }

    onAddTask = (data) => {
        let { tasks } = this.state;
        if (!data.id) {
            data.id = this.generateID();
            tasks.push(data);
        } else {
            const index = this.findIndex(data.id);
            tasks[index] = data;
        }
        this.setState({
            tasks: tasks,
            taskEditing: {}
        });
        localStorage.setItem('tasks', JSON.stringify(this.state.tasks));

    }

    s4() {
        return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
    }

    generateID() {
        return this.s4() + this.s4() + '-' + this.s4() + '-' + this.s4() + '-' + this.s4() + this.s4() + this.s4();
    }

    onUpdateStatus = (id) => {
        const { tasks } = this.state;
        const index = this.findIndex(id);
        if (index !== -1) {
            tasks[index].status = !tasks[index].status;
        }
        this.setState({
            tasks: tasks
        });
        localStorage.setItem('tasks', JSON.stringify(this.state.tasks));
    }

    onDeleteItem = (id) => {
        const { tasks } = this.state;
        const index = this.findIndex(id);
        if (index !== -1) {
            tasks.splice(index, 1);
            this.setState({
                tasks: tasks,
                isDisplayForm: false
            });
            localStorage.setItem('tasks', JSON.stringify(this.state.tasks));
        }
    }

    onUpdateItem = (id) => {
        const { tasks } = this.state;
        // const index = this.findIndex(id);
        const index = findIndex(id);
        // let taskEditing = tasks[index];
        if (index !== -1) {
            this.setState({
                isDisplayForm: true,
                taskEditing: tasks[index]
            });
        }
    }

    onFilter = (name, status) => {
        const filterStatus = parseInt(status, 10);
        this.setState({
            filter: {
                name: name.toLowerCase(),
                status: filterStatus
            }
        });
    }

    findIndex = (id) => {
        const { tasks } = this.state;
        let result = - 1;
        tasks.forEach((task, index) => {
            if (task.id === id) {
                result = index;
            }
        });
        return result;
    }

    onSearchHandler = (keyWord) => {
        this.setState({
            keyWord: keyWord
        });
    }

    onSortHandler = (sortBy, sortValue) => {
        this.setState({
            sortBy: sortBy,
            sortValue: sortValue
        });
    }

    render() {
        let {
            tasks,
            isDisplayForm,
            taskEditing,
            filter,
            keyWord,
            sortBy,
            sortValue
        } = this.state;
        if (filter) {
            if (filter.name) {
                // tasks = tasks.filter(task => task.name.toLowerCase().indexOf(filter.name) !== -1);
                // lodash
                tasks = filterld(tasks, (task) => task.name.toLowerCase().indexOf(filter.name) !== -1);
            }
            if (filter.status !== -1) {
                tasks = tasks.filter(task => {
                    return task.status === (filter.status === 1 ? true : false);
                });
            }
        }

        if (keyWord) {
            tasks = tasks.filter(task => task.name.toLowerCase().indexOf(keyWord) !== -1);
        }


        if (sortBy === 'name') {
            tasks.sort((prev, next) => {
                if (prev.name < next.name) return -sortValue;
                if (prev.name > next.name) return sortValue;
                else return 0;
            });
        } else {
            tasks.sort((prev, next) => {
                if (prev.status < next.status) return sortValue;
                if (prev.status > next.status) return -sortValue;
                else return 0;
            });
        }
        const elemTaskForm = isDisplayForm ?
            <TaskForm
                onCloseForm={this.onCloseForm}
                onAddTask={this.onAddTask}
                taskEditing={taskEditing}
            /> :
            ''
        return (
            <div className="container">
                <div className="text-center">
                    <h1>Todo list management</h1>
                    <hr />
                </div>
                <div className="row">
                    <div className={isDisplayForm ? "col-xs-4 col-sm-4 col-md-4 col-lg-4" : ''}>
                        {elemTaskForm}
                    </div>
                    <div className={isDisplayForm ?
                        "col-xs-8 col-sm-8 col-md-8 col-lg-8" :
                        "col-xs-12 col-sm-12 col-md-12 col-lg-12"}>
                        <button
                            type="button"
                            className="btn btn-primary"
                            onClick={this.onToggleForm}>
                            <span className="fa fa-plus mr-5"></span>Add todo
                        </button>
                        <div className="row mt-15">
                            <Control
                                onSearch={this.onSearchHandler}
                                onSort={this.onSortHandler}
                                sortBy={sortBy}
                                sortValue={sortValue}
                            />
                        </div>
                        <div className="row mt-15">
                            <TaskTable
                                tasks={tasks}
                                onUpdateStatus={this.onUpdateStatus}
                                onDeleteItem={this.onDeleteItem}
                                onUpdateItem={this.onUpdateItem}
                                onFilter={this.onFilter}
                            />
                        </div>
                    </div>
                </div>
            </div >
        );
    }
}
export default TodoList;

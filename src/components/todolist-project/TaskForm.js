import React, { Component } from 'react';

class TaskForm extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <div className="panel panel-warning">
                <div className="panel-heading">
                    <h3 className="panel-title">Add todo</h3>
                </div>
                <div className="panel-body">
                    <form>
                        <div className="form-group">
                            <label>Name :</label>
                            <input type="text" className="form-control" />
                        </div>
                        <label>Status :</label>
                        <select className="form-control" required="required">
                            <option value="1">Active</option>
                            <option value="0">Done</option>
                        </select>
                        <br />
                        <div className="text-center">
                            <button type="submit" className="btn btn-warning">Add</button>&nbsp;
                            <button type="submit" className="btn btn-danger">Cancel</button>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}
export default TaskForm;

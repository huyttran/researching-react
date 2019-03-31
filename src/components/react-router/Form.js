import React, { Component } from 'react';
import { timingSafeEqual } from 'crypto';

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            txtUsername: '1',
            txtPassword: '2',
            txtDescription: '3',
            sltGender: 1,
            rdLang: 'vi',
            chkbStatus: false
        }
    }
    onChange = (e) => {
        const target = e.target;
        const name = target.name;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        this.setState({
            [name]: value
        });
    }
    onSubmit = (e) => {
        e.preventDefault();
        const { txtUsername } = this.state;
        console.log(this.state);
    }
    render() {
        // const { txtUsername } = this.state;
        return (
            <div className="container mt-30">
                <div className="row">
                    <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8">
                        <div className="panel panel-primary">
                            <div className="panel-heading">
                                <h3 className="panel-title">Panel title</h3>
                            </div>
                            <div className="panel-body">
                                <form onSubmit={this.onSubmit}>
                                    <div className="form-group">
                                        <label>Username: </label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id=""
                                            placeholder="Input field"
                                            name='txtUsername'
                                            value={this.state.txtUsername}
                                            onChange={this.onChange}
                                        />
                                    </div>

                                    <div className="form-group">
                                        <label>Password: </label>
                                        <input
                                            type="password"
                                            className="form-control"
                                            id=""
                                            placeholder="Input field"
                                            name='txtPassword'
                                            value={this.state.txtPassword}
                                            onChange={this.onChange}
                                        />
                                    </div>

                                    <div className="form-group">
                                        <label>Description: </label>
                                        <textarea
                                            name="txtDescription"
                                            id=""
                                            cols="30"
                                            rows="10"
                                            value={this.state.txtDescription}
                                            onChange={this.onChange}
                                        >
                                        </textarea>
                                    </div>
                                    <label>Gender: </label>
                                    <select
                                        name="sltGender"
                                        id="input"
                                        className="form-control"
                                        required="required"
                                        value={this.state.sltGender}
                                        onChange={this.onChange}
                                    >
                                        <option value={0}>Female</option>
                                        <option value={1}>Male</option>
                                    </select>

                                    <label>Languages: </label>
                                    <div className="radio">
                                        <label>
                                            <input
                                                type="radio"
                                                name="rdLang"
                                                id="input"
                                                value="en"
                                                checked={this.state.rdLang === 'en'}
                                                onChange={this.onChange}
                                            />
                                            English
                                        </label>

                                        <label>
                                            <input
                                                type="radio"
                                                name="rdLang"
                                                id="input"
                                                value="vi"
                                                checked={this.state.rdLang === 'vi'}
                                                onChange={this.onChange}
                                            />
                                            Vietnamese
                                        </label>
                                    </div>

                                    <div className="checkbox">
                                        <label>
                                            <input
                                                type="checkbox"
                                                value={this.state.chkbStatus}
                                                name="chkbStatus"
                                                checked={this.state.chkbStatus}
                                                onChange={this.onChange}
                                            />
                                            status
                                        </label>
                                    </div>

                                    <button type="submit" className="btn btn-primary">Submit</button>&nbsp;
                                    <button type="reset" className="btn btn-default">Clear form</button>
                                </form>

                            </div>
                        </div>

                    </div>
                </div>

            </div>


        );
    }
}
export default Form;

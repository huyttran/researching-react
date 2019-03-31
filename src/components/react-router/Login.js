import React, { Component } from 'react';
import { Redirect } from "react-router-dom";

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            txtUsername: '',
            txtPassword: ''
        }
    }

    onChange = (e) => {
        const target = e.target;
        const name = target.name;
        const value = target.value;
        this.setState({
            [name]: value
        });
    }
    onLogin = (e) => {
        e.preventDefault();
        const { txtUsername, txtPassword } = this.state
        if (txtUsername === 'admin' && txtPassword === 'admin') {
            localStorage.setItem('user', JSON.stringify({
                username: txtUsername,
                password: txtPassword
            }));
        }

    }
    render() {
        const { location } = this.props;
        const { txtUsername, txtPassword } = this.state
        const loggedInUser = localStorage.getItem('user');
        if (loggedInUser !== null) {
            return <Redirect
                to={
                    {
                        pathname: '/products',
                        state: {
                            from: location
                        }
                    }
                }
            />
        }
        return (
            <div className="row">
                <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                    <form onSubmit={this.onLogin}>
                        <legend>Login(Redirect)</legend>
                        <div className="form-group">
                            <label>Username: </label>
                            <input
                                type="text"
                                className="form-control"
                                id=""
                                placeholder="Input field"
                                name="txtUsername"
                                value={txtUsername}
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
                                name="txtPassword"
                                value={txtPassword}
                                onChange={this.onChange}
                            />
                        </div>
                        <button type="submit" className="btn btn-primary">Login</button>
                    </form>
                </div>
            </div>
        );
    }
}
export default Login;

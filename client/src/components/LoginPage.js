import React, {Component} from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

class LoginPage extends Component {
    redirectLogin = () => {
        this.props.history.push('/profile');
    }
    render() {
        const handleUsername = (e) => {
            const username = e.target.value;
            this.props.handleUsername(username);
        }
        const handlePassword = (e) => {
            const password = e.target.value;
            this.props.handlePassword(password);
        }
        const handleLogin = async (e) => {
            e.preventDefault();
            this.props.handleLogin(this.redirectLogin);
        }
        return (
            <div>
                    <form>
                        <input onChange={handleUsername} type="textbox" placeholder="username"/>
                        <input onChange={handlePassword} type="password" placeholder="password" />
                        <button onClick={handleLogin}type="submit">Submit</button>
                    </form>
                {this.props.err ? <p>Username could not be found and/or password is incorrect</p> : ''}
                <p>Don't have an account? <a href="/signup" >Create an account</a></p> 
                  
            </div>
        );
    }
} 

export default LoginPage;
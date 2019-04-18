import React, {Component} from 'react';

class LoginPage extends Component {
    render() {
        const handleUsername = (e) => {
            const username = e.target.value;
            this.props.handleUsername(username);
        }
        const handlePassword = (e) => {
            const password = e.target.value;
            this.props.handlePassword(password);
        }
        const handleLogin = (e) => {
            e.preventDefault();
            this.props.handleLogin();
        }
        return (
            <div>
                <form>
                    <input onChange={handleUsername} type="textbox" placeholder="username"/>
                    <input onChange={handlePassword} type="password" placeholder="password" />
                    <button onClick={handleLogin}type="submit">Submit</button>
                </form>
                <p>Don't have an account? <a href="/signup" >Create an account</a></p>
            </div>
        );
    }
} 

export default LoginPage;
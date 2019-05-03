import React, {Component} from 'react';

class SignupPage extends Component {
    redirectLogin = () => {
        this.props.history.push('/profile');
    }
    render() {
        const handleCreateUsername = (e) => {
            const createUsername = e.target.value;
            this.props.handleCreateUsername(createUsername);
        }

        const handleCreatePassword = (e) => {
            const createPassword = e.target.value;
            this.props.handleCreatePassword(createPassword);
        }

        const handleConfirmPassword = (e) => {
            const confirmPassword = e.target.value;
            this.props.handleConfirmPassword(confirmPassword);
        }
        const handleRegister = (e) => {
            e.preventDefault();
            this.props.handleRegister(this.redirectLogin);
        }

        return (
            <div id="signup-page">
                <form>
                    <input className="input-signup" onChange={handleCreateUsername} type="text" placeholder="create username" />
                    <input className="input-signup" onChange={handleCreatePassword} type="password" placeholder="create password" />
                    <input className="input-signup" onChange={handleConfirmPassword} type="password" placeholder="confirm password"/>
                    <button className="input-signnup" onClick={handleRegister}>Register</button>
                </form>
                <p>{this.props.message}</p>
            </div>
        );
    }
}

export default SignupPage;
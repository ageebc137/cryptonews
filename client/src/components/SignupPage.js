import React, {Component} from 'react';

class SignupPage extends Component {
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
            this.props.handleRegister();
        }

        return (
            <div>
                <form>
                    <input onChange={handleCreateUsername} type="text" placeholder="create username" />
                    <input onChange={handleCreatePassword} type="password" placeholder="create password" />
                    <input onChange={handleConfirmPassword} type="password" placeholder="confirm password"/>
                    <button onClick={handleRegister}>Register</button>
                </form>
                <p>{this.props.message}</p>
            </div>
        )
    }
}

export default SignupPage;
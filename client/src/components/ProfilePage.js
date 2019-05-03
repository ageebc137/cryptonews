import React, {Component} from 'react';

class ProfilePage extends Component {
    render() {
        return (
           <div>
               {
                   (this.props.loggedIn) ?
                   (<div id="profile-page">
                       <p>Welcome, {this.props.name}! You are logged in.</p>
                       <a href="">Logout</a>
                    </div>) :
                    (
                        ''
                    )
               }
           </div>
        );
    }
}

export default ProfilePage;
import React, { Component } from 'react';
import $ from 'jquery';
import user from '../controllers/Axios'

class CharSelect extends Component {

  componentWillMount(){
    console.log(this.props.auth.isAuthenticated())
    }

  render() {
    const { user } = user;
    console.log(user);
    const { auth } = this.props;
    $( document ).ready(function() {
  });

    return (
        <div>
            
            
<header id="Header">
            <p className="charSelect"><button className="charSelectButton" onClick={user.find}>Select Character</button></p>
            
            {
              auth.isAuthenticated() ?
                <p className="auth-text"><button className="auth-link" onClick={auth.logout}>Logout</button></p> :
                <p className="auth-text"><button className="auth-link" onClick={auth.login}>Login</button></p>
            }
          </header>
      <div>
      
      </div>
        </div>
    );
  }
}

export default CharSelect;
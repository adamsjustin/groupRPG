import React, { Component } from 'react';
import Header from '../components/Header';


class Home extends Component {

  componentWillMount(){
    console.log(this.props.auth.isAuthenticated())
    }

  render() {
    const { auth } = this.props;

    return (
        <div>
            
            
<header id="Header">
<Header/> 
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

export default Home;
import React, { Component } from 'react';
import Header from '../components/Header';



class Login extends Component {


  componentWillMount(){
    console.log(this.props.auth.isAuthenticated())
    }

  render() {
    const { auth } = this.props;
    return (
        <div>
            <Header/>
            
<form action="/login" method="post">
<header className="header">
            <h1>todos</h1>
          </header>
      <div>
      {
              auth.isAuthenticated() ?
              <input className="auth-link" type="submit" onClick={auth.logout()} value="logout"/> :
              <input className="auth-link" type="submit" onClick={auth.login()} value="login"/>
            }
      </div>
</form>
        </div>
    );
  }
}

export default Login;
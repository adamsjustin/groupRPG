import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import Home from './Home'
import Login from './Login'
import My404Component from './404'
import Auth from '../Auth/auth';
import history from '../Auth/history';
import CharSelect from './CharSelect';
import Callback from '../Auth/callback';

const auth = new Auth();

const handleAuthentication = (nextState, replace) => {
  if (/access_token|id_token|error/.test(nextState.location.hash)) {
    auth.handleAuthentication();
  }
}

// The Main component renders one of the the provided
// Routes (provided that one matches).  
const Main = ({props}) => (
  <main history={history}>
      <Switch >
        <Route exact path="/" render ={(props) => <Home auth={auth} {...props}/>}/>
        <Route exact path="/CharSelect" render ={(props) => <CharSelect auth={auth} {...props}/>}/>
        <Route exact path='/login' render ={(props) => <Login auth={auth} {...props}/>}/>
        <Route path='/404' component={My404Component} />
        <Route path="/callback" render={(props) => {
            handleAuthentication(props);
            return <Callback auth={auth} {...props} />
          }}/>
        
      </Switch>
  </main>
)

export default Main

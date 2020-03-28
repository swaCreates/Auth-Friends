import React, {Component} from 'react';
import {Route, Link, Switch} from 'react-router-dom';
import '../App.scss';

import LogInForm from './LogInForm';
import {FriendsList} from '../components/FriendsList';
import PrivateRoute from '../components/PrivateRoute';
import AddFriend from './AddFriend';

class App extends Component {
  
  render(){
    return (
      <div className="App">
        <Route exact path='/'>
          <h1>Welcome To Friend-Space</h1>
          <Link className='log-in' to='/login'>Log In</Link>
        </Route>
        <Switch>
          <Route 
            path='/login' 
            component={LogInForm} 
          />
          <PrivateRoute 
            path='/friends-list' 
            component={FriendsList}
          />
          <PrivateRoute 
            path='/add-friend' 
            component={AddFriend}
          />
        </Switch>
      </div>
    );
  }
}

export default App;

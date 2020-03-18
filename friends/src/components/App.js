import React, {Component} from 'react';
import {Route, Link} from 'react-router-dom';
import '../App.scss';

import axios from 'axios';

import LogInForm from './LogInForm';
import {FriendsList} from '../components/FriendsList';

class App extends Component {

  constructor(){
    super();
    this.state= {
      friends: [],
    }
  }

  componentDidMount(){
    axios
    .get('http://localhost:5000/api/friends', {
      headers: {
        authorization: window.localStorage.getItem('token')
      }
    })
    .then(res => {
      console.log(res);
      this.setState({ friends: [res.data] })
    })
    .catch(err => console.log('Error: ', err));
  }
  
  render(){
    return (
      <div className="App">
        <Route exact path='/'>
          <h1>Welcome To Friend-Space</h1>
          <Link className='log-in' to='/login'>Log In</Link>
        </Route>
        <Route 
          path='/login' 
          component={LogInForm} 
        />
        <Route 
          path='/friends-list' 
          render={props => {
            return <FriendsList {...props} friends={this.state.friends} />
          }}
        />
      </div>
    );
  }
}

export default App;

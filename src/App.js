import React, { Component } from 'react';
import Navbar from './components/layout/Navbar';
import { Switch, Route } from 'react-router-dom';
import Chats from './containers/chats/Chats';
import Signin from './containers/auth/Signin';


class App extends Component {
  render(){
    return(
      <div>
        <div>
          <Navbar/>
        </div>
        <Switch>
          <Route exact path='/' component={Chats}></Route>
          <Route path="/signin" component={Signin}></Route>
        </Switch>
      </div>
    );
  }
}

export default App;
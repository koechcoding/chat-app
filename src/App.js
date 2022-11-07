import React, { Component } from 'react';
import Navbar from './components/layout/Navbar';
import { BrowserRouter, Route } from 'react-router-dom';
import Chats from './containers/chats/Chats';
import Signin from './containers/auth/Signin';


class App extends Component {
  render(){
    return(
      <div>
        <div>
          <Navbar/>
        </div>
        <BrowserRouter>
          <Route exact path='/' component={Chats}></Route>
          <Route path="/signin" component={Signin}></Route>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
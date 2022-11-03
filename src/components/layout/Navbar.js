import React from "react";
import { NavLink } from "react-router-dom";
import { fb } from '../../config/fbConfig';
import './nav.scss';
import SignedInLinks from './SignedInLinks';
import SignedOutLinks from './SignedOutLinks';

class Navbar extends Component {
   signOut=()=>{
    fb.auth()
      .signOut()
      .then(()=>console.log('User logged out successfully'))
      .catch(err=> console.log(err))
   };

   render(){
    return(
        <nav  
          className="Navbar is-transparent"
          role="navigation"
          aria-label="main navigation"
        >
        <div className="container">
            <div className="navbar-brand">
            <NavLink to="/" className="navbar-item">
              <span style={{ fontSize: 30 }}>Chatapp</span>
            </NavLink>
          </div>
          <div className="navbar-end">
            <SignedOutLinks />
            <SignedInLinks signOut={this.signOut} />
          </div>
        </div>
        </nav>
    );
   }
}
export default Navbar;
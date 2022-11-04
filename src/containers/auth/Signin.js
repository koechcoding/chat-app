import React, { Component } from 'react';
import './auth.scss';
import { connect } from 'react-redux';
import { signInWithProvider } from '../../redux/actions/authActions';

class Signin extends Component {
  _signIn = (provider) => {
    const { signInWithProvider } = this.props;
    signInWithProvider(provider);
  };

  render() {
    return (
      <div className="auth-container">
        <div className="auth-panel">
          <h1>Welcome to ChatApp</h1>
          <button
            className="button is-danger button-google"
            style={{ paddingLeft: '1.3rem', paddingRight: '1.3rem', backgroundColor: '#06a367' }}
            onClick={() => this._signIn('google')}
          >
            Signin with Google
          </button>
          <button
            className="button is-info button-facebook"
            onClick={() => this._signIn('facebook')}
          >
            Signin with Facebook
          </button>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = {
  signInWithProvider
};

export default connect(
  null,
  mapDispatchToProps
)(Signin);
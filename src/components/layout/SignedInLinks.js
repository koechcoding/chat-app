import React from 'react';

const SignedInLinks = (props) => {
  const { signOut } = props;
  return (
    <button className="navbar-signout__btn" onClick={signOut}>
      Sign Out
    </button>
  );
}

export default SignedInLinks;
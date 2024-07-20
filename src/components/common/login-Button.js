import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { Link } from 'react-router-dom';
const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();
  return (
    <Link
      className="btn btn-primary btn-block"
      onClick={() => loginWithRedirect()}
      style={{color: '#E2F0F7'}}
    >
      Log In
    </Link>
  );
};

export default LoginButton;
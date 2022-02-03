import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import { login, startGoogleLogin, startLoginEmailPassword } from '../../actions/auth';
import { useForm } from '../../hooks/useForm';

export const LoginScreen = () => {

  const dispatch = useDispatch();

  const [ { email, password }, handleInputChange ] =  useForm({
    email: 'cali@gmail.com',
    password: '123456'
  });

  const handleLogin = (e) => {
      e.preventDefault();
      dispatch( startLoginEmailPassword( email, password ) );
  }

  const handleGoogleLogin = () => {
    dispatch( startGoogleLogin() );
  }

  return (
      <>
        <h3 className="auth_title" >Login</h3>

        <form onSubmit={handleLogin}>

          <input 
            type="text"
            placeholder="Email"
            name="email"
            className="auth__input"
            autoComplete='off'
            value = { email }
            onChange={ handleInputChange }
          />

          <input 
            type="password"
            placeholder="Password"
            name="password"
            className="auth__input"
            value = { password }
            onChange={ handleInputChange }
          />

          <button
            type="submit"
            className="btn btn-primary btn-block"
          >
            login
          </button>

          <div className="auth_social-networks">
            <p>Login with social networks</p>

            <div 
                className="google-btn"
                onClick={ handleGoogleLogin }
            >
                <div className="google-icon-wrapper">
                    <img className="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="google button" />
                </div>
                <p className="btn-text">
                    <b>Sign in with google</b>
                </p>
            </div>
          </div>

          <Link 
            to="/auth/register"
            className="link"
          >
              Create a new account
          </Link>

        </form>
      </>
  )
};

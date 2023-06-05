
import React, { useState } from 'react';
import * as sessionActions from '../../store/session';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import "./LoginForm.css";


const  LoginFormPage = () => {
  const dispatch = useDispatch();
  const sessionUser = useSelector(state => state.session.user);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState([]);

  if (sessionUser) return <Redirect to="/" />;

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors([]);
    return dispatch(sessionActions.login({ email, password }))
      .catch(async (res) => {
        let data;
        try {
          // .clone() essentially allows you to read the response body twice
          data = await res.clone().json();
        } catch {
          data = await res.text(); // Will hit this case if the server is down
        }
        if (data?.errors) setErrors(data.errors);
        else if (data) setErrors([data]);
        else setErrors([res.statusText]);
      });
  }

  return (
    <div>
      <div className='LoginForm-Container'>
          <h2 className='heading'>Login to Yikes</h2>
          <p className='subheading'>New to Yikes <a className='signup-link' href='/signup'>Sign up</a>.</p>
          <form onSubmit={handleSubmit} className="loginForm">
          <ul className='errors'>
              {errors.map(error => <li key={error}>{error}</li>)}
          </ul>
          <label className='email'>
              <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              required
              />
          </label>
          <label className='password'>
              <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              required
              />
          </label>
          <button type="submit">Log In</button>
          </form>
      </div>
    </div>
  );
}

export default LoginFormPage;
import React from 'react';
import {Link} from 'react-router-dom'

const LocalLoginForm = props => {
  return (
    <form onSubmit={props.handleSubmit}>
      <label htmlFor='email'>
        <input name='email' type='email' />
      </label>
      <label htmlFor='password'>
        <input name='password' type='password' />
      </label>
      <button type='submit'>Login</button>
      <button><Link to='/signup'>New User?</Link></button>
    </form>
  );
};

export default LocalLoginForm;

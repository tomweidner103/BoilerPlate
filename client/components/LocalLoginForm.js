import React from 'react';

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
    </form>
  );
};

export default LocalLoginForm;

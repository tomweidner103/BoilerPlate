import React from 'react';
import { login, createMe } from '../reducers/userReducer';
import { connect } from 'react-redux';
import LocalLoginForm from './LocalLoginForm';

const Loggin = props => {
  return <LocalLoginForm handleSubmit={props.handleSubmit} />;
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    async handleSubmit(evt) {
      evt.preventDefault();
      const email = evt.target.email.value;
      const password = evt.target.password.value;
      await dispatch(login({ email, password }));
      ownProps.history.push('/home');
    }
  };
};

export default connect(
  null,
  mapDispatchToProps
)(Loggin);

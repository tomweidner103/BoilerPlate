import React from 'react';
import { connect } from 'react-redux';
import {logout} from '../reducers/userReducer'

import { Redirect } from 'react-router-dom';
const UserPage = props => {
  const { user, handleClick } = props;
  if (!user.id) {
    return <Redirect to='/' />;
  }

  return (
    <div>
      <div>Welcome back {user.email}</div>
      <button onClick={handleClick}>Logout</button>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    user: state.user
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    async handleClick() {
      await dispatch(logout());
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserPage);

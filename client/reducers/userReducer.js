import axios from 'axios';

const GET_USER = 'GET_USER';

const gotMe = user => ({
  type: GET_USER,
  user
});

export const getMe = () => async dispatch => {
  try {
    const { data } = await axios.get('/api/auth/me');
    dispatch(gotMe(data));
  } catch (err) {
    console.error(err);
  }
};

export const createMe = (user) => async dispatch => {
  try{
    const { data } = await axios.post('/api/auth/signup', user)
    dispatch(gotMe(data))
  }catch(err){
    console.log(err)
  }
}

export const login = formData => async dispatch => {
  try {
    const { data } = await axios.post('/api/auth/login', formData);
    dispatch(gotMe(data));
  } catch (err) {
    console.error(err);
  }
};

export const logout = () => async dispatch => {
  try {
    await axios.post('/api/auth/logout');
    dispatch(gotMe({}));
  } catch (err) {
    console.error(err);
  }
};

const userReducer = (state = {}, action) => {
  switch (action.type) {
    case GET_USER:
      return action.user;
    default:
      return state;
  }
};

export default userReducer;

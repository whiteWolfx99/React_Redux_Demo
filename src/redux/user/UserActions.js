import {
  FETCH_USERS_REQUEST,
  FETCH_USERS_SUCCESS,
  FETCH_USERS_FAILURE
} from "./UserTypes";
import axios from 'axios';

export const fetchuserrequest = () => {
  return {
    type: FETCH_USERS_REQUEST,
  };
};

export const fetchusersuccess = users => {
  return {
    type: FETCH_USERS_SUCCESS,
    payload: users,
  };
};

export const fetchuserfailure = error => {
  return {
    type: FETCH_USERS_FAILURE,
    payload: error,
  };
};

export const fetchUsers = () => {
  return (dispatch) => {
    dispatch(fetchuserrequest());
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then(response => {
        // response.data is the users
        const users = response.data;
        dispatch(fetchusersuccess(users));
      })
      .catch(error => {
        // error.message is the error message
        const errorMsg = error.message;
        dispatch(fetchuserfailure(errorMsg));
      });
  };
};

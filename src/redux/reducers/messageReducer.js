import {
    POST_MESSAGE,
    POST_MESSAGE_SUCCESS,
    POST_MESSAGE_FAILURE
  } from '../actions/actionTypes';
  
  const initialState = {
    message: {},
    error: '',
    isLoading: false
  };
  
  export default (state=initialState, action) => {
    switch (action.type) {
      case POST_MESSAGE:
        return {
          ...state,
          isLoading: true
        }
      case POST_MESSAGE_SUCCESS:
        return {
          ...state,
          isLoading: false,
          message: action.data
        }
      case POST_MESSAGE_FAILURE:
        return {
          ...state,
          isLoading: false,
          error: action.error
        }
      default:
        return state;
    }
  }
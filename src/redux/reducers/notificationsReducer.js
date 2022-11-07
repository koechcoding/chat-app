import {
    GET_NOTIFICATIONS,
    GET_NOTIFICATIONS_SUCCESS,
    GET_NOTIFICATIONS_FAILURE
  } from '../actions/actionTypes';
  
  const initialState = {
    notifications: [],
    error: '',
    isLoading: false
  }
  
  const notificationsReducer = (state=initialState, action) => {
    switch (action.type) {
      case GET_NOTIFICATIONS:
        return {
          ...state,
          isLoading: true
        }
      case GET_NOTIFICATIONS_SUCCESS:
        return {
          ...state,
          isLoading: false,
          notifications: action.data
        }
      case GET_NOTIFICATIONS_FAILURE:
        return {
          ...state,
          isLoading: false,
          error: action.error
        }
      default:
        return state;
    }
  }
  
  export default notificationsReducer;
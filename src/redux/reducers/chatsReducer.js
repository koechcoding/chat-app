import {
    GET_CHATS,
    GET_CHATS_SUCCESS,
    GET_CHATS_FAILURE
  } from '../actions/actionTypes';

  const initialState = {
    chats: [],
    error: '',
    isLoading: false
  }

  const chatsReducer=(state=initialState, action)=>{
    switch (action.type) {
      case GET_CHATS:
        return {
          ...state,
          isLoading: true
        }
      case GET_CHATS_SUCCESS:
        return {
          ...state,
          isLoading: false,
          chats: action.data
        }
      case GET_CHATS_FAILURE:
        return {
          ...state,
          isLoading: false,
          error: action.error
        }
      default:
        return state;
    }
  }

  export default chatsReducer;
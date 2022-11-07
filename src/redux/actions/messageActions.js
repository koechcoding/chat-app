import {
    POST_MESSAGE,
    POST_MESSAGE_SUCCESS,
    POST_MESSAGE_FAILURE
  } from '../actions/actionTypes';
  import { fb } from '../../config/fbConfig';
  
  export const postMessage = message => dispatch => {
    console.log('Message', message);
    dispatch({ type: POST_MESSAGE });
    fb.firestore()
      .collection('chatroom')
      .add(message)
      .then(data => {
        data
          .get()
          .then(doc =>
            dispatch({ type: POST_MESSAGE_SUCCESS, data: doc.data() })
          )
          .catch(error => {
            console.log('Message posting failed', error);
            dispatch({ type: POST_MESSAGE_FAILURE, error });
          });
      })
      .catch(error => {
        console.log('Message posting failed', error);
        dispatch({ type: POST_MESSAGE_FAILURE, error });
      });
  };
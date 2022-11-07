import {
    GET_CHATS,
    GET_CHATS_SUCCESS,
    GET_CHATS_FAILURE
  } from '../actions/actionTypes';
  import { fb } from '../../config/fbConfig';
  
  export const getChats = () => dispatch => {
    dispatch({ type: GET_CHATS });
    fb.firestore()
      .collection('chatroom')
      .orderBy('createdAt')
      .onSnapshot(snapshot => {
         const chats = snapshot.docs.map(doc => { 
           const chat = ( {id: doc.id, ...doc.data()});
           return chat;
         });
         dispatch({ type: GET_CHATS_SUCCESS, data: chats })
      }, (error) => {
        dispatch({ type: GET_CHATS_FAILURE, error })
      });
  };
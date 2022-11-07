import {
    GET_NOTIFICATIONS,
    GET_NOTIFICATIONS_SUCCESS,
    GET_NOTIFICATIONS_FAILURE
  } from './actionTypes';
  import { fb } from '../../config/fbConfig';
  
  export const getNotifications = () => dispatch => {
    dispatch({ type: GET_NOTIFICATIONS });
    fb.firestore()
      .collection('notifications')
      .onSnapshot(snapshot => {
        const notifications = snapshot.docs.map(doc => {
          return {
            id: doc.id,
            ...doc.data()
          }
        });
        dispatch({ type: GET_NOTIFICATIONS_SUCCESS, data: notifications })
      }, (error) => {
        dispatch({ type: GET_NOTIFICATIONS_FAILURE, error })
      });
  };
import { combineReducers } from 'redux';
import messageReducer from './messageReducer';
import chatsReducer from './chatsReducer';
import notificationsReducer from "./notificationsReducer";

const rootReducer = combineReducers({
  message: messageReducer,
  chats: chatsReducer,
  notifications: notificationsReducer
});

export default rootReducer;
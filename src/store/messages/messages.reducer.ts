import { createReducer } from '@reduxjs/toolkit';
import { createMessage, deleteMessage } from '~store/messages/messages.actions';
import { IMessages } from '~types';


const initialState: IMessages = {
  messages: []
};

export const messagesReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(createMessage, (state, { payload }) => {
      const id = Math.random().toString(36).substring(2,7);
      const { username, message } = payload;
      const data = {
        id,
        username,
        message
      }
      state.messages.push(data);
    })
    .addCase(deleteMessage, (state, {payload}) => {
      state.messages = state.messages.filter(item => item.id !== payload.id)
    })
});

import { createAction } from '@reduxjs/toolkit';
import { IMessage } from '~types';

export const createMessage = createAction<IMessage>('MESSAGE/CREATE_MESSAGE')
export const deleteMessage = createAction<IMessage>('MESSAGE/DELETE_MESSAGE')
export const getMessages = createAction('MESSAGE/GET_MESSAGES')

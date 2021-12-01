import { createSelector } from '@reduxjs/toolkit';
import type { RootState } from '~store';

export const selectMessages = (state: RootState) => state.messages;
export const messagesSelector = createSelector(selectMessages, state => state);

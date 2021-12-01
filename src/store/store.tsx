import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit';
import { loadState } from '~lib/func/local-storage';
import {
  createStateSyncMiddleware,
  initMessageListener,
} from 'redux-state-sync';
import { messagesReducer } from '~store/messages';

export const store = configureStore({
  reducer: {
    messages: messagesReducer,
  },
  preloadedState: loadState('messages'),
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(createStateSyncMiddleware()),
});

initMessageListener(store);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query'
import { loadState } from '~lib/func/local-storage';
import { messagesApi } from '~store/messages/message.service';

export const store = configureStore({
  reducer: {
    [messagesApi.reducerPath]: messagesApi.reducer
  },
  preloadedState: loadState('store'),
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(messagesApi.middleware),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;


setupListeners(store.dispatch)
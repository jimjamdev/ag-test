import { Middleware } from 'redux';

export const localStorageMiddleware: Middleware =
  (store) => (next) => (action) => {
    const isMessage = action?.type.startsWith('MESSAGE');
    // console.log('isMessage', isMessage);
    // console.log('store', store, 'next', next, 'action', action);
    return next(action);
  };

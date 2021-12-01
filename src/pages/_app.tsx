import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import debounce from '~lib/func/debounce';

import { saveState } from '~lib/func/local-storage';
import { store } from '~store/store';

import '~styles/app.scss';

/*store.subscribe(
  debounce(() => {
    return saveState('store', store.getState());
  }, 1000),
);*/

function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default App;

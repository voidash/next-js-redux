import '../styles/globals.css'
import initStore from '../redux/store/index';
import { useStore } from '../redux/store/index'

import { Provider } from 'react-redux';

function MyApp({ Component, pageProps }) {

  const store = useStore(pageProps.initialReduxState);

  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  )
}

export default MyApp;

import React from 'react';
import { Provider } from 'react-redux';

import Routes from './Routes';
import Store from '../redux/ConfigureStore';

const App = () => {
  return (
    <Provider store={Store}>
      <Routes />
    </Provider>
  );
}

export default App;

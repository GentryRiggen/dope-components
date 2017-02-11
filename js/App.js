import React from 'react';
import { Provider } from 'react-redux';
import configureStore from './lib/store';
import rootSagas from './lib/sagas';
import MainContainer from './MainContainer';

const store = configureStore();
store.runSaga(rootSagas);

const App = () => (
  <Provider store={store}>
    <MainContainer />
  </Provider>
);

export default App;

import React from 'react';
import { Provider } from 'react-redux';
import configureStore from './lib/store';
import rootSagas from './lib/sagas';
import MainContainer from './MainContainer';
import { toggleDarkMode } from './ducks/componentsTheme';

const store = configureStore();
store.runSaga(rootSagas);
// store.dispatch(toggleDarkMode());


const App = () => (
  <Provider store={store}>
    <MainContainer />
  </Provider>
);

export default App;

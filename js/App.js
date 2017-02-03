import React from 'react';
import { Provider } from 'react-redux';
import configureStore from './lib/store';
import rootSagas from './lib/sagas';
import MainContainer from './MainContainer';

const store = configureStore();
store.runSaga(rootSagas);

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <MainContainer />
      </Provider>
    );
  }
}

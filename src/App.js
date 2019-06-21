import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { getNextState } from './redux/reducers';
import NamesHandler from './components/NamesHandler';
import thunk from 'redux-thunk';

const store = createStore(getNextState, applyMiddleware(thunk));

export default function App() {
  return (
    <Provider store={store}>
      <NamesHandler />
    </Provider>
  );
}

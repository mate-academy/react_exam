import React from 'react';
import './App.css';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { NameListHandler } from './components/NameListHandler'
import { getNextState } from './redux/reducer';
import thunk from 'redux-thunk';
import { request } from './redux/actions'

const store = createStore(getNextState, applyMiddleware(thunk))
store.dispatch(request())

function App() {
  return (
    <Provider store={store}>
      <NameListHandler />
    </Provider>
  );
}

export default App;

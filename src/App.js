import React from 'react';
import {createStore, applyMiddleware} from 'redux';
import './App.css';
import {Provider} from 'react-redux';
import { getNextState } from './redux/reducers';
import thunk from 'redux-thunk';
import AuthorsListHandler from './Components/AuthorsListHandler';

const store = createStore(getNextState, applyMiddleware(thunk));

function App() {
  return (
    <Provider store={store}>
      <AuthorsListHandler />
    </Provider>
  );
}

export default App;

import React from 'react';
import {applyMiddleware, createStore} from 'redux'
import {Provider} from 'react-redux';
import './App.css';
import AuthorListHandler from './components/AuthorListHandler';
import thunk from "redux-thunk"
import {getNextState} from "./redux/reducers";

const store = createStore(getNextState, applyMiddleware(thunk));

function App() {
  return (
    <Provider store={store}>
      <AuthorListHandler />
    </Provider>
  );
}

export default App;

import React from 'react';
import './App.css';
import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { reducer } from './redux/reducers';
import AuthorsHandler from './components/AuthorsHandler';

const store = createStore(reducer, applyMiddleware(thunk));

function App() {
  return (
    <Provider store={store}>
      <AuthorsHandler />
    </Provider>
  );
}

export default App;

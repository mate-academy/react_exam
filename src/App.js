import React from 'react';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import { getNextState } from './redux/reducer';
import AuthorListHandler from './components/AuthorListHandler';
import './App.css';

const store = createStore(getNextState, applyMiddleware(thunk));

function App() {
  return (
    <div className="app">
      <Provider store={store}>
        <AuthorListHandler />
      </Provider>
    </div>
  );
}

export default App;

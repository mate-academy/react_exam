import React from 'react';
import './App.css';
import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import ListHandler from './Components/ListHandler';
import { getNextState } from './redux/reducers';

const store = createStore(getNextState, applyMiddleware(thunk));

function App() {
  return (
    <Provider store={store}>
      <ListHandler />
    </Provider>
  );
}

export default App;

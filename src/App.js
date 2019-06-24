import React from 'react';
import './App.css';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { applyMiddleware, createStore } from 'redux';
import reducer from './redux/reducers';
import AuthorsListHandler from './components/AuthorsListHandler';

export const store = createStore(reducer, applyMiddleware(thunk));
function App() {
  return (
    <Provider store={store}>
      <AuthorsListHandler />
    </Provider>
  );
}

export default App;

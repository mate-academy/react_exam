import React from 'react';
import './App.css';
import { combineReducers, createStore } from 'redux';
import AuthorList from './components/AuthorList';
import { Provider } from 'react-redux';
import AuthorsReducer from './reducers/AuthorsReducer';

const allReduserc = combineReducers({
  authors: AuthorsReducer
});

export const store = createStore(
  allReduserc,
  {},
  window.devToolsExtension && window.devToolsExtension()
);

function App() {
  return (
    <Provider store={store}>
      <AuthorList authors={[]}/>
    </Provider>
  );
}

export default App;

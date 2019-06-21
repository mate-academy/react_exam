import React from 'react';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import {AuthorApp} from './redux/reducer';
import AuthorListHandler from './components/AuthorListHandler';
import thunk from "redux-thunk";

const store = createStore(AuthorApp, applyMiddleware(thunk));

function App() {
  return (
    <Provider store={store}>
       <AuthorListHandler/>
    </Provider>

  );
}

export default App;

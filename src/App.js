import React from 'react';
import './App.css';
import {applyMiddleware, createStore} from 'redux';
import {Provider} from 'react-redux';
import {getNextState} from "./redux/reducers";
import AuthorHandler from "./components/AuthorHandler";
import ToolButtonsHandler from "./components/ToolButtonsHandler";
import thunk from "redux-thunk";

const store = createStore(getNextState, applyMiddleware(thunk));

function App() {
  return (
    <Provider store={store}>
      <ToolButtonsHandler />
      <AuthorHandler />
    </Provider>  
  );
}

export default App;

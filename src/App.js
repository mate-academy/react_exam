import React from 'react';
import './App.css';
import {getNextState} from './reducers/reducer';
import {applyMiddleware, createStore} from 'redux';
import {Provider} from 'react-redux';
import TitlesHandler from "./components/TitlesHandler";
import thunk from 'redux-thunk';

const store = createStore(getNextState, applyMiddleware(thunk));

function App() {
  return (
    <Provider store={store}>
      <TitlesHandler />
    </Provider>
  );
}

export default App;

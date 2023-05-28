import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import studentReducer from './reducers/studentReducer';
import App from './App';
import './components/styles/studentProfile.css';

const store = createStore(studentReducer);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

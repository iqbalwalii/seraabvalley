import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import logger from 'redux-logger';
import reducers from './redux/reducers';
import thunk from 'redux-thunk';

const reduxStore = createStore(
    reducers,
    composeWithDevTools(applyMiddleware(thunk, logger)),
);
ReactDOM.render(
  <React.StrictMode>
      <Provider store={reduxStore}>
          <App />
      </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);

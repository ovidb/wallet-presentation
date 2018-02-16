import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import createLogger from 'redux-logger';
import reducers from './reducers';
import { Provider } from 'react-redux';
import App from './components/App';
import thunk from 'redux-thunk';

const middleware = [createLogger, thunk]

const store = createStore(reducers, applyMiddleware(...middleware));

ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('root')
);



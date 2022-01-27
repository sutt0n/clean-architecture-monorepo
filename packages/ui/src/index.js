import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { createOvermind } from 'overmind';
import { Provider } from 'overmind-react';
import { config } from './presenter/presenter';
import App from './App.jsx';

const overmind = createOvermind(config);

ReactDOM.render(
  <Provider value={overmind}>
    <App />
  </Provider>,
  document.getElementById('root'),
);

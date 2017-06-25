import React from 'react';
import ReactDOM from 'react-dom';
import ReactGA from 'react-ga';

import App from './components/App/App';

import './style/app.css';
import 'foundation-sites/js/foundation.js';
import './javascript/main.js';

ReactGA.initialize('UA-65610184-1');

ReactDOM.render(
  <App/>,
  document.getElementById('root')
);

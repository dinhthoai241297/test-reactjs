import '@babel/polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-datepicker/dist/css/bootstrap-datepicker.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './assets/css/styles.css';

import $ from 'jquery';
window.jQuery = window.$ = $;
require('popper.js');
require('bootstrap');
require('bootstrap-datepicker');

ReactDOM.render(<App />, document.getElementById('root'));
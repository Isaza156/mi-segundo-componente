import React from 'react';
import ReactDOM from 'react-dom';
import GeekConf from './containers/GeekConf';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import './global.css';
import $ from 'jquery';
$(function () {
    $('[data-toggle="tooltip"]').tooltip()
});

ReactDOM.render(<GeekConf />, document.getElementById('app'));

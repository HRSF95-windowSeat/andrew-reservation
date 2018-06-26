import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import App from './components/app.jsx';


ReactDOM.render(
  <BrowserRouter>
    <Route exact path="/restaurant/:restaurant_id" component={App} />
  </BrowserRouter>
  , document.getElementById('appReserve'),
);

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './pages/Home';
import { BrowserRouter,Switch,Route } from 'react-router-dom';
import Cadastro from './pages/Cadastro';
import Page404 from './pages/Page404';

ReactDOM.render(
  <BrowserRouter>
      <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/registry" component={Cadastro} />
          <Route component={Page404} />
      </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);
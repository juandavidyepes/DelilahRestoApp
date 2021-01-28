import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Navbar from './components/Navbar';
import Foodmenu from './pages/Foodmenu';
import Register from './pages/Register';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Switch, Route,} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <Navbar />
      <Switch>
        <Route exact path='/DelilahRestoApp' component={App} />
        <Route path='/DelilahRestoApp/register' component={Register} />
        <Route path='/DelilahRestoApp/foodmenu' component={Foodmenu} />
      </Switch>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

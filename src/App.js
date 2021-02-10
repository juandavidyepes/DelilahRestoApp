import React from 'react';
import { useHistory } from 'react-router-dom';
import { Button } from '@material-ui/core';
import './App.css';
import Login from './pages/Login';

export default function App() {
  const history = useHistory();

  const toRegister = () => {
    history.push('/DelilahRestoApp/register');
    document.querySelector('.navBar').classList.remove('navBarHome');
  };

  const toFoodMenu = () => {
    history.push('/DelilahRestoApp/foodmenu');
    document.querySelector('.navBar').classList.remove('navBarHome');
  };

  // document.querySelector('.navBar').classList.add('navBarMenu')

  return (
    <div className='App'>
      <Login />
      <Button className='linkBtn' variant='outlined' onClick={toRegister}>
        REGISTRARSE
      </Button>
    </div>
  );
}

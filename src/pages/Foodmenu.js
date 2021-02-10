import React from 'react';
import { useHistory } from 'react-router-dom';
import { Button } from '@material-ui/core';

import { menu } from '../data/menu';
import Dish from '../components/Dish';

import '../style/foodmenu.css';

export default function FoodMenu() {
  const history = useHistory();

  const toLogin = () => {
    history.push('/DelilahRestoApp');
    document.querySelector('.navBar').classList.add('navBarHome');
  };

  return (
    <div className='foodMenu'>
      <h3 className='title'>Nuestros platos</h3>
      {menu.map((dish) => {
        return <Dish key={dish.id} {...dish}></Dish>;
      })}
      <Button className='linkBtn' variant='outlined' onClick={toLogin}>
        CERRAR SESIÓN
      </Button>
    </div>
  );
}

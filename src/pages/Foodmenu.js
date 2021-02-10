import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { Button } from '@material-ui/core';
import Dish from '../components/Dish';

import '../style/foodmenu.css';

export default function FoodMenu() {
  const [foodMenu, setFoodMenu] = useState([]);

  const history = useHistory();

  const toLogin = () => {
    history.push('/DelilahRestoApp');
    document.querySelector('.navBar').classList.add('navBarHome');
  };

  console.log(localStorage.getItem('token'));

  const getMenu = async () => {
    let token = localStorage.getItem('token');
    const resp = await fetch('http://localhost:3001/foodmenu', {
      method: 'GET',
      headers: {
        authorization: `Bearer ${token}`,
      },
    });
    const data = await resp.json();
    console.log(data);
    setFoodMenu(data);
  };

  useEffect(() => {
    getMenu();
  }, []);

  return (
    <div className='foodMenu'>
      <h3 className='title'>Nuestros platos</h3>
      {foodMenu.map((dish) => {
        return <Dish key={dish.id} {...dish}></Dish>;
      })}
      <Button className='linkBtn' variant='outlined' onClick={toLogin}>
        CERRAR SESIÓN
      </Button>
    </div>
  );
}

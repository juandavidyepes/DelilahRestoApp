import React from 'react';
import { useHistory } from 'react-router-dom';
// import {  } from 'react-bootstrap';
import { Button } from '@material-ui/core';
import '../style/foodmenu.css'

export default function FoodMenu() {
    const history = useHistory()

    const toLogin = () => {
        history.push('/DelilahRestoApp')
        document.querySelector('.navBar').classList.add('navBarHome')
    }

    return(  
        <div className='foodMenu'>
            <h2 className='title'>Nuestros platos</h2>
            <Button className='linkBtn' variant="outlined" onClick={toLogin}>INICAR SESIÓN</Button>
        </div>
    )
}
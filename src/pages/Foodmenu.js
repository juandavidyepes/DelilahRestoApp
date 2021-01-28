import React from 'react';
import { useHistory } from 'react-router-dom';
// import {  } from 'react-bootstrap';
import { Button } from '@material-ui/core';
import '../style/foodmenu.css'

export default function FoodMenu() {
    const history = useHistory()
    const toLogin = () => {
        document.querySelector('.navBar').classList.remove('navBarMenu')
        history.push('/DelilahRestoApp')
    }

    return(  
        <Button className='linkBtn' variant="outline-secondary" onClick={toLogin} >Volver a inicio</Button>
    )
}
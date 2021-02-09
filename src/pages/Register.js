import React from 'react';
import { useHistory } from 'react-router-dom';
import {Form} from 'react-bootstrap';
import {Button} from '@material-ui/core';
import '../style/userinfo.css';



export default function Register() {
    const history = useHistory()
    const toLogin = () => {
        history.push('/DelilahRestoApp')
        document.querySelector('.navBar').classList.add('navBarHome')
    }

    return (
        <div className='registerForm'>
            <Form>
                <Form.Group controlId="formBasicUser">
                    <Form.Label>Usuario</Form.Label>
                    <Form.Control type="text" placeholder="User" />
                </Form.Group>

                <Form.Group controlId="formBasicName">
                    <Form.Label>Nombre y Apellido</Form.Label>
                    <Form.Control type="text" placeholder="Name" />
                </Form.Group>

                <Form.Group controlId="formBasicMail">
                    <Form.Label>Correo electrónico</Form.Label>
                    <Form.Control type="email" placeholder="E-mail" />
                </Form.Group>

                <Form.Group controlId="formBasicTel">
                    <Form.Label>Teléfono</Form.Label>
                    <Form.Control type="tel" placeholder="Telephone number" />
                </Form.Group>
                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Dirección de envío</Form.Label>
                    <Form.Control type="text" placeholder="Dirección de envío" />
                </Form.Group>
                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Contraseña</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Button className='submitBtn' type='submit' variant="contained">CREAR CUENTA</Button>
            </Form> 
            <Button className='linkBtn' variant="outlined" onClick={toLogin}>INICAR SESIÓN</Button>
        </div>
    );
}
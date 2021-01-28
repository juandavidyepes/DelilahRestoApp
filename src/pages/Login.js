import React from 'react'
import { useHistory } from 'react-router-dom';
import { Form } from 'react-bootstrap'
import { Button } from '@material-ui/core'
import '../style/userinfo.css'


export default function Login() {
    const history = useHistory()
    const toRegister = () => {
        history.push('/register')
    }

    return (
        <div>
            <Form className='loginForm'>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Usuario o correo eletrónico</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Contraseña</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Button className='submitBtn' type='submit' variant="contained">INICIAR SESIÓN</Button>
            </Form> 
            <Button className='linkBtn' variant="outlined" onClick={toRegister}>REGISTRARSE</Button>
        </div>
    );
}
import React from 'react';
import {Button} from 'react-bootstrap'

export default function Register() {

    return (
        <div>
            <form>
                <label>Usuario<br/>
                    <input type='text' id='user' name='user' required /> 
                </label><br/>
                <label>Nombre y Apellido<br/>
                    <input type='text' id='name' name='name' required /> 
                </label><br/>
                <label>Correo electrónico<br/>
                    <input type='email' id='mail' name='mail' required /> 
                </label><br/>
                <label>Telefono<br/>
                    <input type='tel' id='tel' name='tel' required /> 
                </label><br/>
                <label>Dirección de envío<br/>
                    <input type='text' id='address' name='address' required /> 
                </label><br/>
                <label >Contraseña<br/>
                    <input type='password' id='password' name='password' minlength='8' required /> 
                </label><br/>
                <Button as="input" type="submit" value="CREAR CUENTA" />
            </form>
        </div>
    );
}
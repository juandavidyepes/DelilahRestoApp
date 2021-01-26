import React from 'react';
import {Button} from 'react-bootstrap'

export default function Login() {

    return (
        <div>
            <form>
                <label>Usuario o correo eletrónico<br/>
                    <input type='text' id='user' name='user' required /> 
                </label><br/>
                <label >Contraseña<br/>
                    <input type='password' id='password' name='password' minlength='8' required /> 
                </label><br/>
                <Button as="input" type="submit" value="INICIAR SESIÓN" />
            </form>
        </div>
    );
}
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Form } from 'react-bootstrap';
import { Button } from '@material-ui/core';
import '../style/userinfo.css';

export default function App() {
  const [user, setUser] = useState({ username: '', password: '' });

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setUser({ ...user, [name]: value });
  };

  const history = useHistory();
  const toFoodMenu = () => {
    history.push('/DelilahRestoApp/foodmenu');
    document.querySelector('.navBar').classList.remove('navBarHome');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (user.username && user.password) {
      const loginUser = { ...user };
      console.log(JSON.stringify(loginUser));

      const authorizeUser = async () => {
        const resp = await fetch('http://localhost:3001/login', {
          method: 'POST',
          body: JSON.stringify(loginUser),
          headers: {
            'Content-Type': 'application/json',
          },
        });
        const status = await resp.status;
        const token = await resp.json();

        console.log(resp.status);
        let data = [token, status];
        return data;
      };

      authorizeUser().then((response) => {
        console.log(response);
        if (response[1] !== 200) {
          alert('Usuario o contraseña incorrectos');
        } else if (response[1] === 200) {
          toFoodMenu();
        }
      });

      //   setUser({ username: '', password: '' });
    }
  };

  return (
    <div className='login'>
      <Form className='loginForm' onSubmit={handleSubmit}>
        <Form.Group controlId='formBasicEmail'>
          <Form.Label>Usuario o correo eletrónico</Form.Label>
          <Form.Control
            type='text'
            placeholder='Enter email or usename'
            name='username'
            value={user.username}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group controlId='formBasicPassword'>
          <Form.Label>Contraseña</Form.Label>
          <Form.Control
            type='password'
            placeholder='Password'
            name='password'
            value={user.password}
            onChange={handleChange}
          />
        </Form.Group>
        <Button className='submitBtn' type='submit' variant='contained'>
          INICIAR SESIÓN
        </Button>
      </Form>
    </div>
  );
}

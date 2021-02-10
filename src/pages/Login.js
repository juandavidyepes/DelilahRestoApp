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
        try {
          const resp = await fetch('http://localhost:3001/login', {
            method: 'POST',
            body: JSON.stringify(loginUser),
            headers: {
              'Content-Type': 'application/json',
            },
          });

          const data = await resp.json();

          if (!resp.ok) {
            alert('Usuario o contraseña incorrectos');
          } else {
            localStorage.setItem('token', data.token);
            toFoodMenu();
          }
          return data;
        } catch (e) {
          alert('Network error');
          return 'network error';
        }
      };

      authorizeUser();
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

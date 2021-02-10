import React from 'react';
import '../style/foodmenu.css';
import IconButton from '@material-ui/core/IconButton';
import AddCircleIcon from '@material-ui/icons/AddCircle';

function Dish(props) {
  const { img, name, price } = props;
  const addHandler = () => {
    console.log('add ' + name);
  };
  return (
    <div className='dishContainer'>
      <img src={img} alt='Food' />
      <h3>{name}</h3>
      <h6>${price}</h6>
      <IconButton className='addBtn' aria-label='delete' onClick={addHandler}>
        <AddCircleIcon fontSize='large' style={{ color: '#fc885c' }} />
      </IconButton>
    </div>
  );
}

export default Dish;

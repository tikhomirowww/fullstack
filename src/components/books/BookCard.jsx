import React, { useState, useEffect } from 'react';
import { useBooks } from '../../contexts/BookContextProvider';
import { useNavigate } from 'react-router-dom';

import BookmarkRoundedIcon from '@mui/icons-material/BookmarkRounded';
import BookmarkBorderRoundedIcon from '@mui/icons-material/BookmarkBorderRounded';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import { useFav } from '../../contexts/FavContextProvider';


import Fab from '@mui/material/Fab';
import EditIcon from '@mui/icons-material/Edit';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';


const BookCard = ({ item }) => {
  const { addBookToFav } = useFav();
  const { deleteBook } = useBooks();

  const navigate = useNavigate()

  const favClick = (item) => {
    addBookToFav(item);
  }


  return (
  <div style={{ display: 'flex', background: '#09387f', borderRadius: '20px', margin: '1%', padding: "1%", color: '#f0c33b', width: '95vw', fontSize: '16px' }}>
      <div className='leftBlock'>
        <img src={item.image} alt="error;)" style={{width: '170px', height: '150px', borderRadius: '10px'}} />
      </div>
      <div className='rightBlock' style={{width: '100%', marginLeft: '2%'}}>
          <div style={{display: 'flex', justifyContent: 'space-between'}}>
          <h3>{item.title}</h3>
          <div onClick={() => favClick(item)}>
          <BookmarkRoundedIcon />
          </div>
          </div>
          <h4>Author: {item.owner}</h4>
          {/* <h5>{item.rating}</h5> */}
          <p>Description: <br/>{item.description}</p>
          <div style={{display: 'flex', gap: '2%', padding: '7px'}} className='buttons'>
          <Fab onClick={() => navigate(`/edit/${item.id}`)} color="warning" aria-label="edit"><EditIcon /></Fab>
          <Button onClick={() => deleteBook(item.id)} style={{color: '#f0c33b'}} variant="outlined" startIcon={<DeleteIcon />}>Delete</Button>
          <Button style={{color: '#09387f', background: '#f0c33b'}} variant="contained"><ShoppingBasketIcon /></Button>
          <Fab style={{color: '#f0c33b'}} disabled aria-label="like"><FavoriteIcon /></Fab>
          <button onClick={() => navigate(`/details/${item.id}`)}>Details</button>
          </div>
      </div>
  </div>
  )
}

export default BookCard
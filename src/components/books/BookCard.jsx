import React, { useState, useEffect } from 'react';
import { useBooks } from '../../contexts/BookContextProvider';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContextProvider';

import BookmarkRoundedIcon from '@mui/icons-material/BookmarkRounded';
import BookmarkBorderRoundedIcon from '@mui/icons-material/BookmarkBorderRounded';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import { useFav } from '../../contexts/FavContextProvider';
import StarIcon from '@mui/icons-material/Star';


import EditIcon from '@mui/icons-material/Edit';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Tooltip from '@mui/material/Tooltip';


const BookCard = ({ item }) => {
  const { addBookToFav } = useFav();
  const { deleteBook } = useBooks();
  const { currentUser } = useAuth();

  const navigate = useNavigate()

  const favClick = (item) => {
    addBookToFav(item);
  }

  let currentEmail = localStorage.getItem("email");
  // console.log(currentEmail);

console.log(item.owner, 'owner');
console.log(currentUser);

  return (
  <div style={{ display: 'flex', background: '#09387f', borderRadius: '20px', margin: '1%', padding: "1%", color: '#f0c33b', width: '95vw', fontSize: '16px' }}>
      <div className='leftBlock'>
      <Tooltip title="Details" placement='top'>
        <img onClick={() => navigate(`/details/${item.id}`)} src={item.image} alt="error;)" style={{width: '170px', height: '150px', borderRadius: '10px'}} />
      </ Tooltip >
      </div>
      <div className='rightBlock' style={{width: '100%', marginLeft: '2%'}}>
          <div style={{display: 'flex', justifyContent: 'space-between'}}>
          <Tooltip title="Details" placement='top'>
          <h3 onClick={() => navigate(`/details/${item.id}`)}>{item.title}</h3>
          </Tooltip>
          <div onClick={() => favClick(item)}>
          <BookmarkRoundedIcon />
          </div>
          </div>
          <h4>Author: {item.author_name}</h4>
          {/* <h5>{item.rating}</h5> */}
          <div style={{display: 'flex', gap: '1%'}}>
          <h3>Rating:</h3>
          <div>
          {item.rating !== null ? (<div>{item.rating}</div>) : (0) }
          </div>
          <StarIcon />
          
          </div>
          <div style={{display: 'flex', gap: '2%', padding: '7px', zIndex: '1', alignItems: 'baseline'}} className='buttons'>
            {currentEmail === item.owner ? (
            <>
            <EditIcon onClick={() => navigate(`/edit/${item.id}`)} />
          <Button onClick={() => deleteBook(item.id)} style={{color: '#f0c33b'}} variant="text" startIcon={<DeleteIcon />}>Delete</Button>
          </>) : (null)}
          <ShoppingCartIcon />
          <FavoriteIcon />
          </div>
      </div>
  </div>
  )
}

export default BookCard
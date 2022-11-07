import React, { useState, useEffect } from 'react';
import { useBooks } from '../../contexts/BookContextProvider';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
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
  const [mark, setMark] = useState(false);




  const { addBookToFav } = useFav();

  const favClick = (item) => {
    setMark(!mark);
    addBookToFav(item);
  }
  



  function marker (book) {
    let fav = JSON.parse(localStorage.getItem("fav"));



    console.log(fav, 'fav icon');
    let bookToFind = fav.books.map((elem) => elem.item.id === item);
    


  //  let checker = fav.books.map(elem => console.log(elem.item))
   
  //   console.log(fav);
    // console.log(item);

  }
  marker()

  


  return (
  <div style={{ display: 'flex', background: '#09387f', borderRadius: '20px', margin: '1%', padding: "1%", color: '#f0c33b', width: '95vw', fontSize: '16px' }}>
      <div style={{}} className='leftBlock'>
        <img src={item.image} alt="error;)" style={{width: '170px', height: '150px', borderRadius: '10px'}} />
      </div>
      <div className='rightBlock' style={{width: '100%', marginLeft: '2%'}}>
          <div style={{display: 'flex', justifyContent: 'space-between'}}>
          <h3>{item.title}</h3>
          <div onClick={() => favClick(item)}>
          {mark ? <BookmarkRoundedIcon /> : <BookmarkBorderRoundedIcon />}
          </div>
          </div>
          <h4>Author: {item.owner}</h4>
          {/* <h5>{item.rating}</h5> */}
          <p>Description: <br/>{item.description}</p>
          <div style={{display: 'flex', gap: '2%', padding: '7px'}} className='buttons'>
          <Fab color="warning" aria-label="edit"><EditIcon /></Fab>
          <Button style={{color: '#f0c33b'}} variant="outlined" startIcon={<DeleteIcon />}>Delete</Button>
          <Button style={{color: '#09387f', background: '#f0c33b'}} variant="contained"><ShoppingBasketIcon /></Button>
          <Fab style={{color: '#f0c33b'}} disabled aria-label="like"><FavoriteIcon /></Fab>
          </div>
      </div>
  </div>
  )
}

export default BookCard
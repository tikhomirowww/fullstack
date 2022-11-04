import React from 'react';
import { useBooks } from '../../contexts/BookContextProvider';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import BookmarkRoundedIcon from '@mui/icons-material/BookmarkRounded';

const BookCard = ({ item }) => {
  return (
  <div style={{heigth: ' 30%', display: 'flex', background: '#09387f', borderRadius: '20px', margin: '2%', padding: "1%", color: '#f0c33b', width: '95vw' }}>
      <div style={{}} className='leftBlock'>
        <img src={item.image} alt="error;)" style={{width: '100px', height: '100px', borderRadius: '10px'}} />
      </div>
      <div className='rightBlock' style={{width: '100%', marginLeft: '2%'}}>
          <div style={{display: 'flex', justifyContent: 'space-between'}}>
          <h3>{item.title}</h3>
          <BookmarkRoundedIcon />
          </div>
          <h4>Author: {item.owner}</h4>
          {/* <h5>{item.rating}</h5> */}
          <p>Description: <br/>{item.description}</p>
          <div style={{display: 'flex', gap: '2%'}} className='buttons'>
            <button>Edit</button>
            <button>Delete</button>
            <button>Add to cart</button>
          </div>
      </div>
  </div>
  )
}

export default BookCard
import React from 'react';
import { useBooks } from '../../contexts/BookContextProvider';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

const BookCard = ({ item }) => {
  return (
    <div style={{display: 'flex', width: '100%', justifyContent: 'flex-start'}}>
    <Card sx={{ width: '100%', display: 'flex' }}>
      <CardActionArea sx={{ display: 'flex' }}>
        <CardMedia
          sx={{width: '10%', justifyContent: 'flex-start'}}
          component="img"
          height="100"
          width="100"
          image={item.image}
          alt="book image"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          {item.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {item.price}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </div>
  )
}

export default BookCard
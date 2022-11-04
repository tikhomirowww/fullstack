import React from 'react';
import { useBooks } from '../../contexts/BookContextProvider';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

const BookCard = ({ item }) => {
  return (
    <div style={{heigth: ' 30%', display: 'flex', background: '#09387f', borderRadius: '20px', margin: '2%', padding: "2%", color: '#f0c33b' }}>
    <div style={{}} className='leftBlock'>
      <img src={item.image} alt="error;)" style={{width: '100px', height: '100px'}} />
    </div>
    <div className='rightBlock'>
      <h3>{item.title}</h3>
      <h4>{item.owner}</h4>
      {/* <h5>{item.rating}</h5> */}
      <p>{item.description}</p>
    </div>
    </div>
    // <div style={{display: 'flex', width: '100%', justifyContent: 'flex-start'}}>
    // <Card sx={{ width: '100%', display: 'flex' }}>
    //   <CardActionArea sx={{ display: 'flex' }}>
    //     <CardMedia
    //       sx={{width: '10%', justifyContent: 'flex-start'}}
    //       component="img"
    //       height="100"
    //       width="100"
    //       image={item.image}
    //       alt="book image"
    //     />
    //     <CardContent>
    //       <Typography gutterBottom variant="h5" component="div">
    //       {item.title}
    //       </Typography>
    //       <Typography variant="body2" color="text.secondary">
    //         {item.price}
    //       </Typography>
    //       <Typography gutterBottom variant="h5" component="div">
    //       {item.description}
    //       </Typography>
    //     </CardContent>
    //   </CardActionArea>
    // </Card>
    // </div>
  )
}

export default BookCard
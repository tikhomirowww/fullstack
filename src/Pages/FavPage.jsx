import React, { useEffect } from 'react';
import { useFav } from '../contexts/FavContextProvider';
import { useNavigate } from 'react-router-dom';
import { useBooks } from '../contexts/BookContextProvider';

// mui imports 
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

const FavPage = () => {
  const { getFav, fav, deleteFromFav } = useFav();
  const navigate = useNavigate();

  useEffect(() => {
    getFav()
    console.log(fav);
  }, []);

  return (
    <>
    <div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around', alignItems: 'center', height: '500px' }}>
      {fav?.books.map((elem) => (
      <Card key={elem.item.id} sx={{ maxWidth: 240, minWidth: 200, color: '#f0c33b', background: 'rgb(11,	83,	148, .7)', borderRadius: '20px', paddingTop: '2%', padding: '1%' }} >
        <>
        <CardMedia
        component="img"
        style={{width: '70%', height: '150px', margin: 'auto', borderRadius: '10px'}}
        image={elem.item.image}
        alt="book picture" />
      <CardContent>
        <Typography  gutterBottom variant="h5" component="div">
          {elem.item.title}
        </Typography>
        <div  style={{fontSize: '12px', color: '#f0c33b'}} variant="body2">
          {elem.item.description}
        </div>
      </CardContent>
      <div style={{display: 'flex', justifyContent: 'space-between'}}>
      <Button onClick={() => navigate(`/details/${elem.item.id}`)} variant="contained">Details</Button>
      <Button onClick={() => deleteFromFav(elem.item)} color='error' variant="contained">Delete</Button>
      </div>
      </>
    </Card>
        ))}
        </div>
    </>
  )
}

export default FavPage
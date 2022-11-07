import React, { useEffect } from 'react';
import { useFav } from '../contexts/FavContextProvider';

// mui imports 
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

const FavPage = () => {
  const { getFav, fav } = useFav();

  useEffect(() => {
    getFav()
    console.log(fav);
  }, []);


  return (
    <>
    <div style={{display: 'flex', flexWrap: 'wrap', }}>
      {fav?.books.map((elem) => (
      <Card key={elem.item.id} sx={{ maxWidth: 240, minWidth: 200, minHeight: 450, maxHeight: 450, color: 'orange', background: 'black', border: '3px solid orange', borderRadius: '20px', paddingTop: '3%' }} >
        <>
        <CardMedia
        component="img"
        style={{width: '50%', height: '60%', margin: 'auto', borderRadius: '10px'}}
        image={elem.item.image}
        alt="book picture" />
      <CardContent>
        <Typography  gutterBottom variant="h5" component="div">
          {elem.item.title}
        </Typography>
        <div  style={{fontSize: '12px', color: 'orange'}} variant="body2" color="text.secondary">
          {elem.item.description}
        </div>
      </CardContent>
      </>
    </Card>
        ))}
        </div>
    </>
  )
}

export default FavPage
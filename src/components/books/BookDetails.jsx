import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useBooks } from '../../contexts/BookContextProvider';
import { useNavigate } from 'react-router-dom';
import Rating from '@mui/material/Rating';
import Box from '@mui/material/Box';
import StarIcon from '@mui/icons-material/Star';

// mui 
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import CircularProgress from '@mui/material/CircularProgress';
import Button from '@mui/material/Button';



const BookDetails = () => {
  // rating 
  const labels = {
    0.5: 'Useless',
    1: 'Useless+',
    1.5: 'Poor',
    2: 'Poor+',
    2.5: 'Ok',
    3: 'Ok+',
    3.5: 'Good',
    4: 'Good+',
    4.5: 'Excellent',
    5: 'Excellent+',
  };
  
  function getLabelText(value) {
    return `${value} Star${value !== 1 ? 's' : ''}, ${labels[value]}`;
  }
  
    const [value, setValue] = React.useState(2);
    const [hover, setHover] = React.useState(-1);

  const {id} = useParams();
  const { getBookDetails, bookDetails } = useBooks();
  const navigate = useNavigate()

  useEffect(() => {
    getBookDetails(id)
  }, [])

    useEffect(() => {
      console.log(bookDetails);
    }, [])

  return (
    <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '500px'}}>
    {bookDetails ? (
      
      <main style={{display: 'flex', background: 'rgb(11,	83,	148, .7)', width: '70%', height: '80%', padding: '2%', borderRadius: '20px', color: '#f0c33b'}}>
        <div className='leftBlock' >
          <img style={{width: "200px"}} src={bookDetails.image} alt="" />
        </div>
        <div className='rightBlock' style={{display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%'}}>
          <h1>{bookDetails.title}</h1>
          <div className='desc' style={{display: 'flex', flexDirection: 'column', alignItems: 'flex-start', width: '90%', marginBottom: '6%'}}>
          <div style={{display: 'flex', gap: '2%', width: '50%'}}>
            <h3>Author:</h3>
            <div>{bookDetails.author_name.toUpperCase()}</div>
          </div> 
            <div style={{display: 'flex', width: '50%'}}>
              <div style={{display: 'flex', margin: '2% 0'}} >
                <h3 style={{marginRight: '2%'}}>Rating:</h3>
                {bookDetails.rating !== null ? (<div>{bookDetails.rating}</div>) : (0) }
              </div>
                <StarIcon sx={{marginLeft: '2%'}} />
            </div>
            <h3>About book:</h3>
            <div>{bookDetails.description}</div>
          </div>
          <div className='button&rating' style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '25%'}}>
          <Button sx={{background: '#f0c33b'}} variant="contained"><a style={{textDecoration: 'none'}} href={bookDetails.text}>Read online</a></Button>
          <Box fontSize="large"
      sx={{
        width: 200,
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <Rating
        size='large'
        name="hover-feedback"
        value={value}
        precision={0.5}
        getLabelText={getLabelText}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        onChangeActive={(event, newHover) => {
          setHover(newHover);
        }}
        emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
      />
      {value !== null && (
        <Box sx={{ ml: 2 }}>{labels[hover !== -1 ? hover : value]}</Box>
      )}
    </Box>
    </div>
        </div>
      </main>
    ) : (<h2><CircularProgress /></h2>)}
    </div>
  )
}

export default BookDetails
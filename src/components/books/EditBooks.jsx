import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { useBooks } from '../../contexts/BookContextProvider';
import { useParams } from 'react-router-dom';


const EditBooks = () => {
  const theme = createTheme({
    palette: {
      primary: {
        main: '#000a12'
      },
    },
  });


  const { getBookDetails, bookDetails, saveEditedBook } = useBooks();

  const [book, setBook] = useState(bookDetails);
  const { id } = useParams()

// console.log(book.image);

  const navigate = useNavigate();

 useEffect(() => {
  getBookDetails(id);
  console.log(book);
 }, []);

 useEffect(() => {
  setBook(bookDetails)
 }, [bookDetails, ])

 const handleInp = e => {
  if(e.target.name === 'price'){
    let obj = {
      ...book,
      [e.target.name]: Number(e.target.value)
    }
      setBook(obj)
  } else if (e.target.name === 'image'){
    let obj = {
      ...book,
      [e.target.name]: e.target.files[0],
    }
      setBook(obj);
  } else {
  let obj = {
      ...book,
      [e.target.name]: e.target.value
  };
  setBook(obj)
  }
}

const handleSave = () => {
  let newBook = new FormData();
  newBook.append("title", book.title);
  newBook.append("author_name", book.author);
  newBook.append("description", book.description);
  newBook.append("price", book.price);
  newBook.append("category", book.category.toLowerCase());
  newBook.append("text", book.text);
  newBook.append("image", book.image);
console.log(newBook);
  return newBook;
  // saveEditedBook(newBook, id);
  // 
}


  return (
    <>
    {book ? (  <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '80vh'}}>
   <div style={{background: '#78909c', width: '20%', display: 'flex', flexDirection: 'column', alignItems: 'center', borderRadius: '20px', opacity: '95%', padding: '1.5%'}}>
     <h2>Edit your book!</h2>
     {/* {error ? <h3>{error}</h3> : null} */}
     <Box
     component="form"
     sx={{
       color: 'white',
       '& > :not(style)': { m: 1, width: '25ch' },
       display: 'flex',
       justifyContent: 'center',
       flexDirection: 'column',
       alignItems: 'center'
     }}
     noValidate
     autoComplete="off"
   >
    <ThemeProvider theme={theme}>
    <TextField name='title'  onChange={handleInp} value={book.title} label="Title" variant="standard" />
    <TextField name='author_name'  onChange={handleInp} value={book.author_name} label="Author" variant="standard" />
    <TextField name='category' onChange={handleInp} value={book.category} label="Category" variant="standard" />
    <TextField name='description' onChange={handleInp} value={book.description} label="Description" variant="standard" />
    <TextField name='price' onChange={handleInp} value={book.price} label="Price" variant="standard" />
    <TextField name='text' type="url" onChange={handleInp} value={book.text} label="Text" variant="standard" />
    <Button  sx={{background: '#09387f', borderRadius: '20px'}} value={book.image} onChange={handleInp} variant="contained" component="label">
     Upload image
     <input name='image' hidden accept="image/*" multiple type="file" />
   </Button>
    </ThemeProvider>
   <Button onClick={() => {
    saveEditedBook(handleSave(), id);
    navigate('/books');
   }} sx={{background: '#09387f', borderRadius: '20px'}} variant="contained">Edit</Button>
   </Box>
   </div>
 </div>) : (<h2 style={{color: 'red', background: 'black'}}>error</h2>)}

 </>
  )
}

export default EditBooks
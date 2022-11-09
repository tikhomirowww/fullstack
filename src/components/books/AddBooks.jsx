import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { useBooks } from '../../contexts/BookContextProvider';

const AddBooks = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('')
  const [category, setCategory] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [text, setText] = useState('');
  const [image, setImage] = useState('');

  const navigate = useNavigate();
  const { createBook } = useBooks();

  function handleSave(){
    let newBook = new FormData();
    newBook.append("title", title);
    newBook.append("author_name", author);
    newBook.append("description", description);
    newBook.append("price", price);
    newBook.append("category", category.toLowerCase());
    newBook.append("text", text);
    newBook.append("image", image)
    createBook(newBook, navigate);
  }

  const theme = createTheme({
    palette: {
      primary: {
        main: '#000a12'
      },
    },
  });

  return (
    <>
       <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '80vh'}}>
      <div style={{background: '#78909c', width: '20%', display: 'flex', flexDirection: 'column', alignItems: 'center', borderRadius: '20px', opacity: '95%', padding: '1.5%'}}>
        <h2>Add your own book!</h2>
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
       <TextField  onChange={(e) => setTitle(e.target.value)} value={title} label="Title" variant="standard" />
       <TextField  onChange={(e) => setAuthor(e.target.value)} value={author} label="Author" variant="standard" />
       <TextField onChange={(e) => setCategory(e.target.value)} value={category} label="Category" variant="standard" />
       <TextField onChange={(e) => setDescription(e.target.value)} value={description} label="Description" variant="standard" />
       <TextField onChange={(e) => setPrice(e.target.value)} value={price} label="Price" variant="standard" />
       <TextField type="url" onChange={(e) => setText(e.target.value)} value={text} label="Text" variant="standard" />
       <Button sx={{background: '#09387f', borderRadius: '20px'}} onChange={e => setImage(e.target.files[0])} variant="contained" component="label">
        Upload image
        <input hidden accept="image/*" multiple type="file" />
      </Button>
       </ThemeProvider>
      <Button onClick={handleSave} sx={{background: '#09387f', borderRadius: '20px'}} variant="contained">Add</Button>
      </Box>
      </div>
    </div>
    </>
  )
}

export default AddBooks


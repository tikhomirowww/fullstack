import React, { useEffect, useState } from 'react';
import { useBooks } from '../../contexts/BookContextProvider';
import { useSearchParams } from 'react-router-dom';
import BookCard from './BookCard';

const BookList = () => {
  const { getBooks, books, pages } = useBooks();
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    getBooks()
  }, [])

  // useEffect(() => {
  //   getBooks()
  // }, [searchParams]);

  console.log(books);

  return (
    <div style={{display: 'flex', flexDirection: 'column', alignItems: 'flex-start'}}>
      <h2>book list</h2>
      <div style={{width: '100%'}} >
        {books?.map((item) =>( 
          <BookCard key={item.title} item={item}></BookCard>       
        ))} 
      </div>
    </div>
  )
}

export default BookList
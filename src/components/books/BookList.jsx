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
    <div style={{display: 'flex', height: '30%', flexDirection: 'column', alignItems: 'flex-start'}}>
      <h2>book list</h2>
      <div style={{width: '100%', height: '30%',}} >
        {books?.map((item) =>( 
          <BookCard key={item.id} item={item}></BookCard>       
        ))} 
      </div>
    </div>
  )
}

export default BookList
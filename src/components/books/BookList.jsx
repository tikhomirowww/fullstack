import React, { useEffect, useState } from 'react';
import { useBooks } from '../../contexts/BookContextProvider';
import { useSearchParams } from 'react-router-dom';
import BookCard from './BookCard';
import { Pagination } from '@mui/material';


const BookList = () => {
  const { getBooks, books } = useBooks();
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    getBooks()
  }, []);

  // pagination 
 const [page, setPage] = useState(1);

 const itemsOnPage = 2;

 const count = Math.ceil(books.length / itemsOnPage);

 const handlePage = (e, p) => {
   setPage(p);
 };

 function currentData(){
   const begin = (page - 1) * itemsOnPage;
   const end = begin + itemsOnPage;
   return books.slice(begin, end);
 }

  console.log(books);

  return (
    <div style={{display: 'flex', height: '30%', flexDirection: 'column', alignItems: 'flex-start'}}>
      <div style={{width: '100%', height: '30%',}} >
        {books ? currentData().map(item =>( 
          <BookCard key={item.id} item={item}></BookCard>       
        )) : (null)} 
      </div>
      <Pagination count={count} page={page} onChange={handlePage} />
    </div>
  )
}

export default BookList
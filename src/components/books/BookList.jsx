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

 const itemsOnPage = 3;

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
      <div style={{width: '100%', display: 'flex', justifyContent: 'center'}}>
      <div style={{display: 'flex', justifyContent: 'center', width: '23%', background: 'rgb(11,	83,	148, .7)', borderRadius: '20px'}}>
      <Pagination count={count} page={page} onChange={handlePage} />
      </div>
      </div>
    </div>
  )
}

export default BookList
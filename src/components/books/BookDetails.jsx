import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useBooks } from '../../contexts/BookContextProvider'

const BookDetails = () => {
  const {id} = useParams();
  const { getBookDetails, bookDetails } = useBooks();

  useEffect(() => {
    getBookDetails(id)
  }, [])

    
    useEffect(() => {
      console.log(bookDetails);
    }, [])

  return (
    <div>BookDetails</div>
  )
}

export default BookDetails
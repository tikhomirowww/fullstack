import React, { useReducer, useContext } from 'react';
import axios from 'axios';

export const booksContext = React.createContext();
export const useBooks = () => useContext(booksContext);

const INIT_STATE = {
    books: [],
    pages: 0,
    categories:[],
    bookDetails: null
};

function reducer(state=INIT_STATE, action){
    switch(action.type){
      case 'GET_PRODUCTS':
        return{
          ...state,
          books: action.payload.results,
          pages: Math.ceil(action.payload.count / 5)
        };
      case 'GET_CATEGORIES':
        return{
          ...state,
          categories: action.payload
        };
      case 'GET_BOOK_DETAILS':
        return {
          ...state, bookDetails: action.payload
        };
      default:
        return state;
    };
  };

  const API = 'http://34.73.108.209/api/v1/'


const BookContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, INIT_STATE);

    async function getBooks(){
        try {
          const tokens = JSON.parse(localStorage.getItem('tokens'));
          console.log(tokens);
          const Authorization = `JWT ${tokens.access}`;
          const config = {
            headers: {
              Authorization
            }
          }
    
          const res = await axios(`${API}books/${window.location.search}`, config);
    
          dispatch({
            type: 'GET_PRODUCTS',
            payload: res.data
          })
        } catch (err) {
          console.log(err);
        };
      };

//create
  async function createBook(newBook, navigate){
    try { 
      const tokens = JSON.parse(localStorage.getItem('tokens'));
      const Authorization = `Bearer ${tokens.access}`;
      const config = {
        headers: {
          Authorization
        }
      }

      const res = await axios.post(`${API}books/`, newBook, config);
      console.log(res);
      navigate('/books');
      getBooks();
    } catch(err) {
      console.log(err);
    };
  };

  //details/update

  async function getBookDetails(id){
    try{
      const res = await axios(`${API}books/${id}/`)
      dispatch ({
        type: 'GET_BOOK_DETAILS',
        payload: res.data
      })
    }catch (err){
      console.log(err);
    }
  }

  //delete
  
  async function deleteBook(id){
    try{
      const tokens = JSON.parse(localStorage.getItem('tokens'));
      const Authorization = `JWT ${tokens.access}`;
      const config = {
        headers: {
          Authorization
        }
      }
      await axios.delete(`${API}books/${id}/`, config);
      getBooks();
    } catch(err){
      console.log(err);
    };
  };
  

  const values = {
    books: state.books,
    categories: state.categories,
    pages: state.pages,
    bookDetails: state.bookDetails,

    getBooks,
    createBook,
    deleteBook,
    getBookDetails
  }

  return (
   <booksContext.Provider value={values}>
    { children }
   </booksContext.Provider>
  )
}

export default BookContextProvider
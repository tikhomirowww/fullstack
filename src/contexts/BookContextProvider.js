import React, { useReducer, useContext } from 'react';
import axios from 'axios';

export const booksContext = React.createContext();
export const useBooks = () => useContext(booksContext);

const INIT_STATE = {
    books: [],
    pages: 0,
    categories:[],
    oneBook: null
};

function reducer(state=INIT_STATE, action){
    switch(action.type){
      case 'GET_BOOKS':
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
      case 'GET_ONE_BOOK':
        return {
          ...state, oneBook: action.payload
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
          const Authorization = `JWT ${tokens.access}`;
          const config = {
            headers: {
              Authorization
            }
          }
    
          const res = await axios(`${API}books/${window.location.search}`, config);
    
          dispatch({
            type: 'GET_BOOKS',
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

  const values = {
    books: state.books,
    categories: state.categories,
    pages: state.pages,
    oneBook: state.oneBook,

    getBooks,
    createBook
  }

  return (
   <booksContext.Provider value={values}>
    { children }
   </booksContext.Provider>
  )
}

export default BookContextProvider
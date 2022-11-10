import React, { useContext, useState } from 'react';

const favContext = React.createContext();
export const useFav = () => useContext(favContext)

const FavContextProvider = ({ children }) => {
  const [fav, setFav] = useState(JSON.parse(localStorage.getItem("fav")));

  const getFav = () => {
      let fav = JSON.parse(localStorage.getItem("fav"));

      if(!fav){
      localStorage.setItem("fav", JSON.stringify({books: []}));
      }
      console.log(fav);
      setFav(fav);
  }


  const addBookToFav = (book) => {
    let fav = JSON.parse(localStorage.getItem("fav"));

    if(!fav){
        fav = {
            books: []
        }
    };

    let newBook = {
        item: book
    }

    let bookToFind = fav.books.filter(
        (elem) => elem.item.id === book.id
    );

    console.log(bookToFind);

    if(bookToFind.length === 0){
        fav.books.push(newBook);
    }else{
      console.log(fav.books);
        fav.books = fav.books.filter(
            (elem) => elem.item.id !== book.id
        );
    };


    localStorage.setItem("fav", JSON.stringify(fav));

    console.log('clicked', fav);

    setFav(fav);
  }

  const deleteFromFav = (book) => {
    let fav = JSON.parse(localStorage.getItem("fav"));

    if(!fav){
        fav = {
            books: []
        }
    };

    fav.books = fav.books.filter(
      (elem) => elem.item.id !== book.id
    );

    setFav(fav)
  }

  const values = {
    fav,

    getFav,
    addBookToFav,
    deleteFromFav
  }

  return (
    <favContext.Provider value={values}>
         { children }
    </favContext.Provider>
  )
}

export default FavContextProvider
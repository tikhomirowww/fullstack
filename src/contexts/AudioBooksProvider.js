import React from 'react'
import axios from 'axios';

export const audioBooksContext = React.createContext();
export const useAudio = () => useContext(audioBooksContext);

const INIT_STATE = {
    books: [],
    pages: 0,
    categories:[],
    oneBook: null
};

const AudioBooksProvider = () => {
  return (
    <div>AudioBooksProvider</div>
  )
}

export default AudioBooksProvider
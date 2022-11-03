import React, {useEffect} from 'react'
import MainRoutes from './MainRoutes'
import AuthContextProvider from './contexts/AuthContextProvider'
// import BookContextProvider from './contexts/BookContextProvider'
import { BrowserRouter } from 'react-router-dom'
import BookContextProvider from './contexts/BookContextProvider'
// import FavContextProvider from './contexts/FavContextProvider'


const App = () => {
  return (
    <>
      <BookContextProvider>
        <AuthContextProvider>
          <BrowserRouter>
            <MainRoutes/>
          </BrowserRouter>
        </AuthContextProvider>
      </BookContextProvider>
    </>
  )
}

export default App
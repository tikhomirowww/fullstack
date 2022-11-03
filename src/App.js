import React, {useEffect} from 'react'
import MainRoutes from './MainRoutes'
import AuthContextProvider from './contexts/AuthContextProvider'
import BookContextProvider from './contexts/BookContextProvider'
import { BrowserRouter } from 'react-router-dom'
import FavContextProvider from './contexts/FavContextProvider'


const App = () => {
  return (
    <>
    <BrowserRouter>
    {/* <AuthContextProvider> */}
    <MainRoutes/>
    {/* </AuthContextProvider> */}
    </BrowserRouter>
    </>
  )
}

export default App
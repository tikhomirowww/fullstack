import React from 'react'
import { Routes, Route} from 'react-router-dom'
import RegisterPage from './Pages/RegisterPage'
import Navbar from './components/Navbar/Navbar'
import LoginPage from './Pages/LoginPage'
import EditedBook from './Pages/EditedBook'
import FavPage from './Pages/FavPage'
import HomePage from './Pages/HomePage'
import BookDetailsPage from './Pages/BookDetailsPage'
import BooksPage from './Pages/BooksPage'
import NotFoundPage from './Pages/NotFoundPage'
import Background from './components/Background/Background'
import AddBookPage from './Pages/AddBookPage'

const MainRoutes = () => {
  return (
    <>
    <Navbar/>
    <Background style={{position: 'absolute'}} />
  <Routes>
    <Route path='/register' element={<RegisterPage/>}/>
    <Route path='/login' element={<LoginPage/>}/>
    <Route path='*' element={<NotFoundPage/>}/>
    <Route path='/add' element={<AddBookPage/>}/>
    <Route path='/edit/:id' element={<EditedBook/>}/>
    <Route path='/fav' element={<FavPage/>}/>
    <Route path='/books' element={<BooksPage/>}/>
    <Route path='/details/:id' element={<BookDetailsPage/>}/>
    <Route path='/' element={<HomePage/>}/>
    <Route path='/cart' element={<HomePage/>}/>
  </Routes>
  </>
  )
}

export default MainRoutes
import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export const authContext = React.createContext();
export const useAuth = () => useContext(authContext);

const API = 'http://34.73.108.209/'

const AuthContextProvider = ({ children}) => {
    const [currentUser, setCurrentUser] = useState(false);
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();

  //register
  async function handleRegister(formData){
    setLoading(true);

    try{
        const res = await axios.post(`${API}/accounts/register/`, formData);
        console.log(res);
        navigate('/login');
    } catch (err){
        console.log(err);
        console.log(err.response.data);
        setError(Object.values(err.response.data).flat(2));
    } finally {
        setLoading(false);
    };
  };

 const values ={
    currentUser,
    error,
    loading,

    setError,
    handleRegister,
  }

  return (
    <AuthContextProvider value={values}>
      { children }
    </AuthContextProvider>
  )
}

export default AuthContextProvider
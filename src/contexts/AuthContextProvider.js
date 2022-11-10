import React, { useState, useContext } from 'react';
import axios from 'axios';

export const authContext = React.createContext();
export const useAuth = () => useContext(authContext);


const API = 'http://34.73.108.209/api/v1/'

const AuthContextProvider = ({ children}) => {
    const [currentUser, setCurrentUser] = useState(false);
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);

    // const navigate = useNavigate();

  //register
  async function handleRegister(formData, navigate){
    setLoading(true);

    try{
        const res = await axios.post(`${API}accounts/register/`, formData);
        console.log(res);
        navigate('/login');
    } catch (err){
        // console.log(err);
        // console.log(err.response.data);
        setError(Object.values(err.response.data).flat(2));
    } finally {
        setLoading(false);
    };
  };


   //login 
   async function handleLogin(formData, email, navigate){
    console.log(email);
    setLoading(true)
    try{
        const res = await axios.post(`${API}accounts/login/`, formData);
        localStorage.setItem("tokens", JSON.stringify(res.data));
        localStorage.setItem("email", email);
        setCurrentUser(email);
        navigate('/');
        console.log(res);
    } catch (err) {
        console.log(err);
        setError([err.response.data.detail]);
    } finally {
        setLoading(false);
    }
  };

  // const currentEmail = (email) => {
  //   console.log(email);
  // }
  // currentEmail();
  // console.log(currentUser);

  // logout 
  function handleLogout(navigate){
    localStorage.removeItem("tokens");
    localStorage.removeItem("email");
    setCurrentUser(false);
    navigate('/');
}

 const values ={
    currentUser,
    error,
    loading,

    setError,
    handleRegister,
    handleLogin,
    handleLogout,
    // currentEmail
  }

  return (
    <authContext.Provider value={values}>
      { children }
    </authContext.Provider>
  )
}

export default AuthContextProvider
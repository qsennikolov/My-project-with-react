import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'

import * as authService from '../components/services/authService'
import AuthContext from '../components/contexts/authContext'

import Navbar from '../components/navbar/Navbar.jsx'
import Navi from '../components/navigation/Navi.jsx'
import Home from "../components/home/Home.jsx"
import Collections from '../components/main/Collections.jsx'
import Search from '../components/search/Search.jsx'
// import Appdownload from '../components/appdownload.jsx/AppDownload.jsx'
import Blog from '../components/blog/Blog.jsx'
import Contact from '../components/contact/Contact.jsx'
import Footer from '../components/footer/Footer.jsx'
import Login from '../components/logIn/Login.jsx'
import Register from '../components/register/Register.jsx'


function App() {
	const [auth, setAuth] = useState({});

	const loginSubmitHandler = async (values) => {
        try {
         const response = await authService.login(values.email, values.password);
            if(!response.ok){
            throw new Error; 
        }
        } catch (error) {
            alert("Email or password don't match")
            }
    }
	

    // const registerSubmitHandler = async (values) => {
    //     // console.log(values);
    // }

    // const values = {
    //     loginSubmitHandler,
    //     registerSubmitHandler,
    //     username: auth.username,
    //     email: auth.email,
    // };

	return (
    <AuthContext.Provider value={{loginSubmitHandler}}>
    <Navbar />
    <Navi />
   
        <Routes>
            <Route path='/home' element= { <Home />} />
            <Route path='/collections' element={<Collections />} />
            <Route path='/blog' element={ <Blog />} />
            <Route path='/shop' element= { <Search />} />
            {/* <Route path='/appdownload' element= {<Appdownload />} /> */}
            <Route path='/contact' element={ <Contact />} />
            <Route path='/login' element= { <Login /> } />
            <Route path='register' element= { < Register />} />

        </Routes>
    <Footer />

  </AuthContext.Provider>
  )
}

export default App

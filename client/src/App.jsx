import { useState } from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom'

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
import Logout from '../components/logout/Logout.jsx'


function App() {
    const navigate = useNavigate()
	const [auth, setAuth] = useState({});

	const loginSubmitHandler = async (values) => {
        const result = await authService.login(values.email, values.password);

        setAuth(result);
        localStorage.setItem('accessToken', result.accessToken);
        navigate("/home");
    }   
	
    const registerSubmitHandler = async (values) => {
        const result = await authService.register(values.email, values.password)
       
        setAuth(result);
        localStorage.setItem('accessToken', result.accessToken);
        navigate("/home");
    }

    const logoutHandler = () =>{
        setAuth({});
        localStorage.removeItem('accessToken');
        navigate('/home');
    }

    const values = {
        loginSubmitHandler,
        registerSubmitHandler,
        logoutHandler,
        username: auth.username,
        email: auth.email,
        isAuthenticated: !!auth.accessToken,
    };

	return (
    <AuthContext.Provider value={values}>
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
            <Route path ='/Logout' element= { <Logout /> } />
        </Routes>
    <Footer />

  </AuthContext.Provider>
  )
}

export default App

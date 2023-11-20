import { Routes, Route } from 'react-router-dom'

import Navbar from '../components/navbar/Navbar.jsx'
import Navi from '../components/navigation/Navi.jsx'
import Home from "../components/home/Home.jsx"

import Collections from '../components/main/Collections.jsx'
import Search from '../components/search/Search.jsx'
import Appdownload from '../components/appdownload.jsx/AppDownload.jsx'
import Blog from '../components/blog/Blog.jsx'
import Contact from '../components/contact/Contact.jsx'
import Footer from '../components/footer/Footer.jsx'


function App() {
  return (
    <>
    <Navbar />
    <Navi />
    <Home />
   
        <Routes>
            <Route path='/collections' element={<Collections />} />
            <Route path='/blog' element={ <Blog />} />
            <Route path='/shop' element= { <Search />} />
            <Route path='/appdownload' element= {<Appdownload />} />
            <Route path='/contact' element={ <Contact />} />
        </Routes>
    <Footer />

  </>
  )
}

export default App

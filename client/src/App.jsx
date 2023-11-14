import { useState } from 'react'
import $ from "jquery"
import Main from '../components/Main.jsx'
import Home from "../components/Home.jsx"
import Footer from '../components/Footer.jsx'
import Navigation from '../components/Navigation.jsx'


function App() {
  return (
    <>
    <Navigation />
    <Home />
    <Main />
    <Footer />

  </>
  )
}

export default App

import React from 'react'
import Header from './Components/Header'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from "./Components/Home"
import Contact from "./Components/Contact"
import Services from "./Components/Services"
import Footer from './Components/Footer'

import "./Styles/App.scss"
import "./Styles/header.scss"
import "./Styles/home.scss"
import "./Styles/footer.scss"
import "./Styles/contact.scss"
import "./Styles/mediaquery.scss" 

const App = () => {
  return (
    <div>
      <Router>

        <Header/>

          <Routes>
            <Route path='/' element= {<Home/>}  />
            <Route path='/Contact' element= {<Contact/>}  />
            <Route path='/Services' element= {<Services/>}  />

            <Route path='*' element= {<h1>404 Page not found</h1>}  />
          </Routes>
          <Footer/>
      </Router>
    </div>
  )
}

export default App



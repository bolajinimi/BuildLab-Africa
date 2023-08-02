import { useState } from 'react'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './App.css'
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';
import Navbar from './component/Navbar/Navbar'
import HomePage from './pages/HomePage';
import ExperiencePage from './pages/ExperiencePage'
import FullTimePage from './pages/FullTimePage'
import Testimonial from './pages/Testimonial'
import Faqs from './pages/Faqs'
import Footer from './component/Footer/Footer'
import GetStarted from './pages/GetStarted';




function App() {


  return (
    <>
    <Router>
    <Navbar />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/experience' element={<ExperiencePage />} />
        <Route path='/fullTime' element={<FullTimePage />} />
        <Route path='/testimonial' element={<Testimonial />} />
        <Route path='/faqs' element={<Faqs />} />
        <Route path='/getStarted' element={<GetStarted />} />
      </Routes>
      <Footer />
    </Router>
  
    
    </>
  )
}

export default App

import React,{useEffect} from 'react'
import './home.scss'
import {FaArrowDown} from 'react-icons/fa'
import Aos from 'aos'
import 'aos/dist/aos.css'

const Home = () => {

  useEffect(()=>{
    Aos.init({duration: 2000})
  },[])

  return (
    <section className='home flex'>
      {/* <div className='overlay'></div> */}
      <div className='homeContent'>
          <h4 className='textDiv'>
            Join an amazing team, Build real-world products.
          </h4>
          <h1 className='smallText'>
              Empowering Africa's Talent For Global Impact.
          </h1>
      </div>

      <div className="contact-form-wrapper">
        <div className='contact-form-content'>
          <h3>Join Us now and start Building</h3>
          <ul>
            <li>Get professional experience</li>
            <li>Building porfolio</li>
            <li>Access to global internship opportunities</li>
          </ul>
        </div>

        <div className='single-row'>

          <div className='single-column'>
            <input type="text"  placeholder='First Name'/>
          </div>

          <div className='single-column' placeholder='Last Name'>
            <input type="text" placeholder='Last Name'/>
          </div>
        </div>

        <div className='single-row'>
          <input type="email" placeholder='Email Address'/>
        </div>

        <div className='single-row'>
          <input type="telephone" placeholder='081-110-234-87'/>
        </div>

        <div className='single-row'>
          <textarea name=""  cols="30" rows="10"></textarea>
        </div>

        <div className='single-row'>
          <input type="submit" />
        </div>

      </div>
     
     
    </section>
  )
}

export default Home;

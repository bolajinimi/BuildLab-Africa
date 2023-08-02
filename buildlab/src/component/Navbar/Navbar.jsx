import React,{useState} from 'react';
import './navbar.scss'
import {AiOutlineClose} from 'react-icons/ai'
import {TbGridDots} from 'react-icons/tb'
import { Link } from 'react-router-dom';


function Navbar() {
  const[active, setActive] = useState('navBar')

  const showNav = () => {
      setActive('navBar activeNavbar')
  }

  const removeNav = () => {
    setActive('navBar')
  }

  return (
    <section className='navBarSection'>
     
      <header className='header flex'>
        
        <div className='logoDiv'>
          <a href="#" className='logo flex'>
            <img src="../../src/assets/logo.png"  alt="" />
          </a>
        </div>

        <div className={active}>
          <ul className='navLists flex'>

            <li className='navItem'>
              <Link to="/" className='navLink'>Home</Link>
            </li>

            <li className='navItem'>
              <Link to="/experience" className='navLink'>Experience</Link>
            </li>

            <li className='navItem'>
              <Link to="/testimonial" className='navLink'>Testimonial</Link>
            </li>

            <li className='navItem'>
              <Link to="/fullTime" className='navLink'>FullTime</Link>
            </li>

            <li className='navItem'>
             <Link to="/faqs" className='navLink'>FAQs</Link>
            </li>

            <button className='btn'>
            <Link to="/getStarted" className='navLink'>Get Started</Link>
            </button>
          </ul>

          <div onClick={removeNav}
          className='closeNavbar'>
           <AiOutlineClose className='icon'/>
          </div> 
        </div>

        <div onClick={showNav}
        className='toggleNavbar'>
            <TbGridDots className='icon'/>
        </div>

      </header>
      <nav>
        <a href="">
         
        </a>
      </nav>
    </section>
  );
}

export default Navbar;


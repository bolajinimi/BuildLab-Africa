import React from 'react'
import './gettingStarted.scss'

const GettingStarted = () => {

  return (
    <section className='get flex'>
      {/* <div className='overlay'></div> */}
      <div className='getContent'>
          <h1 className='getDiv'>
            Get Started
          </h1>
          <p className='smallText'>
          Become part of a thriving community of over 5,000+ professionals who are revolutionizing 
          and fast-tracking their careers through our organization.
          </p>
            <div>
                <h2>
                    Explore the Program Benefit to access:
                </h2>
            </div>
            <div>
             <ul>
                <li> Comprehensive Building of Great Products </li>
                <li>Get Professional Tech Experience</li>
                <li>Mentorship and Senior Expert Guide </li>
                <li>Build Your Portfolio and Project Catalog </li>
                <li>Get Internship Placement </li>
                <li>Paid Gigs</li>
             </ul>
            </div>
        
      </div>

      <div className="contact-form-wrapper">
        <div className='contact-form-content'>
          <h3>Start Building A Product Now</h3>
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
          <input type="telephone" placeholder='Tech Role'/>
        </div>

        <div className='single-row'>
          <input type="submit"/>
        </div>

      </div>
     
     
    </section>
  )
}

export default GettingStarted;


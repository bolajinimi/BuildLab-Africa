import React from 'react'
import './alumni.scss'

const Alumni = () => {
  return (
    <div className='alumni'>
      <h1 className='alumniTitle'>BuildLab Alumni work at incredible companies</h1>
      <div className='alumniDiv flex'>
        <div className='alumniContent'>
            <span>
                “BuildLab empowered me to succeed and opened doors to incredible opportunities.
                I am forever grateful for my experience. The program not only provided me with valuable industry knowledge 
                and practical skills but also connected me with a supportive community of like-minded tech professionals. 
                Through the program, I had the opportunity to gain real-world experience that gave me to build great products 
                and gain the professional tech experience I needed to work in the competitive tech industry. 
                I am proud to be a BuildLab alumnus 
                and highly recommend it to anyone aspiring to excel in the tech field."
            </span>

           <h4>
                - Selly, BuildLab Alumni
           </h4>
           <p>Software Developer</p>
        </div>

        <div className='alumniImg'>
              <img src="../../src/assets/image1.jpg"  alt="" />  
        </div>
       
      </div>

  {/* <div className="card">
      <img src="../../src/assets/image1.jpg" alt="Card Image"/>
    <div className="card-content">
      <h3>Card Title</h3>
      <p>Card description goes here.</p>
    </div>
  </div> */}


    </div>
   
  )
}

export default Alumni

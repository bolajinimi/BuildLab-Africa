import React from 'react'
import './courses.scss'
import {FaLaptopCode} from 'react-icons/fa'
import {BsCodeSlash} from 'react-icons/bs'
import {BiUserPlus} from 'react-icons/bi'
import {FcDoughnutChart} from 'react-icons/fc'
import {GrShieldSecurity} from 'react-icons/gr'
import {FiArrowRight} from 'react-icons/fi'

const Data = [

    {
      id:1,
      icon: <FaLaptopCode/>,
      destTitle: 'Software Engineering Bootcamp',
    },
    {
      id:2,
      icon: <BsCodeSlash/>,
      destTitle: 'Web Development Bootcamp',
    },
    {
      id:3,
      icon: <BiUserPlus/>,
      destTitle: 'UX Design Bootcamp',
    },
    {
        id:3,
        icon: <FcDoughnutChart/>,
        destTitle: 'Data Science Bootcamp',
    },
    {
        id:3,
        icon: <GrShieldSecurity/>,
        destTitle: 'Cybersecurity Bootcamp',
    }
    
  
]

const Courses = () => {
  return (
    <div className='mainDiv'>
      <div className='courseContent'>
        <h1>BuildLab-Africa Technology and Coding Bootcamps</h1>
        <p> 
            Buildlab Africa is a talent accelerator and 
            venture studio that provides tech professionals with the opportunity to break into tech, 
            gain valuable professional experience and develop their skills through project-based training in building live projects, 
            guided and supervised by senior professionals.
        </p>
      </div>
      <div className='courseMap grid'>
        {
            Data.map(({id,icon,destTitle}) => {
                return(
                  <div data-aos="fade-up" key={id} className='singleDestination'>
                     
    
                    <div className="cardInfo">
                      <div className='icon'>
                        {icon}
                      </div>
                        <h4 className='destTitle'>{destTitle}</h4>
                        <div>
                            <button className='ctn flex'>
                                Learn More <FiArrowRight />
                            </button>
                        </div>
                    </div>
    
                  </div>
                )
              })
        } 
     </div>  
      
    </div>
  )
}

export default Courses

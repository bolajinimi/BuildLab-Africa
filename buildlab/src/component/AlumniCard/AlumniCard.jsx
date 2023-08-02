import React from 'react'
import './alumniCard.scss'


const data = [
    {
        id:1,
        imgSrc: img,
        fullName: 'John Doe',
        role: 'Software Developer'
    },

]


const AlumniCard = () => {
  return (
    <div>
        {
            Data.map(({id,imgSrc,fullName,role}) => {
                return(
                  <div data-aos="fade-up" key={id} className='singleDestination'>
                     
    
                    <div className="cardInfo">
                      <div className='icon'>
                        {imgSrc}
                      </div>
                        <h4 className='destTitle'>{fullName}</h4>
                        <div>
                            <h4>{role}</h4>
                        </div>
                    </div>
    
                  </div>
                )
              })
        } 
    </div>
  )
}

export default AlumniCard

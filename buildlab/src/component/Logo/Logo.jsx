import React from 'react'
import './logo.scss'


const Data = [
        {
            id:1,
            logo: img
        },
        {
            id:2,
            logo: img1
        },
        {
            id:3,
            logo: img2
        },
        {
            id:4,
            logo: img3
        },
        {
            id:5,
            logo: img4
        },
        {
            id:6,
            logo: img5
        },
        {
            id:7,
            logo: img6
        },
        {
            id:8,
            logo: img7
        },
        {
            id:9,
            logo: img8
        },
        {
            id:10,
            logo: img9
        },
        {
            id:11,
            logo: img10
        },
        {
            id:12,
            logo: img11
        },
        {
            id:13,
            logo: img12
        },
        {
            id:14,
            logo: img13
        },
        {
            id:15,
            logo: img14
        },
        {
            id:16,
            logo: img15
        },
        {
            id:17,
            logo: img16
        },
        {
            id:18,
            logo: img17
        }, 
        {
            id:19,
            logo: img
        },
        {
            id:20,
            logo: img
        }
    
    
]

const Logo = () => {
  return (
    <div>
      <h1>6500+ Hiring Partners Around the World</h1>
     <div>
      {
        Data.map(({id,logo}) => {
                return(
                  <div key={id} className='logoDiv'>
                    <div>
                      <div className='logo'>
                        {logo}
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

export default Logo

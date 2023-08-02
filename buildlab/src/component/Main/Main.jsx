import React, {useEffect} from 'react'
import './main.scss'
import img from '../../assets/image1.jpg'
import img2 from '../../assets/image2.jpg'
import img3 from '../../assets/image3.jpg'
import Aos from 'aos'
import 'aos/dist/aos.css'


const Data = [

  {
    id:1,
    imgSrc: img,
    destTitle: 'Mary Ann',
    location: 'Nigeria',
    description: 'As someone who had no prior experience in tech, I was intimidated by the idea of enrolling in this program.  However, i realized this program was designed for beginners like me, and I felt supported and encouraged every step of the way. I build an amazing fintech product, got a portfolio now and made amazing friends from other countries. Thank you Buildlab team!'
  },
  {
    id:2,
    imgSrc: img2,
    destTitle: 'Lagos',
    location: 'Nigeria',
    description: '“Before enrolling in this program, I was struggling to gain the experience I needed to advance in my career. But after completing the program and working on real-world projects, I now have a solid portfolio and practical skills that have caught the attention of recruiters. Thanks to this program, I landed my dream job and am excited to see where my career takes me next”'
  },
  {
    id:3,
    imgSrc: img3,
    destTitle: 'Lagos',
    location: 'Nigeria',
    description: 'I really enjoyed the the tech experience program from the Mentors, the sessions and my team. It was tasking and well crafted to stretch your skill and that has made me a better developer, seeing our product live still makes me proud, and i have gone on to secure a job. I 100% recommend to all techies who want to grow in their career!'
  },
  // {
  //   id:4,
  //   imgSrc: img,
  //   destTitle: 'Lagos',
  //   location: 'Nigeria',
  //   description: 'The epitome of romance'
  // },
  // {
  //   id:5,
  //   imgSrc: img,
  //   destTitle: 'Lagos',
  //   location: 'Nigeria',
  //   description: 'The epitome of romance'
  // },
  // {
  //   id:6,
  //   imgSrc: img,
  //   destTitle: 'Lagos',
  //   location: 'Nigeria',
  //   description: 'The epitome of romance'
  // },
  

]



const Main = () => {

  useEffect(()=>{
    Aos.init({duration: 2000})
  },[])

  return (
    <section className='main container section'>
      <div className='secTitle'>
        <h3 data-aos="fade-right" className='title'>
          most visited destinations
        </h3>
      </div>

      <div className='secContent grid'>
        {
          Data.map(({id,imgSrc,destTitle, location, description}) => {
            return(
              <div data-aos="fade-up" key={id} className='singleDestination'>
                  <div className='imageDiv'>
                    <img src={imgSrc} alt={destTitle} />
                  </div>

                  <div className="cardInfo">
                    <h4 className='destTitle'>{destTitle}</h4>
                    <span className='continent flex'>
                      <span className='name'>{location}</span>
                    </span>

                    <div className='fees flex'>
                      <div className='desc'>
                        <p>{description}</p>
                      </div>
                    </div>

                    <button className='btn flex'>
                        Read More
                      </button>
                  </div>

              </div>
            )
          })
        }
      </div>
    </section>
  )
}

export default Main

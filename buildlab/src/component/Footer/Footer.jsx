import React,{useEffect} from 'react'
import './footer.scss';
import {FiChevronRight, FiSend} from 'react-icons/fi'
import {BsTwitter} from 'react-icons/bs'
import {BsFacebook} from 'react-icons/bs'
import {BsLinkedin} from 'react-icons/bs'




const Footer = () => {

 

  return (
    <section className='footer'>
      <div className='imgDiv'>
        {/* <img src="../../src/assets/home2.jpg" alt="" /> */}
      </div>

      <div className='secContent container'>
         <div className='contactDiv flex'>
          <div  className='text'>
            <small></small>
            <h2>Build is the global leader in coding bootcamps and tech courses.</h2>
          </div>

          <div className='inputDiv flex'>
            <input type="text" placeholder='Enter Email Address'/>
            <button className='btn flex' type='submit'>
                Send <FiSend className='icon'/>
            </button>
          </div>
        </div>

        <div className='footerCard flex'>
          <div className='footerIntro flex'>
            <div className='logoDiv'>
              <a href="#" className='logo flex'>
                Build.
              </a>
            </div>

            <div data-aos="fade-up" className='footerParagraph'>
              Join A Team Now, Get Assigned A Product, Gain Tech Experience, Build Your Portfolio And Get Mentorship.
            </div>

            <div data-aos="fade-up" className='footerSocials flex'> 
                <BsTwitter className='icon'/>
                <BsFacebook className='icon'/>
                <BsLinkedin className='icon'/>
            </div>
          </div>

          <div className='footerLinks grid'>
            {/* {group 1} */}
            <div data-aos="fade-up" data-aos-duration="3000" className='linkGroup'>
              <span className='groupTitle'>
                Bootcamps
              </span>
              <li className='footerList flex'>
                <FiChevronRight className='icon'/>
                Software Engineering
              </li>

              <li className='footerList flex'>
                <FiChevronRight className='icon'/>
                Web Development
              </li>

              <li className='footerList flex'>
                <FiChevronRight className='icon'/>
                UI/UX
              </li>

              <li className='footerList flex'>
                <FiChevronRight className='icon'/>
                Cybersecurity
              </li>

              <li className='footerList flex'>
                <FiChevronRight className='icon'/>
                Data Science
              </li>
            </div>

            <div data-aos="fade-up" data-aos-duration="3000" className='linkGroup'>
              <span className='groupTitle'>
                CERTIFICATE
              </span>
              <li className='footerList flex'>
                <FiChevronRight className='icon'/>
                Web Development
              </li>

              <li className='footerList flex'>
                <FiChevronRight className='icon'/>
                User Experience Design
              </li>

              <li className='footerList flex'>
                <FiChevronRight className='icon'/>
                Digial Marketing
              </li>


              <li className='footerList flex'>
                <FiChevronRight className='icon'/>
                Data Analyst
              </li>

              <li className='footerList flex'>
                <FiChevronRight className='icon'/>
              </li>
            </div>

            <div  data-aos="fade-up" data-aos-duration="5000" className='linkGroup'>
              <span className='groupTitle'>
                OUR MISSION
              </span>
              <li className='footerList flex'>
                <FiChevronRight className='icon'/>
                Agency
              </li>

              <li className='footerList flex'>
                <FiChevronRight className='icon'/>
                Mission
              </li>

              <li className='footerList flex'>
                <FiChevronRight className='icon'/>
                UI/UX
              </li>

              <li className='footerList flex'>
                <FiChevronRight className='icon'/>
                Product Designer
              </li>

              <li className='footerList flex'>
                <FiChevronRight className='icon'/>
                Data Analyst
              </li>

              <li className='footerList flex'>
                <FiChevronRight className='icon'/>
              </li>
            </div>

            <div data-aos="fade-up" data-aos-duration="3000" className='linkGroup'>
              <span className='groupTitle'>
                CERTIFICATE
              </span>
              <li className='footerList flex'>
                <FiChevronRight className='icon'/>
                Web Development
              </li>

              <li className='footerList flex'>
                <FiChevronRight className='icon'/>
                User Experience Design
              </li>

              <li className='footerList flex'>
                <FiChevronRight className='icon'/>
                Digial Marketing
              </li>


              <li className='footerList flex'>
                <FiChevronRight className='icon'/>
                Data Analyst
              </li>

              <li className='footerList flex'>
                <FiChevronRight className='icon'/>
              </li>
            </div>

            <div data-aos="fade-up" data-aos-duration="3000" className='linkGroup'>
              <span className='groupTitle'>
                CERTIFICATE
              </span>
              <li className='footerList flex'>
                <FiChevronRight className='icon'/>
                Web Development
              </li>

              <li className='footerList flex'>
                <FiChevronRight className='icon'/>
                User Experience Design
              </li>

              <li className='footerList flex'>
                <FiChevronRight className='icon'/>
                Digial Marketing
              </li>


              <li className='footerList flex'>
                <FiChevronRight className='icon'/>
                Data Analyst
              </li>

              <li className='footerList flex'>
                <FiChevronRight className='icon'/>
              </li>
            </div>


            <div data-aos="fade-up" data-aos-duration="3000" className='linkGroup'>
              <span className='groupTitle'>
                CERTIFICATE
              </span>
              <li className='footerList flex'>
                <FiChevronRight className='icon'/>
                Web Development
              </li>

              <li className='footerList flex'>
                <FiChevronRight className='icon'/>
                User Experience Design
              </li>

              <li className='footerList flex'>
                <FiChevronRight className='icon'/>
                Digial Marketing
              </li>


              <li className='footerList flex'>
                <FiChevronRight className='icon'/>
                Data Analyst
              </li>

              <li className='footerList flex'>
                <FiChevronRight className='icon'/>
              </li>
            </div>

          </div>

          <div className='footerDiv flex'>
            <small>Buildlab Africa</small>
            <small>COPYRIGHTS RESERVED - CB 2023</small>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Footer

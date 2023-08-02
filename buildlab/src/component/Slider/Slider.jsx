import React, { Component } from "react";
import Slider from "react-slick";
import LeftArrow from "../../assets/left.png"
import RightArrow from "../../assets/rigth.png"
import img3 from '../../assets/image1.jpg'
import img4 from '../../assets/image2.jpg'
import img5 from '../../assets/image3.jpg'

const Data = [

    {
      id:1,
      imgS: img3,
      dTitle: 'Mary Ann',
      location: 'Nigeria',
      description: 'As someone who had no prior experience in tech, I was intimidated by the idea of enrolling in this program.  However, i realized this program was designed for beginners like me, and I felt supported and encouraged every step of the way. I build an amazing fintech product, got a portfolio now and made amazing friends from other countries. Thank you Buildlab team!'
    },
    {
      id:2,
      imgS: img4,
      dTitle: 'Lagos',
      location: 'Nigeria',
      description: '“Before enrolling in this program, I was struggling to gain the experience I needed to advance in my career. But after completing the program and working on real-world projects, I now have a solid portfolio and practical skills that have caught the attention of recruiters. Thanks to this program, I landed my dream job and am excited to see where my career takes me next”'
    },
    {
      id:3,
      imgS: img5,
      dTitle: 'Lagos',
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
  


export default function  Card({title,data}) {
    const SlickArrowLeft = ({ currentSlide, slideCount, ...props }) => (
        <img src={LeftArrow} alt="prevArrow" {...props} />
      );
    
      const SlickArrowRight = ({ currentSlide, slideCount, ...props }) => (
        <img src={RightArrow} alt="nextArrow" {...props} />
      );
  

    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      swipeToSlide: true,
      prevArrow: <SlickArrowLeft />,
     nextArrow: <SlickArrowRight />
    };
    
    return (
      <div>
        <h2> Single Item</h2>
        <Slider {...settings}>
        {Data.map((imgS, dTitle) => {
            return (

                <div class="card">
                      <img src={imgS} alt="hero_img" />
                  <div class="card-content">
                    <h3>{dTitle}</h3>
                    <p>Card description goes here.</p>
                 </div>
                </div>

            );
          })}
        </Slider>
      </div>
    );
  
}
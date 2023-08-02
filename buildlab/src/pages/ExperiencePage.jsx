import React from 'react'
import  NextProduct from '../component/Next/NextProduct'
import Alumni from '../component/Alumni/Alumni'
import Curriculum from '../component/Curriculum/Curriculum'
import Slider from '../component/Slider/Slider'
import MultipleRows from '../component/MultipleSlide/MultipleSlide.Jsx'


const ExperiencePage = () => {
  return (
    <div>
     <NextProduct />
     <Alumni />
     <Curriculum />
     {/* <Slider />
     <MultipleRows /> */}
    </div>
  )
}

export default ExperiencePage

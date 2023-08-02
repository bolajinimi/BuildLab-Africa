import React from 'react'
import './nextProduct.scss'


const NextProduct = () => {
  return (
    <div className='nextNavSection'>
        <div className='nextPadding'>
            <div className='nextContentFirst'>
                <p>Next Product BuildCamp</p>
                <h2>August</h2>
                <p>Application ends soon</p>
            </div>
            <div className='nextContentSecond'>
                <button className='ntn'>
                    Apply Now
                </button>
                <p>3 Slots Left</p>
            </div>
            <div className='nextContentThird'>
                <span>Check alternative dates that are suitable for your schedule</span>
            </div>
        </div>

        <div className='nextPageContent'>
            <h1>Get the Break In Your Career</h1>
            <div className='nextBoxSizing'>
            <div className='Success flex'>
                <div>
                    <p>Alumni Success</p>
                    <h2>88%+</h2>
                    <p>hiring rate after our program</p>
                </div>
                <div>
                    <h2>Over 1000+</h2>
                    <p>Experience gained</p>
                </div>
            </div>

            <div className='list flex'>
                <ul>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
            </div>
        </div>
        </div>

       
    </div>
  )
}

export default NextProduct

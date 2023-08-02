import React from 'react'
import './AlumniSaying.scss'


const AlumniSaying = () => {
  return (
    <div className='alumniSaying'>
      <h1 className='titleAlumni'>What Our Alumni Are Saying</h1>

      <div className='box-card'>
        <div className="card">
            <div className='card-head'>
                <div class="profile-picture">
                    <img src="../src/assets/image2.jpg" alt="Profile Picture" />
                </div>
                <div>
                    <h3>KIMWE T.</h3>
                    <span> PRODUCT MANAGER</span>
                </div>
            </div>

            <div>
                <p>
                    “Before enrolling in this program, I was struggling to gain the experience I needed to advance in my career. 
                    But after completing the program and working on real-world projects, I now have a
                    solid portfolio and practical skills that have caught the attention of recruiters. 
                    Thanks to this program, I landed my dream job and am excited to see where my career takes me next
                </p>
            </div>

        </div>
        <div className="card">
            <div className='card-head'>
                <div class="profile-picture">
                    <img src="../src/assets/image2.jpg" alt="Profile Picture" />
                </div>
                <div>
                    <h3>KIMWE T.</h3>
                    <span> PRODUCT MANAGER</span>
                </div>
            </div>

            <div>
                <p>
                    As someone who had no prior experience in tech, I was intimidated by the idea of enrolling in this program. 
                    However, I realized this program was designed for beginners like me, 
                    and I felt supported and encouraged every step of the way. 
                    I build an amazing fintech product, got a portfolio now, and made amazing friends from other countries. 
                    Thank you Buildlab team!”
                </p>
            </div>
        </div>
        <div className="card">
            <div className='card-head'>
                <div class="profile-picture">
                    <img src="../src/assets/image2.jpg" alt="Profile Picture" />
                </div>
                <div>
                    <h3>KIMWE T.</h3>
                    <span> PRODUCT MANAGER</span>
                </div>
            </div>

            <div>
                <p>
                    “I really enjoyed the tech experience program from the Mentors, the sessions, and my team. 
                    It was tasking and well crafted to stretch your skill and that has made me a better developer, 
                    seeing our product live still makes me proud, 
                    and I have gone on to secure a job. 
                    I 100% recommend to all techies who want to grow in their careers!”
                </p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default AlumniSaying

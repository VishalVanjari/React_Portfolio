import React from 'react'

export const Info = () => {
  return (
    <div className='about__info grid'>
        <div className='about__box'>
        <i class='bx bx-award about__icon' ></i>
            <h3 className='about_title'>Experience</h3>
            <span className='about_subtitle'>Fresher</span>
        </div>

        <div className='about__box'>
        <i class='bx bx-briefcase-alt about__icon' ></i>
            <h3 className='about_title'>Completed</h3>
            <span className='about_subtitle'>10+ Projects</span>
        </div>

        <div className='about__box'>
        <i class='bx bx-support about__icon' ></i>
            <h3 className='about_title'>Support</h3>
            <span className='about_subtitle'>Online 24/7</span>
        </div>
    </div>
  )
}

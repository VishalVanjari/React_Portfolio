import React from 'react'
import "./footer.css"

export const Footer = () => {
  return (
    <footer className="footer">
        <div className="footer__container container">
            <h1 className='footer__title'>Vishal</h1>


            <ul className="footer__list">
                <li>
                    <a href='#about' className='footer__link'>About</a>
                </li>

                <li>
                    <a href='#portfolio' className='footer__link'>Projects</a>
                </li>

                <li>
                    <a href='#testimonial' className='footer__link'>Testimonials</a>
                </li>
            </ul>

            <div className="footer__social">
                <a href='https://www.facebook.com/' className='footer__social-link' target='_blank'>
                <i class="bx bxl-facebook"></i>
                </a>
                
                <a href='https://instagram.com/vishal_rathod_2103?igshid=ZDdkNTZiNTM=' className='footer__social-link' target='_blank'>
                <i class="bx bxl-instagram"></i>
                </a>
                
                <a href='https://twitter.com/VishalRathod30?t=QPYaxLn-1t_LcTwl8oMxUA&s=09' className='footer__social-link' target='_blank'>
                <i class="bx bxl-twitter"></i>
                </a>

                <a href='https://www.linkedin.com/in/vishal-vanjari-bb64b8228' className='footer__social-link' target='_blank'>
                <i class="bx bxl-linkedin"></i>
                </a>

            </div>

            <span className='footer__copy'>&#169; Vish Rathod . All rights reserved</span>
        </div>
    </footer>
  )
}

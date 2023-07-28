import React from 'react'
import './testimonial.css'
import { Data } from './Data'
import "swiper/css";
import "swiper/css/pagination";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";

export const Testimonial = () => {
  return (
    <section className="testimonial container section" id='testimonial'>
         <h2 className="section_title">Testimonial</h2>
        <span className="section_subtitle">What My Client say </span>

        <Swiper className="testimonial__container"
            loop={true}
            grabCursor={true}
            spaceBetween={24}
            pagination={{
            clickable: true,
            }}
            breakpoints={{
            576: {
                slidesPerView: 2,
            },
            768: {
                slidesPerView: 2,
                spaceBetween: 48,
            },
            }}
            modules={[Pagination]}
            
        >
            {Data.map(({id,image,title,description}) => {
                return(
                    <SwiperSlide className='testimonial__card' key={id}>
                        <img src={image} alt='' className='testimonial__img'/>

                        <h3 className='testimonial__name'>{title}</h3>
                        <p className='testimonial__description'>{description}</p>

                    </SwiperSlide>
                )
            })}
           
        </Swiper>
        
    </section>
  )
}

import React , {useState} from 'react'
import "./qualification.css"
export const Qualification = () => {

    const[toggleState,setToggleState] = useState(1);

    const toggleTab=(index)=>{
        setToggleState(index);
    };
    
    return (
        <section className='qualification section' >
            <h2 className="section_title">Qualification</h2>
            <span className="section_subtitle">My personal journey</span>

            <div className='qualification__container container'>
                <div className='qualification__tabs'>
                    <div className={toggleState === 1 ? "qualification__button qualification__active button--flex" : "qualification__button button--flex"} onClick={()=>toggleTab(1)}>
                        <i className='uil uil-graduation-cap
                         qualification__icon'></i>Education
                    </div>

                    <div className={toggleState === 2 ? "qualification__button qualification__active button--flex" : "qualification__button button--flex"} onClick={()=>toggleTab(2)}>
                        <i className='uil uil-briefcase-alt
                         qualification__icon'></i>Experience
                    </div>
                </div>
                <div className='qualification__sections'>
                    <div className={toggleState === 1 ? "qualification__content qualification__content-active" : "qualification__content"}>
                        <div className='qualification__data'>
                            <div>
                                <h3 className='qualification__title'>B.Tech (CS)</h3>
                                <span className='qualification__subtitle'>RCPIT</span>
                                <div className='qualification__calendar'>
                                    <i className='uil uil-calendar-alt'></i> 2020 - 2024
                                </div>
                            </div>

                            <div>
                                <span className='qualification__rounder'></span>
                                <span className='qualification__line'></span>
                            </div>
                        </div>

                        <div className='qualification__data'>
                            <div></div>

                        <div>
                                <span className='qualification__rounder'></span>
                                <span className='qualification__line'></span>
                            </div>
                            <div>
                                <h3 className='qualification__title'>HSC</h3>
                                <span className='qualification__subtitle'>R.C.Patel Jr College</span>
                                <div className='qualification__calendar'>
                                    <i className='uil uil-calendar-alt'></i> 2019 - 20 
                                </div>
                            </div>

                            
                        </div>

                        <div className='qualification__data'>
                            <div>
                                <h3 className='qualification__title'>SSC</h3>
                                <span className='qualification__subtitle'>R.C.Patel Secondary School</span>
                                <div className='qualification__calendar'>
                                    <i className='uil uil-calendar-alt'></i> 2017 - 18
                                </div>
                            </div>

                            <div>
                                <span className='qualification__rounder'></span>
                                <span className='qualification__line'></span>
                            </div>
                        </div>

                        <div className='qualification__data'>
                            <div></div>

                        <div>
                                <span className='qualification__rounder'></span>
                                <span className='qualification__line'></span>
                            </div>
                            <div>
                                <h3 className='qualification__title'>Primary School</h3>
                                <span className='qualification__subtitle'>R.C.Patel Primary School</span>
                                <div className='qualification__calendar'>
                                    <i className='uil uil-calendar-alt'></i> 2011 - 12
                                </div>
                            </div>

                            
                        </div>
                    </div>


                    <div className={toggleState === 2 ? "qualification__content qualification__content-active" : "qualification__content"}>
                        <div className='qualification__data'>
                            <div>
                                <h3 className='qualification__title'>Software Engineer</h3>
                                <span className='qualification__subtitle'>Unico Connect Pvt Ltd</span>
                                <div className='qualification__calendar'>
                                    <i className='uil uil-calendar-alt'></i> Sep 2024 - Present
                                </div>
                            </div>

                            <div>
                                <span className='qualification__rounder'></span>
                                <span className='qualification__line'></span>
                            </div>
                        </div>

                        <div className='qualification__data'>
                            <div></div>

                        <div>
                                <span className='qualification__rounder'></span>
                                <span className='qualification__line'></span>
                            </div>
                            <div>
                                <h3 className='qualification__title'>Software Developer</h3>
                                <span className='qualification__subtitle'>BridgeLabz Solutions Pvt Ltd</span>
                                <div className='qualification__calendar'>
                                    <i className='uil uil-calendar-alt'></i> June 2024 - Aug 2024
                                </div>
                            </div>

                            
                        </div>

                        <div className='qualification__data'>
                            <div>
                                <h3 className='qualification__title'>MERN Developer</h3>
                                <span className='qualification__subtitle'>R3SYS (Internship)</span>
                                <div className='qualification__calendar'>
                                    <i className='uil uil-calendar-alt'></i> 2021 - 22
                                </div>
                            </div>

                            <div>
                                <span className='qualification__rounder'></span>
                                <span className='qualification__line'></span>
                            </div>
                        </div>
                    </div> 
                </div>
            </div>
        </section>

    )
}

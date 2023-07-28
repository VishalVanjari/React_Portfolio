import React from "react";
import "./home.css"
import { Social } from "./Social";
import { Data } from "./Data";
import { ScrollDown } from "./ScrollDown";
<link rel="stylesheet" href="https://unicons.iconscout.com/release/v4.0.0/css/line.css"></link>

 export const Home = () =>{
    return(
        <section className="home section" id="home">
            <div className='container'>
            <div className="home__container grid">
                <div className="home__content grid">
                    <Social/>

                    <div className="home__img"></div>

                    <Data/>

                </div>
                <ScrollDown/>
            </div>
            </div>
        </section>
    )
 }


 export default Home
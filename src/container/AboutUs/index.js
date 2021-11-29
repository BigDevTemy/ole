import React, { useEffect } from "react";
import Header from '../../component/header'
import Footer from '../../component/footer'
import AboutUs from "../../layout/AboutUsLayout/AboutUsDetails";
import Ourpeople from "../../layout/AboutUsLayout/Ourpeople";
import AboutUsLayout from '../../layout/AboutUsLayout'
import Ourmission from '../../layout/AboutUsLayout/Ourmission'
import OurValues from '../../layout/AboutUsLayout/OurValues'
const About_us = ()=>{
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
    return (
        <div>
            <Header/>
            <AboutUsLayout/>
            <AboutUs/>
            <Ourpeople/>
            <Ourmission/>
            <OurValues/>
            <Footer/>
            
        </div>
    )
}
export default About_us;
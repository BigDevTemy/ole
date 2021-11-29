import React, { useEffect, useState } from 'react'
import Header from '../../component/header'
import How_we_do from '../../layout/HomeUILayout/How_we_do'
import AboutUs from '../../layout/HomeUILayout/AboutUs';
import Carousel from '../../layout/HomeUILayout/Carousel'
import Services from '../../layout/HomeUILayout/Services';
import What_we_do from '../../layout/HomeUILayout/What_we_do'
import Quote from '../../layout/HomeUILayout/Quote'
import Testimonia from '../../layout/HomeUILayout/Testimonia'
import Footer from '../../component/footer'
import Time from '../../assets/images/time.png'
import Protection from '../../assets/images/security.png'

const Index = ()=>{
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
    return (
        
        <div  className="divContainer">
            <Header/>
            <Carousel/>
            {/* <div className="over">
                <div className="serviceTop">
                        <div className="serviceTopI">
                            <div >
                                <img src={Time} className="overlappImage pt-4"/>
                            </div>

                            <div className="spaceOverlap">
                                <div className="time">Timely delivery of goods</div>
                                <span className="time_details"></span>
                            </div>
                            
                        </div>
                        <div className="serviceTopII">
                            <div>
                                <img src={Protection} className="overlappImage pt-4"/><br/>
                                <div className="time">Insurance and cargo protection</div>
                            </div>

                            <div className="spaceOverlap">
                                <div className="time">Insurance and cargo protection</div>
                                <span className="time_details"></span>
                            </div>
                        </div>
                </div>
            </div> */}
            <AboutUs/>
            <What_we_do/>
            <How_we_do/>
            <Services/>
            <Quote/>
            {/* <Testimonia/> */}
            <Footer/>
            {/* 
            <How_we_do/>
            <Services/>
            <Quote/>
            <Testimonia/>
            <Footer/> */}
           
            
        
            
        </div>
    )
}

export default Index;
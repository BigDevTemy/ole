import React from "react";
import AboutusIndex from '../../../assets/images/aboutusindex_old.png'
import * as Icon from 'react-bootstrap-icons';
import {Link} from 'react-router-dom'
const AboutUs = ()=>{

    return (
        <div className="AboutUs">
            <div className="AboutusDiv">
                
                <div className="aboutusImg">
                   
                    <img src={AboutusIndex} className="aboutus_img"/>
                    
                        <div className="faster">
                            Faster Than You can Imagine
                        </div>
                    
                      
                </div>

                <div className="aboutusText">
                    <div className="txt">
                        <div className="aboutusText_small">WHO WE ARE</div>
                        <div className="services_big">Who We Are</div>
                    </div>
                    <div className="aboutHeader">
                       
                        <p className="aboutus-text1">
                            OceanLink Express is a culmination of years of experience from several international partners that are all leaders in their respective fields. 
                        </p>
                        <p className="aboutus-text2">
                            OceanLink Express Provides advanced solutions in the shipping, logistics and clearance sectors<br/>
                            Present in all countries around the world, works closely with all shipping lines, facilitates international trade between Nigeria and all markets across all continents.
                        </p>
                        <div className="readmore">
                              <Link style={{textDecoration:'none'}} to='/about_us' >Read More <Icon.ArrowRight/></Link>  
                        </div>
                    </div> 
                </div>
            </div>
        </div>
    )
}

export default AboutUs;
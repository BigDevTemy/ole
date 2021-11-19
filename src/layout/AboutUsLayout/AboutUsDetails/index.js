import React from "react";
import AboutusIndex from '../../../assets/images/aboutusindex.jpg'
import * as Icon from 'react-bootstrap-icons';

const AboutUs = ()=>{

    return (
        <div className="AboutUs">
            <div className="AboutusDiv">
                <div className="aboutusImg">
                    <img src={AboutusIndex}/>
                    
                        <div className="faster">
                            Faster Than You can Imagine
                        </div>
                    
                      
                </div>

                <div className="aboutusText">
                    <div className="aboutusText_big">
                        <div className="aboutusText_small">ABOUT US</div>
                        <div className="services_big">About Us</div>
                    </div>
                    <div className="aboutHeader">
                       
                        <p className="text-justify">
                         <strong>OceanLink </strong>express is a logistics and transport company formed by a team of professionals; We focus on providing timely, economical and professional services and support to our clients, while striving to maintain the highest possible levels of customer satisfaction.
                        </p>
                        <p className="aboutus-text2">
                            Our culmination of years of experience, along with our nationwide network of partners and agents, enables us to excel our mission.
                            The firm’s strength stems from its dedication to its vision, which hinges on custom made services, and its ability to identify potential business frontiers well ahead of the competition.
                        </p>
                        <p className="">
                            The company is growing fast due to the proven experience, dedication and professionalism. We are working hard to increase our main asset which is a satisfied client. In order to deliver revolutionized services, we are aiming at building and expanding strong partnerships with shipping leaders. We combine an array of autonomous affiliates dedicated to providing a large portfolio of solutions and services in Nigeria.
                        </p>
                    </div>

                    {/* <div>
                        <div className="aboutus-text3"><Icon.CheckCircle /> Red salmon skilfish, threadtail mullet southern flounder, orangespine unicorn fish flounder bobtail snipe ee</div>
                        <div className="aboutus-text3"><Icon.CheckCircle /> Red salmon skilfish, threadtail mullet southern flounder, orangespine unicorn fish flounder bobtail snipe ee</div>
                        <div className="aboutus-text3"><Icon.CheckCircle /> Red salmon skilfish, threadtail mullet southern flounder, orangespine unicorn fish flounder bobtail snipe ee</div>
                    </div> */}
                    {/* <div className="readMoreParent">
                        <div className="createButtonOthers">
                                Read More <Icon.ArrowRight/>
                        </div>
                    </div> */}
                </div>
            </div>
        </div>
    )
}

export default AboutUs;
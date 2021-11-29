import React from "react";
import logo from '../../assets/images/1.png'
import * as Icon from 'react-bootstrap-icons';
import { Form } from "react-bootstrap";
import { Link } from "react-router-dom";
const Index = ()=>{
    return (
        <div className="footer">
            <div className="overlay_footer">
                    <div className="footer_main">
                        
                            
                            <div className="d-lg-flex pt-2 flex-column section1">
                                <img  src={logo} className="footer_logo"  />
                                <div><span className="logo_text">OceanLink</span> <span className="logo_text_2">Express</span></div>
                                <div className="d-flex justify-content-between" className="footer_cover">
                                    <Icon.GeoAltFill size="15" color="white"/>
                                    <span className="footer-text"> Plot 13 Block 125c, Abayomi durosinmi, Oniru Lekki Lagos</span>
                                </div>
                                <div className="d-flex justify-content-between" className="footer_cover">
                                    <Icon.TelephoneFill size="15" color="white"/>
                                    <span className="footer-text"> 
                                        <a href="tel:+2349040006000" style={{textDecoration:'none',color:'#fff'}}>+234-904-000-6000</a>
                                        <a href="tel:+2348130629103" style={{textDecoration:'none',color:'#fff',marginLeft:10}}>+234-813-062-9103</a>
                                    </span>
                                </div>
                                <div className="d-flex justify-content-between" className="footer_cover">
                                    <Icon.EnvelopeFill size="15" color="white"/>
                                    <span className="footer-text" ><a href="malito:contact@oceanlink.ng" style={{textDecoration:'none',color:'#fff'}}>contact@oceanlink.ng</a></span>
                                </div>
                                
                                
                                
                            </div>
                            
                        
                        <div>
                        
                            <div className="d-lg-flex pt-4 flex-column section1">
                                <div className="d-flex justify-content-between pb-4 " style={{marginTop:50}} className="footer_cover">
                                    
                                   <Link to="/about_us" style={{cursor:'pointer', textDecoration:'none'}}> <span className="footer-text"> About Company</span></Link>
                                </div>
                                <div className="d-flex justify-content-between" className="footer_cover">
                                    
                                <Link to="/services" style={{cursor:'pointer', textDecoration:'none'}}> <span className="footer-text" > Our Services</span></Link>
                                </div>
                                <div className="d-flex justify-content-between" className="footer_cover">
                                    
                                    <Link to="/request_for_quote" style={{cursor:'pointer', textDecoration:'none'}}> <span className="footer-text" >Request For A Quote</span></Link>
                                </div>
                                <div className="d-flex justify-content-between" className="footer_cover">
                                   
                                <Link to="/contact_us" style={{cursor:'pointer', textDecoration:'none'}}><span className="footer-text" >Contact Us</span></Link>
                                </div>
                                
                                
                            </div>
                        </div>
                        
                        <div>
                            
                            <div className="d-flex pt-4 flex-column section1">

                                <div className="d-flex justify-content-between" className="footer_cover">
                                   <a href="https://wa.me/2349040006000">
                                    <Icon.Whatsapp size="20" color="green"/>
                                    </a>
                                    <span className="ps-4 " style={{color:'#fff'}}>Chat With US On Whatsapp</span>
                                </div>
                                
                                
                                
                            </div>
                        </div>
                            
                        </div>
                       
                    </div>
                </div>
    )
}
export default Index;
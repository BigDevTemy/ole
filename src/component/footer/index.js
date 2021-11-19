import React from "react";
import logo from '../../assets/images/logo500x500.png'
import * as Icon from 'react-bootstrap-icons';
import { Form } from "react-bootstrap";
const Index = ()=>{
    return (
        <div className="footer">
            <div className="overlay_footer">
                    <div className="footer_main">
                        
                            
                            <div className="d-lg-flex pt-2 flex-column">
                                <img  src={logo} className="footer_logo"  />
                                <div className="d-flex justify-content-between pb-4" className="footer_cover">
                                    <Icon.GeoAltFill size="15" color="white"/>
                                    <span className="footer-text"> Plot 13 Block 125c, Abayomi durosinmi, Oniru Lekki Lagos</span>
                                </div>
                                <div className="d-flex justify-content-between pb-4" className="footer_cover">
                                    <Icon.TelephoneFill size="15" color="white"/>
                                    <span className="footer-text"> <a href="tel:+2349040006000" style={{textDecoration:'none',color:'#fff'}}>+2349040006000</a></span>
                                </div>
                                <div className="d-flex justify-content-between pb-4" className="footer_cover">
                                    <Icon.EnvelopeFill size="15" color="white"/>
                                    <span className="footer-text" ><a href="malito:contact@oceanlink.ng" style={{textDecoration:'none',color:'#fff'}}>contact@oceanlink.ng</a></span>
                                </div>
                                <div className="d-flex justify-content-between pb-4" className="footer_cover">
                                    <Icon.ClockFill size="15" color="white"/>
                                    <span className="footer-text" >Opening hours: 9:00 AM - 5:00 PM</span>
                                </div>
                                
                                
                            </div>
                            
                        
                        <div>
                        
                            <div className="d-lg-flex pt-4 flex-column">
                                <div className="d-flex justify-content-between pb-4 " style={{marginTop:50}} className="footer_cover">
                                    
                                    <span className="footer-text"> About Company</span>
                                </div>
                                <div className="d-flex justify-content-between pb-4" className="footer_cover">
                                    
                                    <span className="footer-text" > Our Services</span>
                                </div>
                                <div className="d-flex justify-content-between pb-4" className="footer_cover">
                                    
                                    <span className="footer-text" >Request For A Quote</span>
                                </div>
                                <div className="d-flex justify-content-between pb-4" className="footer_cover">
                                   
                                    <span className="footer-text" >Home</span>
                                </div>
                                
                                
                            </div>
                        </div>
                        
                        <div>
                            
                            <div className="d-flex pt-4 flex-column">
                                
                                
                                <div className="d-flex justify-content-between pb-4" className="footer_cover">
                                    
                                    <Form.Floating className="mb-3">
                                        <Form.Control
                                            id="floatingInputCustom"
                                            type="email"
                                            placeholder="Email Address"
                                            style={{background:'#fff'}}
                                        />
                                        <label htmlFor="floatingInputCustom">Subcribe</label>
                                        
                                    </Form.Floating>
                                </div>
                                <div className="d-flex justify-content-between pb-4" className="footer_cover">
                                   <a href="https://wa.me/2349040006000">
                                    <Icon.Whatsapp size="50" color="green"/>
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
import React from "react";
import Road from'../../../assets/images/road.png';
import Ship from'../../../assets/images/ship.png';
import Air from'../../../assets/images/air.png';
import Team from '../../../assets/images/values/team.jpg'
import Value from '../../../assets/images/values/value.jpg'
import Integrity from '../../../assets/images/values/integrity.jpg'
import Innovation from '../../../assets/images/values/innovation.jpg'
import Satisfaction from '../../../assets/images/values/satisfaction.jpg'
import Committment from '../../../assets/images/values/commitment.jpg'
import * as Icon from 'react-bootstrap-icons';
const Index = ()=>{
    return(
        <div className="ourvalues">
                <div className="mb-5 ourvalue_child">
                    <div className="small_Title values">OUR VALUES</div>
                    <h1>Our Values</h1>
                </div>
                <div className="ourvalues_div">
                    <div className="ourvalues_card shadow-lg p-3 mb-5 bg-body rounded">
                        {/* <img src={Team} className="value_img" /> */}
                        <div className="ireegular_circle_value"></div>
                        <div className="cardTitle">We work as a <strong>team</strong> </div>
                        <div className="cardBody">
                           
                        </div>
                       
                    </div>
                    <div className="ourvalues_card shadow-lg p-3 mb-5 bg-body rounded">
                            {/* <img src={Value} className="value_img"  /> */}
                            <div className="cardTitle">We <strong>value</strong> our People.</div>
                            <div className="cardBody">
                                
                            </div>
                            
                    </div>
                    <div className="ourvalues_card shadow-lg p-3 mb-5 bg-body rounded">
                        {/* <img src={Integrity} className="value_img"  /> */}
                        <div className="cardTitle"> We act with <strong>Integrity</strong></div>
                        <div className="cardBody">
                     
                            
                        </div>
                        
                    </div>


                    <div className="ourvalues_card shadow-lg p-3 mb-5 bg-body rounded">
                        {/* <img src={Innovation} className="value_img" /> */}
                        <div className="cardTitle"> We promote <strong>Innovation</strong></div>
                        <div className="cardBody">
                            
                        </div>
                        
                    </div>
                    <div className="ourvalues_card shadow-lg p-3 mb-5 bg-body rounded">
                            {/* <img src={Satisfaction} className="value_img"  /> */}
                            <div className="cardTitle"> We strive to achieve highest <strong>Customer Satisfaction</strong></div>
                            <div className="cardBody">
                                
                            </div>
                           
                           
                    </div>
                    <div className="ourvalues_card shadow-lg p-3 mb-5 bg-body rounded">
                        {/* <img src={Committment} className="value_img"  /> */}
                        <div className="cardTitle"> We are <strong>committed to provide solutions</strong> with the highest Quality</div>
                        <div className="cardBody">
                          
                        </div>
                       
                    </div>

                </div>
        </div>
    )
}

export default Index;
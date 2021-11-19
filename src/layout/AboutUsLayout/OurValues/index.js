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
                    <div className="small_Title">OUR VALUES</div>
                    <h1>Our Values</h1>
                </div>
                <div className="servicesDiv">
                    <div className="ourvalues_card shadow-lg p-3 mb-5 bg-body rounded">
                        {/* <img src={Team} className="value_img" /> */}
                        <div className="ireegular_circle_value"></div>
                        <div className="cardTitle"><b>TEAM</b> </div>
                        <div className="cardBody">
                        We work as a team
                        </div>
                       
                    </div>
                    <div className="ourvalues_card shadow-lg p-3 mb-5 bg-body rounded">
                            {/* <img src={Value} className="value_img"  /> */}
                            <div className="cardTitle"><b>VALUE</b></div>
                            <div className="cardBody">
                                We value our People.
                            </div>
                            
                    </div>
                    <div className="ourvalues_card shadow-lg p-3 mb-5 bg-body rounded">
                        {/* <img src={Integrity} className="value_img"  /> */}
                        <div className="cardTitle"><b>INTEGRITY</b></div>
                        <div className="cardBody">
                            We act with integrity
                            
                        </div>
                        
                    </div>


                    <div className="ourvalues_card shadow-lg p-3 mb-5 bg-body rounded">
                        {/* <img src={Innovation} className="value_img" /> */}
                        <div className="cardTitle">INNOVATION</div>
                        <div className="cardBody">
                            We promote Innovation
                        </div>
                        
                    </div>
                    <div className="ourvalues_card shadow-lg p-3 mb-5 bg-body rounded">
                            {/* <img src={Satisfaction} className="value_img"  /> */}
                            <div className="cardTitle"> <b>CUSTOMER SATISFACTION</b></div>
                            <div className="cardBody">
                                We strive to achieve highest Customer Satisfaction
                            </div>
                           
                           
                    </div>
                    <div className="ourvalues_card shadow-lg p-3 mb-5 bg-body rounded">
                        {/* <img src={Committment} className="value_img"  /> */}
                        <div className="cardTitle"><b>COMMITTED</b></div>
                        <div className="cardBody">
                            We are committed to provide solutions with the highest Quality
                        </div>
                       
                    </div>

                </div>
        </div>
    )
}

export default Index;
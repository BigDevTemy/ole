import React from "react";

import AirShipment from '../../../assets/images/shipment/airshipment_small.png'
import CustomClearing from '../../../assets/images/shipment/custom_clearing_small.gif'
import DryCargo from '../../../assets/images/shipment/dry_cargo_small.png'
import ProjectCargo from '../../../assets/images/shipment/project_cargo_small.png'
import Storage from '../../../assets/images/shipment/storage_small.png'
import Transportation from '../../../assets/images/shipment/transportation_small.png'
import Terminal from '../../../assets/images/shipment/terminal_small.png'
import Shipment from '../../../assets/images/shipment/shipment.png'
const Index = ()=>{
    return (
        <div className="mainService">
            <div className="mainService1">
                <div className="small_Title align_small_title">OUR SERVICES</div>
                <h1>Our Services</h1>
            </div>
            <div className="mainService2">
            <div className="ourservices_div_main">
                    <div className="ourservices_card shadow-lg p-3 mb-5 bg-body rounded">
                        <img src={Shipment} className="value_img" />
                        <div className="ireegular_circle_value"></div>
                        <div className="cardTitle_services">
                            SEA SHIPMENT
                        </div>
                        <div className="cardBody">
                                
                        </div>
                       
                    </div>
                    <div className="ourservices_card shadow-lg p-3 mb-5 bg-body rounded">
                            <img src={AirShipment} className="value_img"  />
                            <div className="cardTitle_services">AIR SHIPMENT</div>
                            <div className="cardBody">
                                
                            </div>
                            
                    </div>
                    <div className="ourservices_card shadow-lg p-3 mb-5 bg-body rounded">
                        <img src={DryCargo} className="value_img"  />
                        <div className="cardTitle_services">DRY/REFER CARGO</div>
                        <div className="cardBody">
                           
                            
                        </div>
                        
                    </div>


                    <div className="ourservices_card shadow-lg p-3 mb-5 bg-body rounded">
                        <img src={ProjectCargo} className="value_img" />
                        <div className="cardTitle_services">PROJECT CARGO</div>
                        <div className="cardBody">
                          
                        </div>
                        
                    </div>
                    <div className="ourservices_card shadow-lg p-3 mb-5 bg-body rounded">
                            <img src={Transportation} className="value_img"  />
                            <div className="cardTitle_services">INTERMODAL TRANSPORTATION<br/>/ HAULAGE</div>
                            <div className="cardBody">
                                
                            </div>
                           
                           
                    </div>
                    <div className="ourservices_card shadow-lg p-3 mb-5 bg-body rounded">
                        <img src={Storage} className="value_img"  />
                        <div className="cardTitle_services">WAREHOUSING/STORAGE</div>
                        <div className="cardBody">
                            
                        </div>
                       
                    </div>
                    <div className="ourservices_card shadow-lg p-3 mb-5 bg-body rounded">
                        <img src={CustomClearing} className="value_img"  />
                        <div className="cardTitle_services">CUSTOMS CLEARING</div>
                        <div className="cardBody">
                            
                        </div>
                       
                    </div>
                    <div className="ourservices_card shadow-lg p-3 mb-5 bg-body rounded">
                        <img src={Terminal} className="value_img"  />
                        <div className="cardTitle_services">PORTS, TERMINAL & DEPOTS</div>
                        <div className="cardBody">
                       
                        </div>
                       
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Index;
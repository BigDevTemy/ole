import React from 'react';
import Road from'../../../assets/images/road.png';
import Ship from'../../../assets/images/ship.png';
import Air from'../../../assets/images/air.png';
import * as Icon from 'react-bootstrap-icons';
import {Link} from 'react-router-dom'
const Services = ()=>{
    return (
        <div className="servicesMain ">
           <div className="services-tag">
                <div className="w-100 service-tag-i" >
                    <div className="howwedoText_small">OUR SERVICES</div>
                    <div className="services_big">Our Services</div>
                </div>
                <div className="ps-4 mt-4 transportservices ">
                Shipping plays a vital role in world trade and is the backbone of the world economy,
                which makes it indispensable to the world and to meeting the challenge of the Agenda for Sustainable Development
                   {/* <Link to="/services"> <div className="createButtonOthers">
                        Read More <Icon.ArrowRight/>
                    </div>
                    </Link> */}

                </div>
           </div>
           <div className="servicesDiv service_home">
                <div className="ourservices shadow-lg p-3 mb-5 bg-body rounded">
                    <img src={Road} className="cardimg" />
                    <div className="cardTitle">Transportation & Haulage</div>
                    <div className="cardBody">
                     Let us simplify and connect your supply chain from end to end.
                    </div>
                    <Link to="/services"> <div className="createButtonOthers">
                        Read More <Icon.ArrowRight/>
                    </div>
                    </Link>
                    {/* <div className="buttonParentDiv">
                        <div className="createButton_services">
                            Read More <Icon.ArrowRight/>
                        </div>
                    </div> */}
                </div>
                <div className="ourservices shadow-lg p-3 mb-5 bg-body rounded">
                        <img src={Ship} className="cardimg"  />
                        <div className="cardTitle">Ship Freight</div>
                        <div className="cardBody">
                        90% of the total volume of global trade done by sea, We aim to provide the fastest and most economical sea shipments
                        </div>
                        <Link to="/services"> 
                            <div className="createButtonOthers">
                            Read More <Icon.ArrowRight/>
                            </div>
                        </Link>
                        {/* <div className="buttonParentDiv">
                            <div className="createButton_services">
                                Read More <Icon.ArrowRight/>
                            </div>
                        </div> */}
                </div>
                <div className="ourservices shadow-lg p-3 mb-5 bg-body rounded">
                    <img src={Air} className="cardimg"  />
                    <div className="cardTitle">Air Freight</div>
                    <div className="cardBody">
                    In today’s highly complex supply chains, speed is a key to success, send everywhere your freight.
                    </div>
                    <Link to="/services"> <div className="createButtonOthers">
                        Read More <Icon.ArrowRight/>
                    </div>
                    </Link>
                    {/* <div className="buttonParentDiv">
                        
                    </div> */}
                </div>
                <div className="ourservices shadow-lg p-3 mb-5 bg-body rounded">
                    <img src={Ship} className="cardimg"  />
                    <div className="cardTitle">Custom Clearing</div>
                    <div className="cardBody">
                    Import & Export, we take care of the customs.
                    </div>
                    <Link to="/services"> <div className="createButtonOthers">
                        Read More <Icon.ArrowRight/>
                    </div>
                    </Link>
                    {/* <div className="buttonParentDiv">
                       
                    </div> */}
                </div>

           </div>
        </div>
    )
}


export default Services;
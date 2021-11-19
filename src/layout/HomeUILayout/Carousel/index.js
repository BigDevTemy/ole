import React from "react";
import { Carousel} from "react-bootstrap";

import Slider1 from '../../../assets/images/hero_banner/slider_7.jpg'
import Slider5 from '../../../assets/images/hero_banner/slider_5.jpg'
import Slider2 from '../../../assets/images/hero_banner/slider_2.jpeg'
import Slider3 from '../../../assets/images/hero_banner/slider_3.jpeg';
const Index = ()=>{
    return (
        <div className="CarouselDiv">
                <Carousel fade>
                
                    <Carousel.Item>
                        <img
                        className="d-block w-100 slider-height"
                        src={Slider3}
                        alt="First slide"
                        />
                    
                        <Carousel.Caption>
                        <h1>SEA SHIPMENT</h1>
                        <p className="caption-text">90% of the total volume of global trade done by sea, We aim to provide the fastest and most economical sea shipments.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100 slider-height"
                        src={Slider5}
                        alt="Second slide"
                        />

                        <Carousel.Caption>
                        <h1>AIR SHIPMENT</h1>
                        <p className="caption-text">In today’s highly complex supply chains, speed is a key to success, send everywhere your freight.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100 slider-height"
                        src={Slider1}
                        alt="Third slide"
                        />

                        <Carousel.Caption>
                        <h1>CUSTOM CLEARING</h1>
                        <p className="caption-text">Import & Export, we take care of the customs.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100 slider-height"
                        
                        src={Slider2}
                        alt="Third slide"
                        />

                        <Carousel.Caption>
                        <h1>TRANSPORT & HAULAGE</h1>
                        <p className="caption-text">Let us simplify and connect your supply chain from end to end.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
    )
}

export default Index;
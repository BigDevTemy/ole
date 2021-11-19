import React from "react";
import Slider3 from '../../../assets/images/hero_banner/slider_2.jpeg'
import Slider2 from '../../../assets/images/hero_banner/slider_3.jpeg'
import {Carousel} from 'react-bootstrap'
const Index = ()=>{
    return(
        
       <div>
           <Carousel indicators={false} controls={false} className="carousel_me" >
            <Carousel.Item interval={2000}>
                <div className="carousel_item_me">
                    <p className="testimoniaText">Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
                </div>
                <Carousel.Caption style={{color:'#000'}} className="carousel_caption_me">
                    <p>- Geoffery<br/> Project Manager</p>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item interval={2000}>
                <div className="carousel_item_me">
                    <p className="testimoniaText">Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry. . </p>
                </div>
                <Carousel.Caption style={{color:'#000'}} className="carousel_caption_me">
                <p >- Temiloluwa<br/>Manager </p>
                </Carousel.Caption>
            </Carousel.Item>
           
                
            </Carousel>
       </div>
    )
}

export default Index;
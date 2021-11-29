import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import Iframe from 'react-iframe'
const Index = ()=>{
    return (
        <div className="Contact_map">
            {/* <MapContainer center={[9.0778, 8.6775]} zoom={6} scrollWheelZoom={false}>
                <TileLayer
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={[6.442735, 3.462623]}>
                    <Popup>
                    Plot 13 Block 125c,<br/> Abayomi durosinmi, Oniru Lekki Lagos
                    </Popup>
                </Marker>
            </MapContainer> */}
            {/* <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15858.900063825005!2d3.463236634912074!3d6.4293619999999905!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103bf5a593be9def%3A0x5bba2956c5bbad6d!2s13%20Abayomi%20Durosinmi-Etti%20St%2C%20Eti-Osa%20106104%2C%20Lagos!5e0!3m2!1sen!2sng!4v1637533660725!5m2!1sen!2sng" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy">

            </iframe> */}
            <Iframe url="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15858.900063825005!2d3.463236634912074!3d6.4293619999999905!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103bf5a593be9def%3A0x5bba2956c5bbad6d!2s13%20Abayomi%20Durosinmi-Etti%20St%2C%20Eti-Osa%20106104%2C%20Lagos!5e0!3m2!1sen!2sng!4v1637533660725!5m2!1sen!2sng"
                width='100%'
                height="100%"
                id="myId"
                className="myClassname"
                display="initial"
                loading="lazy"
                position="relative"/>
        </div>
        
    )
}

export default Index;
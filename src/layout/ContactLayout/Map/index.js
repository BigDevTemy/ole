import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
const Index = ()=>{
    return (
        <div className="Contact_map">
            <MapContainer center={[9.0778, 8.6775]} zoom={6} scrollWheelZoom={false}>
                <TileLayer
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={[6.442735, 3.462623]}>
                    <Popup>
                    Plot 13 Block 125c,<br/> Abayomi durosinmi, Oniru Lekki Lagos
                    </Popup>
                </Marker>
            </MapContainer>
        </div>
        
    )
}

export default Index;
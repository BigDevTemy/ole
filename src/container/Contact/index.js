import React, { useEffect } from "react";
import Header from '../../component/header'
import Footer from '../../component/footer'
import ContactLayout from "../../layout/ContactLayout";
import ContactMain from '../../layout/ContactLayout/ContactusMain'
import Map from '../../layout/ContactLayout/Map'


const Index = ()=>{
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
    return (
        <div>
            <Header contact_header="NavScroll"/>
            <Map/>
            
            <ContactMain/>
            {/* <Map/> */}
            <Footer/>

            
        </div>
    )
}
export default Index;
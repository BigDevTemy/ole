import React from "react";
import Header from '../../component/header'
import Footer from '../../component/footer'
import Testimonia from '../../layout/HomeUILayout/Testimonia'
import ServicesLayout from "../../layout/ServicesLayout";
import ServicesMain from "../../layout/ServicesLayout/ServicesMain";

const Index = ()=>{
    return (
        <div>
            <Header/>
            <ServicesLayout/>
            <ServicesMain/>
            {/* <Testimonia/> */}
            <Footer/>
        </div>
    )
}
export default Index;
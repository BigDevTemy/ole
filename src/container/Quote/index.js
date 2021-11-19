import React from "react";
import Footer from '../../component/footer'
import Header from '../../component/header'
import QuoteLayout from '../../layout/QuoteLayout'
import Quote from '../../layout/QuoteLayout/Quote'
const Index = ()=>{
    return (
        <div>
            <Header/>
            <QuoteLayout/>
            <Quote/>
            <Footer/>

        </div>
    )
}
export default Index;
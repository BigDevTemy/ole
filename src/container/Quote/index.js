import React, { useEffect } from "react";
import Footer from '../../component/footer'
import Header from '../../component/header'
import QuoteLayout from '../../layout/QuoteLayout'
import Quote from '../../layout/QuoteLayout/Quote'
const Index = ()=>{
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
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
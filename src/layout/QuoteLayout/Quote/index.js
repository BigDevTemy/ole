import React, { useContext, useState } from "react";
import { Form,FloatingLabel,Row,Col } from "react-bootstrap";
import { GlobalContext } from "../../../context/Provider";
import { ToastContainer, toast } from 'react-toastify';
import sendQuote from '../../../context/actions/sendquote'
const Index = ()=>{
    const {quoteState,quoteDispatch} = useContext(GlobalContext)

    const {contact:{loading}} = quoteState;
    const {contact:{submit_disable}} = quoteState;
    const {contact:{data}} = quoteState;
    const [fullname,setfullname]=useState();
    const [phonenumber,setphonenumber]=useState();
    const [company,setcompany]=useState();
    const [position,setposition]=useState();
    const [request,setrequest]=useState();

    const handlefullname=(e)=>{
        setfullname(e.target.value)
    }
    const handleMobile=(e)=>{
        setphonenumber(e.target.value)
    }   
    const handleCompany=(e)=>{
        setcompany(e.target.value)
    }
    const handlePosition=(e)=>{
        setposition(e.target.value)
    }
    const handleRequest =(e)=>{
        setrequest(e.target.value)
    }

    const sendquote =(e)=>{
        e.preventDefault();
        
       if(fullname !="" && fullname !== undefined && phonenumber!="" && phonenumber!= undefined && position!="" && position!= undefined && company!="" && company!= undefined && request!="" && request!= undefined){
           
        const item = {
            fullname:fullname,
            phonenumber:phonenumber,
            company:company,
            position:position,
            request:request,

        }
        
        sendQuote(item)(quoteDispatch);
        if(data){
            if(data.message === "Quotation Sent"){
                // console.log('dataMessage',data)
                toast.success("Your Quotation Request has been  Submitted");
                setfullname(' ')
                setphonenumber(' ')
                setposition(' ')
                setcompany(' ')
                setrequest('')
            }
            else{
                console.log('data',data)
                toast.error("An Error Occurred");
            }
        }
            
       }
      
    }

    return(
        <div className="myquote">
            <div className="myquote_1">
                <div classname="small_Title">REQUEST FOR QUOTE</div>
                <h1>Request For A Quote</h1>
                <ToastContainer />
                <Form className="text-align-left" >
                        
                        {/* <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label >Fullname</Form.Label>
                            <Form.Control type="text" placeholder="Fullname" required/>
                        </Form.Group> */}
                        
                        <FloatingLabel className="mb-2" controlId="floatingPassword" label="Fullname">
                            <Form.Control type="text" placeholder="Fullname" onChange={handlefullname}  value={fullname}/>
                        </FloatingLabel>

                        <FloatingLabel  className="mb-2" controlId="floatingPassword" label="Mobile Number">
                            <Form.Control type="number" placeholder="Mobile Number" onChange={handleMobile} value={phonenumber} />
                        </FloatingLabel>
                        
                        <Row className="g-2">
                            <Col md>
                                <FloatingLabel  className="mb-2" controlId="floatingPassword" label="Company Name">
                                    <Form.Control type="text" placeholder="Company Name" onChange={handleCompany} value={company} />
                                </FloatingLabel>
                            </Col>
                            <Col md>
                                <FloatingLabel  className="mb-2" controlId="floatingPassword" label="Position">
                                    <Form.Control type="text" placeholder="Position" onChange={handlePosition} value={position} />
                                </FloatingLabel>
                            </Col>
                        </Row>

                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                            <Form.Label>Request</Form.Label>
                            <Form.Control as="textarea" rows={3} onChange={handleRequest} value={request}/>
                        </Form.Group>

                        <Form.Group className="" controlId="exampleForm.ControlTextarea1">
                            
                            <Form.Control type="submit" value="Submit" disabled={loading}  className="btn btn-success" onClick={sendquote} />
                        </Form.Group>
                    </Form>
            </div>

            <div className="myquote_2">
                    <div class="card mycard shadow-lg">
                        <div class="card-body">
                            <h5 class="card-title my-card-title whatwedo_small">OR CALL US NOW</h5>
                            <h6 class="card-subtitle mb-2  my-card-subtitled">+234-904-000-6000</h6>
                            <h6 class="card-subtitle mb-2  my-card-subtitled">+234-813-062-9103</h6>
                            <p class="card-text my-card-text">
                                Our Support team is available to meet your need.
                                <br/>
                                
                            </p>
                            
                        </div>
                    </div>
            </div>
        </div>
    )
}

export default Index;
// import Button from "@restart/ui/esm/Button";
import React, { useState,useContext } from "react";
import {Form,FloatingLabel,Row,Col} from 'react-bootstrap';
import { GlobalContext } from "../../../context/Provider";
import sendContact from "../../../context/actions/sendmessage";
import { ToastContainer, toast } from 'react-toastify';
const Index=()=>{

    const {contactState,contactDispatch} = useContext(GlobalContext)
    const {contact:{loading}} = contactState;
    const {contact:{submit_disable}} = contactState;
    const {contact:{data}} = contactState;
    const [fullname, setfullname] = useState();
    const [phonenumber, setphonenumber] = useState();
    const [message, setmessage] = useState();
    const [fname_error, setfname_error] = useState();
    const [phonenumber_error, setphonenumber_error] = useState();
    const [message_error, setmessage_error] = useState();
    
    const handlefullname = (e)=>{
        setfullname(e.target.value)
    }
    const handlemessage = (e)=>{
        setmessage(e.target.value)
    }
    const handlephonenumber = (e)=>{
        
        setphonenumber(e.target.value)
    }

    const sendmessage =(e)=>{
        e.preventDefault();
        
       if(fullname !="" && fullname !== undefined && phonenumber!="" && phonenumber!= undefined && message!="" && message!= undefined){
           
        const item = {
            fullname:fullname,
            phonenumber:phonenumber,
            message:message
        }
        
        sendContact(item)(contactDispatch);
        if(data){
            if(data.message === "Message Sent"){
                console.log('data',data)
                toast.success("Thanks for reaching out to us");
                setfullname(' ')
                setphonenumber(' ')
                setmessage('')
            }
            else{
                console.log('data',data)
                toast.error("An Error Occurred");
            }
        }
            
       }
      
    }
    return (
        <div className="quoteDiv">
            <div className="quoteMainDiv">

                <div className="form"> 
                    <div className="whatwedo_small">SEND US A MESSAGE</div>
                    <div className="getInTouch">Get In Touch</div>
                    <ToastContainer />
                    <Form className="text-align-left" >
                        
                        {/* <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label >Fullname</Form.Label>
                            <Form.Control type="text" placeholder="Fullname" required/>
                        </Form.Group> */}
                        
                        <FloatingLabel className="mb-2 " controlId="floatingPassword" label="Fullname">
                            <Form.Control type="text" placeholder="Fullname"  className="FloatingLabel" onChange={handlefullname} value={fullname} />
                        </FloatingLabel>

                        <FloatingLabel  className="mb-2" controlId="floatingPassword" label="Mobile Number">
                            <Form.Control type="number" placeholder="Mobile Number" onChange={handlephonenumber} value={phonenumber} />
                        </FloatingLabel>

                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                            <Form.Label>Message</Form.Label>
                            <Form.Control as="textarea" rows={3} onChange={handlemessage} value={message}/>
                        </Form.Group>

                        <Form.Group className="" controlId="exampleForm.ControlTextarea1">
                            
                            <Form.Control type="submit" value="Contact Us"  className="btn btn-success" onChange={sendmessage} disabled={loading}  />
                        </Form.Group>
                    </Form>
                </div>

                <div className="formText">
                    <div className="whatwedo_small">CONTACT US</div>
                
                    <div class="card mycard shadow-lg">
                        <div class="card-body">
                            <h4 class="card-title my-card-title whatwedo_small">OR CALL US NOW</h4>
                            <h3 class="card-subtitle mb-2  my-card-subtitled">+234-904-000-6000</h3>
                            <h3 class="card-subtitle mb-2  my-card-subtitled">+234-813-062-9103</h3>
                            <p class="card-text my-card-text">
                                Our Support team is available to meet your need.
                                <br/>
                                
                            </p>
                            
                        </div>
                    </div>
                
                </div>
            </div>
        </div>
    )
}

export default Index;
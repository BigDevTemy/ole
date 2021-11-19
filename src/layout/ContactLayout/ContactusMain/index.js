import React, { useContext, useEffect, useState } from "react";
import * as Icon from 'react-bootstrap-icons'
import { Form,FloatingLabel } from "react-bootstrap";
import { GlobalContext } from "../../../context/Provider";
import sendContact from "../../../context/actions/sendmessage";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Index = ()=>{
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
        <div className="contactusMain">
            <div className="contactmain_1">
                <div className="small_Title align_small_title">CONTACT US</div>
                <h1>Contact Us</h1>

                <table>
                    <tr>
                        <td><Icon.TelephonePlus size="20" color="#1eae98"/>  </td>
                        <td>
                            <div className="small_Title align_small_title">PHONE NUMBER</div>
                            <a style={{textDecoration:'none',color:'#000'}}  href="tel:234-904-000-6000">+234-904-000-6000</a> 
                        </td>
                    </tr>
                    <tr>
                        <td><Icon.Envelope size="20" color="#1eae98"/>  </td>
                        <td><div className="small_Title align_small_title">EMAIL</div>
                                <a style={{textDecoration:'none',color:'#000'}} href="malito:contact@oceanlink.ng">contact@oceanlink.ng</a>
                        </td>
                    </tr>
                    <tr>
                        <td><Icon.GeoAltFill size="20" color="#1eae98"/>  </td>
                        <td><div className="small_Title align_small_title">LOCATION</div>
                                Plot 13 Block 125c, Abayomi durosinmi,<br/> Oniru Lekki Lagos.
                        </td>
                    </tr>
                    <tr>
                        <td><Icon.Whatsapp size="20" color="#1eae98"/>  </td>
                        <td><div className="small_Title align_small_title">SOCIAL MEDIA</div>
                                <a style={{textDecoration:'none',color:'#000'}}  href="https://wa.me/2349040006000">+2349040006000</a>
                        </td>
                    </tr>
                </table>
            </div>

            <div className="contactmain_2">
                <div className="whatwedo_small">SEND US A MESSAGE</div>
                <div className="getInTouch">Get In Touch</div>
                <ToastContainer />
                <Form className="text-align-left" >
                    
                    {/* <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label >Fullname</Form.Label>
                        <Form.Control type="text" placeholder="Fullname" required/>
                    </Form.Group> */}
                    
                    <FloatingLabel className="mb-2" controlId="floatingPassword" label="Fullname">
                        <Form.Control type="text" placeholder="Fullname" onChange={handlefullname} value={fullname} required />
                       
                    </FloatingLabel>

                    <FloatingLabel  className="mb-2" controlId="floatingPassword" label="Mobile Number">
                        <Form.Control type="number" placeholder="Mobile Number" onChange={handlephonenumber} value={phonenumber} required />
                      
                    </FloatingLabel>
                    
                    {/* <Row className="g-2">
                        <Col md>
                            <FloatingLabel  className="mb-2" controlId="floatingPassword" label="Company Name">
                                <Form.Control type="text" placeholder="Company Name" />
                            </FloatingLabel>
                        </Col>
                        <Col md>
                            <FloatingLabel  className="mb-2" controlId="floatingPassword" label="Position">
                                <Form.Control type="text" placeholder="Position" />
                            </FloatingLabel>
                        </Col>
                    </Row> */}

                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Message</Form.Label>
                        <Form.Control as="textarea" rows={3} onChange={handlemessage} value={message} required/>
                        
                    </Form.Group>

                    <Form.Group className="" controlId="exampleForm.ControlTextarea1">
                        
                        <Form.Control type="submit" value="Submit"  className="btn btn-success" onClick={sendmessage}  disabled={loading} />
                    </Form.Group>
                </Form>
            </div>

          
        </div>
    )
}

export default Index;
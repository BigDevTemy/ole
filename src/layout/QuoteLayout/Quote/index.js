import React from "react";
import { Form,FloatingLabel,Row,Col } from "react-bootstrap";
const Index = ()=>{
    return(
        <div className="myquote">
            <div className="myquote_1">
                <div classname="small_Title">REQUEST FOR QUOTE</div>
                <h1>Request For A Quote</h1>
                <Form className="text-align-left" >
                        
                        {/* <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label >Fullname</Form.Label>
                            <Form.Control type="text" placeholder="Fullname" required/>
                        </Form.Group> */}
                        
                        <FloatingLabel className="mb-2" controlId="floatingPassword" label="Fullname">
                            <Form.Control type="text" placeholder="Fullname" />
                        </FloatingLabel>

                        <FloatingLabel  className="mb-2" controlId="floatingPassword" label="Mobile Number">
                            <Form.Control type="number" placeholder="Mobile Number" />
                        </FloatingLabel>
                        
                        <Row className="g-2">
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
                        </Row>

                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                            <Form.Label>Request</Form.Label>
                            <Form.Control as="textarea" rows={3} />
                        </Form.Group>

                        <Form.Group className="" controlId="exampleForm.ControlTextarea1">
                            
                            <Form.Control type="submit" value="Submit"  className="btn btn-success" />
                        </Form.Group>
                    </Form>
            </div>

            <div className="myquote_2">
                    <div class="card mycard shadow-lg">
                        <div class="card-body">
                            <h5 class="card-title my-card-title whatwedo_small">OR CALL US NOW</h5>
                            <h6 class="card-subtitle mb-2  my-card-subtitled">234-904-000-6000</h6>
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
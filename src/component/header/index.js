import React, { useEffect, useState } from "react";
import logo from '../../assets/images/1.png'
import * as Icon from 'react-bootstrap-icons';
import { Link,useLocation } from "react-router-dom";
import { Navbar,Container,Nav,NavDropdown,Image } from "react-bootstrap";
const Index = ({contact_header})=>{
    const location = useLocation();
    // console.log('location',location.pathname.replace('/',''))
    
    const [scroll,setscrollPosition] = useState(0);
    const handleScroll = () => {
        const position = window.pageYOffset;
        setscrollPosition(position)
        
    };
    
    const trim = location.pathname.replace('/','').trim() === "" ? 'home' : location.pathname.replace('/','').trim()
   
    useEffect(()=>{
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    },[])
    return(
        
            <div className="divHeader">
                {contact_header &&
                    <Navbar collapseOnSelect expand="lg" className={scroll === 0 ? 'Navbar': 'NavScroll'} fixed="top" >
                    <Container>
                        <Navbar.Brand href="#home" className="logoDiv">
                            <Image src={logo}  className="logo"/>
                            <div><span className="logo_text">OceanLink</span> <span className="logo_text_2">Express</span></div>
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="me-auto">
                                
                            {/* <Nav.Link href="#features">Features</Nav.Link>
                            <Nav.Link href="#pricing">Pricing</Nav.Link>
                            <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                            </NavDropdown> */}
                            </Nav>
                            <Nav>
                                <Nav.Link href="/"  className={scroll=== 0 ?'NavRight':'NavRightScroll'} >HOME</Nav.Link>
                                <Nav.Link href="/about_us"  className={scroll=== 0 ?'NavRight':'NavRightScroll'} >ABOUT US</Nav.Link>
                                <Nav.Link href="/services"  className={scroll=== 0 ?'NavRight':'NavRightScroll'}>SERVICES</Nav.Link>
                                <Nav.Link href="/contact_us"  className={scroll=== 0 ?'NavRight':'NavRightScroll'}>CONTACT</Nav.Link>
                                <Nav.Link href="https://wa.me/2349040006000"  className={scroll=== 0 ?'NavRight':'NavRightScroll'}><Icon.Whatsapp  color={scroll===0? 'white':'green'} size="20"/> </Nav.Link>
                                <Nav.Link href="/request_for_quote"  className={scroll=== 0 ?'NavRight':'NavRightScroll'}>QUOTE</Nav.Link>
                          
                            
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
                    
                }

                {contact_header ?
                    <Navbar collapseOnSelect expand="lg"  variant="dark" className={scroll === 0 ? 'NavContact': 'NavContactScroll'} fixed="top" >
                    <Container>
                        <Navbar.Brand href="/" className="logoDiv">
                            <Image src={logo}  className="logo"/>
                            <div><span className="logo_text" style={{color:'#fff'}}>OceanLink</span> <span className="logo_text_2">Express</span></div>
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav" >
                            <Nav className="me-auto">
                                
                            {/* <Nav.Link href="#features">Features</Nav.Link>
                            <Nav.Link href="#pricing">Pricing</Nav.Link>
                            <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                            </NavDropdown> */}
                            </Nav>
                            <Nav>
                                <Link to="/" className='NavRight' >HOME</Link>
                                <Link to="/about_us"  className='NavRight'>ABOUT US</Link>
                                <Link to="/services" className='NavRight'  >SERVICES</Link>
                                <Link to="/contact_us" className='NavRight' >CONTACT</Link>
                                <a href="https://wa.me/2349040006000" target="_blank" className='NavRight'><Icon.Whatsapp  color={scroll===0? 'white':'green'} size="20"/></a>
                                <Link to="/request_for_quote"  className="NavRight">QUOTE</Link>
                                
{/* 
                                <Nav.Link href="/"  className={scroll=== 0 ?'NavRight':'NavRightScroll'}>HOME</Nav.Link>
                                <Nav.Link href="/about_us"  className={scroll=== 0 ?'NavRight':'NavRightScroll'} >ABOUT US</Nav.Link>
                                <Nav.Link href="/services"  className={scroll=== 0 ?'NavRight':'NavRightScroll'}>SERVICES</Nav.Link>
                                <Nav.Link href="/contact_us"  className={scroll=== 0 ?'NavRight':'NavRightScroll'}>CONTACT</Nav.Link>
                                <Nav.Link href="https://wa.me/2349040006000"  className={scroll=== 0 ?'NavRight':'NavRightScroll'}><Icon.Whatsapp  color={scroll===0? 'white':'green'} size="20"/> </Nav.Link>
                                <Nav.Link href="/request_for_quote"  className={scroll=== 0 ?'NavRight':'NavRightScroll'}>QUOTE</Nav.Link> */}
                        
                            
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
                :
                    <Navbar collapseOnSelect expand="lg" className={scroll === 0 ? 'Navbar ': 'NavScroll '} fixed="top" >
                    <Container>
                        <Navbar.Brand href="/" className="logoDiv">
                            <Image src={logo}  className="logo"/>
                            <div><span className="logo_text">OceanLink</span> <span className="logo_text_2">Express</span></div>
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="me-auto">
                                
                            {/* <Nav.Link href="#features">Features</Nav.Link>
                            <Nav.Link href="#pricing">Pricing</Nav.Link>
                            <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                            </NavDropdown> */}
                            </Nav>
                            <Nav>
                                <Link to="/" className={scroll=== 0 ? 'NavRight':'NavRightScroll'} >HOME</Link>
                                <Link to="/about_us"  className={scroll=== 0  ? 'NavRight':'NavRightScroll'}>ABOUT US</Link>
                                <Link to="/services" className={scroll=== 0  ?'NavRight':'NavRightScroll'}  >SERVICES</Link>
                                <Link to="/contact_us" className={scroll=== 0 ?'NavRight':'NavRightScroll'} >CONTACT</Link>
                                <a href="https://wa.me/2349040006000" className={scroll=== 0 ?'NavRight':'NavRightScroll'}><Icon.Whatsapp  color={scroll===0? 'white':'green'} size="20"/></a>
                                {/* <Nav.Link href="/"  className={scroll=== 0 ?'NavRight':'NavRightScroll'}>HOME</Nav.Link>
                                <Nav.Link href="/about_us"  className={scroll=== 0 ?'NavRight':'NavRightScroll'} >ABOUT US</Nav.Link>
                                <Nav.Link href="/services"  className={scroll=== 0 ?'NavRight':'NavRightScroll'}>SERVICES</Nav.Link>
                                <Nav.Link href="/contact_us"  className={scroll=== 0 ?'NavRight':'NavRightScroll'}>CONTACT</Nav.Link>
                                <Nav.Link href="https://wa.me/2349040006000"  className={scroll=== 0 ?'NavRight':'NavRightScroll'}><Icon.Whatsapp  color={scroll===0? 'white':'green'} size="20"/> </Nav.Link> */}
                                <Link to="/request_for_quote"  className={scroll=== 0 ?'NavRight':'NavRightScroll'}>QUOTE</Link>
                               
                            
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
                    
                }
                


            </div>
        
        
    )
}

export default Index;
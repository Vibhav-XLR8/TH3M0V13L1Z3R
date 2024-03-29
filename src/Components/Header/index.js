import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from "react-router-dom";
const HeaderComponents = () => {
    const navData = [
        {name:'Home', link:'/'},
        {name:'Movies', link:'/movies'},
        {name:'Webseries', link:'/series'},
        {name:'Search', link:'/search'},
        {name:'Contact Us', link:'/contact'},
        {name:'About', link:'/about'}
        // {name:'*', link:'/'}
         ]
    return (
        <header className="header">
            <Navbar bg="dark" expand="lg">
                <Container>
                    <Navbar.Brand>TH3M0V13L1Z3R</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll"/>
                    <Navbar.Collapse id="navbarScroll">

                        <Nav className="me-aut my-2 my-lg-0"
                                style={{maxHeight: '100px'}}
                                navbarScroll>
                                    {
                                        navData.map((item)=>{
                                            return(
                                                <Nav key={item.name}>
                                                    <Link to={item.link}>{item.name}</Link>
                                                </Nav>
                                            )
                                        })
                                    }
                        </Nav>
                    </Navbar.Collapse> 
                </Container>
            </Navbar>
        </header>
    )
}

export default HeaderComponents;
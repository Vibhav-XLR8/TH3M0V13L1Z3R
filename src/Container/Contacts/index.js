import  React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';
import {  BsLinkedin, BsTwitter, BsGithub, BsYoutube, BsInstagram } from "react-icons/bs";
import './style.css';
const  ContactContainer = ()=>{
    const myData = [
        {name:'Instagram', link:'https://www.instagram.com/vibhav_tiwari_11/', text:'Follow to my Instagram.'},
        {name:'Linkedin', link:'https://www.linkedin.com/in/vibhav-tiwari-11v/', text:'Follow to my linkedin.'},
        {name:'Twitter', link:'https://twitter.com/TH3XLR8', text:'Follow to my twitter.'},
        {name:'GitHub', link:'https://github.com/Vibhav-XLR8', text:'Follow to my github account.'},
        {name:'YouTube', link:'https://www.youtube.com/', text:'Follow to my youtube channel.'},
        {name:'Email', link:'mailto:vibhavtiwari011@gmail.com',  text:'write to me a mail'}
    ]
    return (
        <div className='contactWrap'>
        <Container>
            <Row>
                <Col>
                    <p>CONNECT WITH US</p>
                    <h1>Get in Touch</h1>
                </Col>
            </Row>
            <Row>
                <Col className='conectIcon'>
                    <ul className='socialIconsList'>
                        <li>
                            <a rel="noreferrer" href="https://www.instagram.com/vibhav_tiwari_11/" target="_blank">
                                <BsInstagram />
                            </a>
                        </li>
                        <li>
                            <a rel="noreferrer" href="https://www.linkedin.com/in/vibhav-tiwari-11v/" target="_blank">
                                <BsLinkedin />
                            </a>
                        </li>
                        <li>
                            <a rel="noreferrer" href="https://twitter.com/TH3XLR8" target="_blank">
                                <BsTwitter />
                            </a>
                        </li>
                        <li>
                            <a rel="noreferrer" href="https://github.com/Vibhav-XLR8" target="_blank">
                                <BsGithub />
                            </a>
                        </li>
                        <li>
                            <a rel="noreferrer" href="https://www.youtube.com/" target="_blank">
                                <BsYoutube />
                            </a>
                        </li> 
                    </ul>
                </Col>
            </Row>
            <Row>
                <Col>
                    <ListGroup className='contactList'>
                        {
                            myData && myData.length > 0 ? myData.map((item)=>{
                                return (
                                    <ListGroup.Item key={item.name}>
                                        <span>{item.text}</span>
                                        <a href={item.link} rel="noreferrer"  target="_blank">
                                            {item.link}
                                        </a>
                                    </ListGroup.Item>
                                )
                            }) : ''
                        }
                        
                    </ListGroup>
                </Col>
            </Row>
        </Container>
        </div>
    )
}

export default ContactContainer;
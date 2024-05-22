import React from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


export default function Footer (){
    return (
        
        <Row className='footer'>
          
          <img src={require ("../images/Twitter Icon.png")} alt='Twitter' className='footer-image'/>
      
          
          <img src={require ("../images/Facebook Icon.png")}  alt='Facebook' className='footer-image'/>
          
       
          <img src={require ("../images/Instagram Icon.png")}  alt='Instagram' className='footer-image'/>
         
        
          <img src={require ("../images/GitHub Icon.png")}  alt='GitHub' className='footer-image'/>
         
        </Row>
      

    );
}
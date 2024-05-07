import React from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


export default function Footer (){
    return (
        
        <Row className='footer'>
          
          <img src='https://i.imgur.com/QIrZWGIs.jpg' alt='Twitter' className='footer-image'/>
      
          
          <img src='https://i.imgur.com/QIrZWGIs.jpg' alt='Facebook' className='footer-image'/>
          
       
          <img src='https://i.imgur.com/QIrZWGIs.jpg' alt='Instagram' className='footer-image'/>
         
        
          <img src='https://i.imgur.com/QIrZWGIs.jpg' alt='GitHub' className='footer-image'/>
         
        </Row>
      

    );
}
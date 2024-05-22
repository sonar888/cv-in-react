import React from "react";
import Image from "./Image";
import Footer from "./Footer";
import Data from "../library/data"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';



export default function Info () {

    const dataElements = Data.map(item => {
        return (
            <Card className="width card-height height card-container"> 
            <Card.Body>
                <Card.Title className="card-title ">{item.name}</Card.Title>
                <Card.Subtitle className="card-subtitle1">{item.job}</Card.Subtitle>
                <Card.Subtitle className="card-subtitle2">{item.url}</Card.Subtitle>
                <Row className="buttons">
                    <Button variant="secondary" className="button email">{item.email}</Button>
                    <Button variant="primary" className="button linkedin">Linkedin</Button>
                </Row>
                <Card.Text className="text">
                    <h2>About</h2>
                    <p>{item.about}</p>
                    <h2>Interests</h2>
                    <p>{item.interests}</p>
                    {item.openForWok ? <p>I am open for work</p> : <p>Not interested</p> }
                </Card.Text>
                    
            </Card.Body>
        </Card> 
        )
    
      })

    return (


      <>
        <Image/>
        {dataElements}  
        <Footer/>
      
      </>
        
          
       
           
   
     
    );

}
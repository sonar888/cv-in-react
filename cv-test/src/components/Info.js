import React from "react";
// import Image from "./Image";
import Footer from "./Footer";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Container from "react-bootstrap/esm/Container";



export default function Info (props) {

    // function handleDelete (id) {
    //     setUserInformation (prevUserInformation => {
    //       return prevUserInformation.filter(item => item.id !== id)
    //     })
      
    //   }

    

    

    const dataElements = props.userInformation.map(item => {

      
        return (

            <div key={item.id}> 
                <Card  className="width card-height height card-container"> 

                
                <div className="width">
                    <img variant="top" src={item.src} alt="Italian Trulli" className="card-image"/>
                </div>
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
                    <Footer/>
                    <Button onClick={() => props.handleDelete(item.id)}>Delete</Button>
                </Card> 
               

                
            </div>
        )
    
      })

    return (


      <>
      <Container>
        {dataElements}  
      </Container>
        
        
        
      
      </>
        
          
       
           
   
     
    );

}
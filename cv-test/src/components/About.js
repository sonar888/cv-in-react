import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


export default function About () {
    return (
        <>
        <Card className="width card-height height card-container"> 
            <Card.Body>
                <Card.Title className="card-title ">Laura Smith</Card.Title>
                <Card.Subtitle className="card-subtitle1">Frontend Developer</Card.Subtitle>
                <Card.Subtitle className="card-subtitle2">laurasmith.website</Card.Subtitle>
                <Row className="buttons">
                    <Button variant="secondary" className="button email">Email</Button>
                    <Button variant="primary" className="button linkedin">Linkedin</Button>
                </Row>
                <Card.Text className="text">
                    <h2>About</h2>
                    <p>I am a frontend developer with a particular interest in making things simple and automating daily tasks. I try to keep up with security and best practices, and am always looking for new things to learn.</p>
                    <h2>Interests</h2>
                    <p>Food expert. Music scholar. Reader. Internet fanatic. Bacon buff. Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.</p>
                </Card.Text>
                    
            </Card.Body>
        </Card>
       
         </>
    );

}
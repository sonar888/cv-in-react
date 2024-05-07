import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


export default function Image () {
    return (
        <div className="width">
            <Card.Img variant="top" src="https://i.imgur.com/QIrZWGIs.jpg" alt="Italian Trulli" className="card-image"/>
        </div>
        
        
    );
}
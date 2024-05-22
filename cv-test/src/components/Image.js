import React from "react";


import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


export default function Image () {
    return (
        <div className="width">
            <img variant="top" src= {require ("../images/profile-pic.png")} alt="Italian Trulli" className="card-image"/>
        </div>
        
        
    );
}
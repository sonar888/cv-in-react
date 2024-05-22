// import logo from './logo.svg';
import './App.css';

import React from "react"

import Image from './components/Image';
import Footer from './components/Footer';
import Info from './components/Info';
import Form from './components/Form';
import Data from './library/data'

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'
import Stack from 'react-bootstrap/Stack';




function App() {

  const [userInformation, setUserInformation ] = React.useState(Data)
  const [showForm, setShowForm] = React.useState(true)

  function handleSubmit (data) {
    setUserInformation([
      ...userInformation, {
        ...data
      }

    ])

    setShowForm(false)    
    
}

console.log(userInformation)

 
  return (
    <>

    {showForm? <Form 
        userInformation={userInformation}
        handleClick={handleSubmit}
        /> : <Info/> }
    
      
        
        
        
        
      

      </>

   
  );
}

export default App;

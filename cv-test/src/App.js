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

  // localStorage.clear()


  function handleSubmit (data) {
    const index = userInformation.length
    const source = localStorage.getItem('image')
    console.log(data)
    setUserInformation([
      ...userInformation, {
        ...data,
        id : index+1,
        src: source
        
        
      }

    ])

    setShowForm(false) 
      

    
}

  // function handleSubmit ( data) {
  //   setUserInformation (prevUserInformation => {
  //     return {
  //       ...prevUserInformation,
  //       {}
  //     }
  //   })

    
     
    


function handleDelete (id) {
  setUserInformation (prevUserInformation => {
    return prevUserInformation.filter(item => item.id !== id)
  })

  console.log(userInformation)

  userInformation.length === 1 ? setShowForm(true) : setShowForm(false) 
  // for some reason the array still keeps 1 item event though everything is deleted on screen. this is why the userInformation.length === 1 instead of 0
  

}

console.log(userInformation)
 
  return (
    <>

      {showForm? 
        <Form 
          userInformation={userInformation}
          handleSubmit={handleSubmit}
          key = {userInformation}
          
        /> 
          
        : 
        
        <Info
          userInformation={userInformation}
          key = {userInformation}
          handleDelete={handleDelete}

        
        
        /> 
      }
  

   
    
      
        
        
        
        
      

      </>

   
  );
}

export default App;

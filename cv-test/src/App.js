

// This is an dynamic app to create online curriculum cards
// It uses React.js and Bootstrap components

import './App.css';
import React from "react"
import Info from './components/Info';
import Form from './components/Form';
import Data from './library/data'



function App() {

  const [userInformation, setUserInformation ] = React.useState(Data) // This stores the user information that will be displayed it starts as an empty array in the data.js file
  const [showForm, setShowForm] = React.useState(true) // This state allws the app to display the form ot not

// Since we use the state(s) in both the App.js file and in the children components, most of the functions are stored in the APP.js file to prevent the state with two different values
// and the functions as well as the states are passed down as props


// This function handles the submission of the information entered in Form.js ad uses formInput (from Form.js) as the data argument in the function
 
function handleSubmit (data) {

    const index = userInformation.length + 1 // We are using this line to determine the id (and index) of the next item we are about to add to the userInformation state
    const source = localStorage.getItem(index) // We use localStorage to store the image the user enters in Form.js, because of this it is important that the LS and userInformation have the same index/id
   
    setUserInformation([
      ...userInformation, {
        ...data,
        id : index,
        src: source 
      }
    ])
    setShowForm(false) // We stop displaying the form and show the card instead  
}


// This function handles the deletion of a user information card

function handleDelete (id) { // It uses the id of userInformation.id as an argument
  setUserInformation (prevUserInformation => {
    localStorage.removeItem(id)
    return prevUserInformation.filter(item => item.id !== id) // This is the same technique as mapping an array, except here it removes an element
  })

  console.log(userInformation)

  userInformation.length === 0 ? setShowForm(true) : setShowForm(false)

   
  // for some reason the array still keeps 1 item event though everything is deleted on screen. this is why the userInformation.length === 1 instead of 0
  

}





// What is displayed on the app page:
 
  return (
    <>

      {showForm?  // Is showForm value true? then display the Form.js; otherwise display Infor.js
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

    
      
      <button onClick={() => { // A button to clear all the LS elements, for testing purposes.
        localStorage.clear()
      }}>Clear LS</button>
    
    </> 
  );
}

export default App;

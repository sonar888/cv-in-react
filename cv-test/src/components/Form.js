// This is the form page: it displays the form, handles the form input and sends the information up to App.js where the the state is set. It uses props from App.js

import React, { useState } from "react";




export default function Form (props) {

    const [formInput, setformInput] = React.useState({ // This is an object with the information the user can provide
        id:"",
        firstName: "",
        lastName: "",
        email : "",
        website : "",
        about : "",
        interests: "",
        src: "",
        openToWork: false
 })

 

 // This first function handles the file input in the form. This is handled separately from the other form elements because the file is stored in localStorage.
 // The reason for LS is because we do not use a backend in this project

function handleFile (event) {
    const reader = new FileReader() 
    reader.addEventListener('load', ()=>{
        localStorage.setItem( props.userInformation.length + 1 ,reader.result) // This line ensures that the key for the LS for the image always atches the id in the userInformation object
    })
    reader.readAsDataURL(event.target.files[0]);
   
    console.log(localStorage)

}

    
// This function handles the input in the form fields and verifies the data with each keystroke.
function handleChange (event) {
    const {name, value, type, checked, files, file} = event.target

        setformInput (prevFormInput => {
            return {
                ...prevFormInput,
                [name] : type === "checkbox"? checked :  value
            }
        })      
}


// What is displayed on the app:
   
    return (
        <form className="form">
            <input 
                type="text"
                placeholder="First name"
                onChange={handleChange}
                name="firstName"
                value={formInput.firstName}
                className="form--field"
            />
            <input 
                type="text"
                placeholder="Last name"
                onChange={handleChange}
                name="lastName"
                value={formInput.lastName}
                className="form--field"
            />
            <input 
                type="email"
                placeholder="email"
                onChange={handleChange}
                name="email"
                 className="form--field"
                 value={formInput.email}
            />
            <input 
                type="text"
                placeholder="Your website"
                onChange={handleChange}
                name="website"
                className="form--field"
                value={formInput.website}
            />
            <textarea 
               
                placeholder="More about you"
                onChange={handleChange}
                name="about"
                 className="form--field"
                 value={formInput.about}
            />
            <textarea 
                
                placeholder="Your interests"
                onChange={handleChange}
                name="interests"
                className="form--field"
                value={formInput.interests}
            />

            <input
                type="file"
                name='src'
                onChange= {handleFile}
                value={formInput.src}
            
            />
           

            <label className="container--checkbox"> 
                <input 
                    type="checkbox"
                    placeholder="I am open to work"
                    onChange={handleChange}
                    name="openToWork"
                    checked = {formInput.openToWork}
                /> 
                
                <p>I am open to work</p>
            
            </label>

            <button className="form--button" 
                onClick={(event) => {
                    event.preventDefault()
                    props.handleSubmit (formInput)} // See App.js for the handleSubmit function
                    }

            > Send
                    
            </button>
            



        </form>
    )
}
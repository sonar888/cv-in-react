import React, { useState } from "react";
// import Button from 'react-bootstrap/Button';


export default function Form (props) {

    
    const [image, setImage] = React.useState({})
    const [formInput, setformInput] = React.useState({
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

 

function handleFile (event) {
    console.log(event.target.files[0])
    const reader = new FileReader()
    

    reader.addEventListener('load', ()=>{
        localStorage.setItem('image',reader.result)
    })
    reader.readAsDataURL(event.target.files[0]);
    // setImage(prevImage => {
    //     return {
    //         ...prevImage,
    //         event.target.files[0]
    //     }

    // })
    console.log(localStorage)

}

    

    function handleChange (event) {

        const {name, value, type, checked, files, file} = event.target

        if (type === file) {
            console.log("yes")
            // setImage(files[0])

    //         const reader = new FileReader()

    // // reader.addEventListener((load) => {
    // //     console.log(reader.result)
    // // })
           
    //         reader.readAsDataURL(image)
            
            

        } else {
            setformInput (prevFormInput => {
                return {
                    ...prevFormInput,
                    [name] : type === "checkbox"? checked :  value
                }
            })    


        }
        
        
        
    }

    

    

    // function handleSubmit (event) {
    //     event.preventDefault()

    //     const formData = new FormData();
    //     formInput.map (item =>
    //         formData.append(item, item)
    //     )
    //     ;
    //     // formData.append("text", form.text);
    //     console.log(formData)

    // }

   
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
            <button className="form--button" onClick={
                (event) => {event.preventDefault()
                props.handleSubmit (formInput)
                
            }
            
            }>Send</button>
            



        </form>
    )
}
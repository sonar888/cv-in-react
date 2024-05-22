import React from "react";
// import Button from 'react-bootstrap/Button';


export default function Form (props) {

    

    const [formData, setFormData] = React.useState({
        firstName: "",
        lastName: "",
        email : "",
        website : "",
        about : "",
        interests: "",
        openToWork: false
 })

    

    function handleChange (event) {

        const {name,
        value, type, checked} = event.target
        
        setFormData (prevFormData => {
            return {
                ...prevFormData,
                [name] : type === "checkbox"? checked :  
                value
            }
        })
        
    }
    return (
        <form className="form">
            <input 
                type="text"
                placeholder="First name"
                onChange={handleChange}
                name="firstName"
                value={formData.firstName}
                className="form--field"
            />
            <input 
                type="text"
                placeholder="Last name"
                onChange={handleChange}
                name="lastName"
                value={formData.lastName}
                className="form--field"
            />
            <input 
                type="email"
                placeholder="email"
                onChange={handleChange}
                name="email"
                 className="form--field"
                 value={formData.email}
            />
            <input 
                type="text"
                placeholder="Your website"
                onChange={handleChange}
                name="website"
                className="form--field"
                value={formData.website}
            />
            <textarea 
               
                placeholder="More about you"
                onChange={handleChange}
                name="about"
                 className="form--field"
                 value={formData.about}
            />
            <textarea 
                
                placeholder="Your interests"
                onChange={handleChange}
                name="interests"
                 className="form--field"
                 value={formData.interests}
            />
           

            <label className="container--checkbox"> 
                <input 
                    type="checkbox"
                    placeholder="I am open to work"
                    onChange={handleChange}
                    name="openToWork"
                    checked = {formData.openToWork}
                /> 
                
                <p>I am open to work</p>
            
            </label>
            <button className="form--button" onClick={(event) => {
                 
                 props.handleClick(formData)

            }
               
            }>Send</button>
            



        </form>
    )
}
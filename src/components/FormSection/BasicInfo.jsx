import '../../styles/FormCard.css'
import { useState } from 'react'

function BasicInfo({personalInfo, setPersonalInfo, onUpdate}){

    function handleInputChange(event){

        const inputField = event.target.name; //Which property the input/event came from
        const inputValue = event.target.value; //Value the input/event sent
    
        const newInput = {...personalInfo,[inputField]: inputValue} // Copy data into new object, overwrite only the field that triggered the change
        setPersonalInfo(newInput) 
    
    }

    return (
        <div className='basic-info-container' id='personal-info-card'>
            
            <div className="title-container">
                <h2>Personal Information</h2>
            </div>

            <form>
                <div className="input-group">
                    <label>Full Name</label>
                    <input 
                        type="text"
                        placeholder=''
                        name='name'
                        value={personalInfo.name}
                        onChange={handleInputChange}
                    />
                    
                </div>

                <div className="input-group">
                    <label>Email</label>
                    <input 
                        type="email"
                        name='email' 
                        value={personalInfo.email}
                        onChange={handleInputChange}
                        placeholder=''
                    />
                </div>
                
                <div className="input-group">
                    <label>Phone Number</label>
                    <input 
                        type="tel"
                        name='phoneNumber'
                        value={personalInfo.phoneNumber}
                        onChange={handleInputChange} 
                        placeholder=''
                    />
                </div>

                <div className="input-group">
                    <label>Linkedin</label>
                    <input 
                        type="url"
                        name='linkedin' 
                        value={personalInfo.linkedin}
                        onChange={handleInputChange}
                        placeholder=''
                    />
                </div>

                <div className="input-group">
                    <label>Github</label>
                    <input 
                        type="url"
                        name='github'
                        value={personalInfo.github}
                        onChange={handleInputChange} 
                        placeholder=''
                    />
                </div>

                <div className="button-container">
                    <button 
                        type="button" 
                        className="submit-btn"
                        onClick={onUpdate}
                    >
                        Submit
                    </button>
                </div>

            </form>
        </div>
    )
}

export default BasicInfo
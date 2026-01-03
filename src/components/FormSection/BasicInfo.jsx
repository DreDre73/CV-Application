import '../../styles/FormCard.css'
import { useState } from 'react'

function BasicInfo({personalInfo, handleInputChange, section}){

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
                        onChange={(e) => handleInputChange(section, e)}
                    />
                    
                </div>

                <div className="input-group">
                    <label>Email</label>
                    <input 
                        type="email"
                        name='email' 
                        value={personalInfo.email}
                        onChange={(e) => handleInputChange(section, e)}
                        placeholder=''
                    />
                </div>
                
                <div className="input-group">
                    <label>Phone Number</label>
                    <input 
                        type="tel"
                        name='phoneNumber'
                        value={personalInfo.phoneNumber}
                        onChange={(e) => handleInputChange(section, e)} 
                        placeholder=''
                    />
                </div>

                <div className="input-group">
                    <label>Linkedin</label>
                    <input 
                        type="url"
                        name='linkedin' 
                        value={personalInfo.linkedin}
                        onChange={(e) => handleInputChange(section, e)}
                        placeholder=''
                    />
                </div>

                <div className="input-group">
                    <label>Github</label>
                    <input 
                        type="url"
                        name='github'
                        value={personalInfo.github}
                        onChange={(e) => handleInputChange(section, e)}
                        placeholder=''
                    />
                </div>
            </form>
        </div>
    )
}

export default BasicInfo
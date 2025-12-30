import '../../styles/Page.css'
import { useState } from 'react'

function Page({personalInfo, education, skills, workExperience, projects}){

    return (
        <>  
            <div className="personal-info">
                <h1>{personalInfo.name}</h1>
                <h3>{personalInfo.email}</h3>
                <h3>{personalInfo.phoneNumber}</h3>
                <h3>{personalInfo.linkedin}</h3>
                <h3>{personalInfo.github}</h3>
            </div>

            <br />

            <div className="education">
                <h1>{education.schoolName}</h1>
                <h3>{education.degree}</h3>
                <h3>{education.startDate}</h3>
                <h3>{education.endDate}</h3>
            </div>

            <br />

            <div className="Skills">
                <ul>
                    <li>{skills.skill}</li>
                </ul>
            </div>

            <br />

            <div className="work-experience">
                <h3>{workExperience.company}</h3>
                <h3>{workExperience.position}</h3>
                <h3>{workExperience.jobDescription}</h3>
                <h3>{workExperience.startDate}</h3>
                <h3>{workExperience.endDate}</h3>
            </div>

            <br />

            <div className="projects">
                <h3>{projects.projectTitle}</h3>
                <h3>{projects.projectDescription}</h3>
                <h3>{projects.startDate}</h3>
                <h3>{projects.endDate}</h3>
            </div>
        </>
    )
}

export default Page
import { use, useState } from 'react'
import './styles/App.css'
import Header from './components/Header'
import BasicInfo from './components/FormSection/BasicInfo'
import Education from './components/FormSection/Education'
import WorkExperience from './components/FormSection/WorkExperience'
import Projects from './components/FormSection/Projects'
import Skills from './components/FormSection/Skills'
import Page from './components/PageSection/Page'

function App() {

// Use States  
  const [personalInfo, setPersonalInfo] = useState({
    name: "Andre Smith III",
    email: "10andre3rd@gmail.com",
    phoneNumber: "757-240-8902",
    linkedin: "link",
    github: "link#2"
  })

  const [education, setEducation] = useState({
    schoolName: "Virginia Commonwealth University",
    degree: "B.S. in Computer Science",
    startDate: "08-19-2021",
    endDate: "05-09-2025"
  })

  const [skills, setSkills] = useState({
    skill: "Java"
  })

  const [workExperience, setWorkExperience] = useState({
    company: "CGI Federal",
    position: "Software Developer Intern",
    jobDescription: "Blah blah blah I didnt really get to do anything.",
    startDate: "05-19-2024",
    endDate: "08-09-2024"
  })

  const [projects, setProjects] = useState({
    projectTitle: "CV Application",
    projectDescription: "Created a CV applicaiton using React. Currently working on it right now.",
  })


// Helper Functions
  function handleInputChange(section, event){

    const inputField = event.target.name; // Which property the input/event came from
    const inputValue = event.target.value; // Value the input/event sent

    const setters = { // mapping states to setters
      personalInfo: setPersonalInfo,
      education: setEducation,
      skills: setSkills,
      workExperience: setWorkExperience,
      projects: setProjects
    }

    const states = {  // object to hold diff states
      personalInfo,
      education,
      skills,
      workExperience,
      projects
    }

    const newValues = {...states[section], [inputField]: inputValue}

    setters[section](newValues)
}

// Return Statement/App Render
  return (
    <>  
      <div className="page-container">
          
          <div className="header">
            <Header />
          </div>

          <div className="pdf-container">
            <Page 
              personalInfo={personalInfo}
              education={education}
              skills={skills}
              workExperience={workExperience}
              projects={projects}
            />
          </div>

          <div className="form-container">
            <BasicInfo 
              personalInfo={personalInfo}
              setPersonalInfo={setPersonalInfo}
              handleInputChange={handleInputChange}
              section="personalInfo"
            />
            <Education 
              education={education}
              setEducation={setEducation}
              handleInputChange={handleInputChange}
              section="education"
            />
            <Skills 
              skills={skills}
              setSkills={setSkills}
              handleInputChange={handleInputChange}
              section="skills"
            />
            <WorkExperience 
              workExperience={workExperience}
              setWorkExperience={setWorkExperience}
              handleInputChange={handleInputChange}
              section="workExperience"
            />
            <Projects 
              projects={projects}
              setProjects={setProjects}
              handleInputChange={handleInputChange}
              section="projects"
            />
          </div>
          
      </div>      
    </>
  )
}

export default App

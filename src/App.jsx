import { useState } from 'react'
import './styles/App.css'

import Header from './components/Header'
import BasicInfo from './components/FormSection/BasicInfo'
import Education from './components/FormSection/Education'
import Skills from './components/FormSection/Skills'
import WorkExperience from './components/FormSection/WorkExperience'
import Projects from './components/FormSection/Projects'
import Page from './components/PageSection/Page'

function App() {
  /* -------------------- State -------------------- */

  const [personalInfo, setPersonalInfo] = useState({
    name: 'Andre Smith III',
    email: '10andre3rd@gmail.com',
    phoneNumber: '757-240-8902',
    linkedin: 'link',
    github: 'link#2',
  })

  const [educationItems, setEducationItems] = useState([
    {
      schoolName: 'VCU',
      degree: 'B.S. in Computer Science',
      startDate: '08-19-2021',
      endDate: '05-09-2025',
    },
  ])

  const [skillItems, setSkillItems] = useState([
    { skill: 'Java' },
    { skill: 'Python' },
    { skill: 'JavaScript' },
  ])

  const [workExperienceItems, setWorkExperienceItems] = useState([
    {
      company: 'CGI Federal',
      position: 'Software Dev Intern',
      jobDescription: 'Lowkey aint do shi',
      startDate: '05-19-2024',
      endDate: '08-11-2024',
    },
  ])

  const [projectItems, setProjectItems] = useState([
    {
      projectTitle: 'CV Project',
      projectDescription: "This is what I'm working on right now",
    },
  ])

  /* -------------------- Helpers -------------------- */

  function handleInputChange(section, event) {
    const { name, value } = event.target

    if (section === 'personalInfo') {
      setPersonalInfo((prev) => ({
        ...prev,
        [name]: value,
      }))
    }
  }

  /* -------------------- Render -------------------- */

  return (
    <div className="page-container">
      <div className="header">
        <Header />
      </div>

      <div className="pdf-container">
        <Page
          personalInfo={personalInfo}
          educationItems={educationItems}
          skillItems={skillItems}
          workExperienceItems={workExperienceItems}
          projectItems={projectItems}
        />
      </div>

      <div className="form-container">
        <BasicInfo
          personalInfo={personalInfo}
          handleInputChange={handleInputChange}
          section="personalInfo"
        />

        <Education
          educationItems={educationItems}
          setEducationItems={setEducationItems}
        />

        <Skills
          skillItems={skillItems}
          setSkillItems={setSkillItems}
        />

        <WorkExperience
          workExperienceItems={workExperienceItems}
          setWorkExperienceItems={setWorkExperienceItems}
        />

        <Projects
          projectItems={projectItems}
          setProjectItems={setProjectItems}
        />
      </div>
    </div>
  )
}

export default App

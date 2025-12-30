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

  const [personalInfo, setPersonalInfo] = useState({
    name: "Andre Smith III",
    email: "10andre3rd@gmail.com",
    phoneNumber: "757-240-8902",
    linkedin: "link",
    github: "link#2"
  })

  return (
    <>  
      <div className="page-container">
          
          <div className="header">
            <Header />
          </div>

          <div className="pdf-container">
            <Page personalInfo={personalInfo}/>
          </div>

          <div className="form-container">
            <BasicInfo 
              personalInfo={personalInfo}
              setPersonalInfo={setPersonalInfo}
            />
            <Education />
            <Skills />
            <WorkExperience />
            <Projects />
          </div>
          
      </div>      
    </>
  )
}

export default App

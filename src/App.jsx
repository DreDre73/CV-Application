import { useState } from 'react'
import './styles/App.css'
import Header from './components/Header'
import BasicInfo from './components/FormSection/BasicInfo'
import Education from './components/FormSection/Education'
import WorkExperience from './components/FormSection/WorkExperience'
import Projects from './components/FormSection/Projects'
import Skills from './components/FormSection/Skills'

function App() {
  

  return (
    <>  
      <div className="page-container">
          
          <div className="header">
            <Header />
          </div>

          <div className="form-container">
            <BasicInfo />
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

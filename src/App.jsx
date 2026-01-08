import { useState } from 'react'
import './styles/App.css'
import Header from './components/Header'
import BasicInfo from './components/FormSection/BasicInfo'
import Education from './components/FormSection/Education'
import Skills from './components/FormSection/Skills'
import WorkExperience from './components/FormSection/WorkExperience'
import Projects from './components/FormSection/Projects'
import MyDocument from './components/PageSection/ResumePDF'
import { PDFViewer } from '@react-pdf/renderer'

function App() {
  /* -------------------- State -------------------- */

  const [personalInfo, setPersonalInfo] = useState({
    name: 'John Doe',
    email: 'john.doe@example.com',
    phoneNumber: '555-123-4567',
    linkedin: 'https://www.linkedin.com/in/johndoe',
    github: 'https://github.com/johndoe',
  })

  const [educationItems, setEducationItems] = useState([
    {
      schoolName: 'State University',
    degree: 'Bachelor of Science in Computer Science',
    startDate: 'August 2021',
    endDate: 'August 2025',
    },
  ])

  const [skillItems, setSkillItems] = useState([
    { skill: 'Java' },
    { skill: 'Python' },
    { skill: 'JavaScript' },
    { skill: 'React' },
    { skill: 'Flask' },
    { skill: 'SQL' },
    { skill: 'HTML & CSS' },
    { skill: 'Git & GitHub' },
    { skill: 'Docker' },
    { skill: 'REST APIs' },
  
  ])

  const [workExperienceItems, setWorkExperienceItems] = useState([
    {
      company: 'Tech Solutions Inc.',
      position: 'Software Engineering Intern',
      startDate: 'June 2024',
      endDate: 'August 2024',
      jobDescription:
        'Contributed to the development of internal web tools using JavaScript and Python to streamline data processing workflows. Collaborated with a small Agile team to implement new features, fix bugs, and write technical documentation to support future development.',
    },
    {
      company: 'Campus IT Services',
      position: 'IT Support Assistant',
      startDate: 'September 2022',
      endDate: 'May 2023',
      jobDescription:
        'Provided technical support for students and faculty by troubleshooting hardware, software, and network issues. Assisted with system maintenance, account management, and documentation to improve support response times.',
    }
  ])

  const [projectItems, setProjectItems] = useState([
    {
      projectTitle: 'CV Builder Web Application',
      projectDescription:
        'Developed a responsive web application using React that allows users to create, edit, and preview resume content in real time. Implemented a clean, print-ready PDF layout using React PDF for professional output.',
    },
    {
      projectTitle: 'Task Management Dashboard',
      projectDescription:
        'Built a full-stack task management application with a React frontend and Flask backend. Implemented RESTful APIs for task management and persistent storage.',
    },
    {
      projectTitle: 'Data Visualization Tool',
      projectDescription:
        'Created an interactive data visualization tool using JavaScript and charting libraries to display trends from large datasets, focusing on usability and performance.',
    },
    {
      projectTitle: 'API Testing Dashboard',
      projectDescription:
        'Designed and implemented a web-based dashboard for running and visualizing automated API tests. Displays execution status and test results for quick analysis.',
    },
    {
      projectTitle: 'Personal Portfolio Website',
      projectDescription:
        'Built a responsive portfolio website to showcase projects, skills, and experience. Focused on clean UI design, accessibility, and maintainable components.',
    },
    {
      projectTitle: 'Restaurant Discovery Application',
      projectDescription:
        'Developed a mobile-friendly application allowing users to explore local restaurants by location and category, with search and map-based features for better user engagement.',
    }
  ])

  /* -------------------- Helper Function -------------------- */

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
        <PDFViewer className='pdf-viewer'>
          <MyDocument 
            personalInfo={personalInfo}
            educationItems={educationItems}
            skillItems={skillItems}
            workExperienceItems={workExperienceItems}
            projectItems={projectItems}
          />
        </PDFViewer>

        
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

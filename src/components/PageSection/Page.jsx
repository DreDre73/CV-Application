import '../../styles/Page.css'

function Page({
  personalInfo,
  educationItems,
  skillItems,
  workExperienceItems,
  projectItems,
}) {
  return (
    <>
      {/* Personal Info */}
      <div className="personal-info">
        <h1>{personalInfo.name}</h1>
        <h3>{personalInfo.email}</h3>
        <h3>{personalInfo.phoneNumber}</h3>
        <h3>{personalInfo.linkedin}</h3>
        <h3>{personalInfo.github}</h3>
      </div>

      <br />

      {/* Education */}
      <div className="education">
        {educationItems.map((item, index) => (
          <div key={index}>
            <p>{item.schoolName}</p>
            <p>{item.degree}</p>
            <p>{item.startDate}</p>
            <p>{item.endDate}</p>
          </div>
        ))}
      </div>

      <br />

      {/* Skills */}
      <div className="skills">
        {skillItems.map((item, index) => (
          <div key={index}>
            <p>{item.skill}</p>
          </div>
        ))}
      </div>

      <br />

      {/* Work Experience */}
      <div className="work-experience">
        {workExperienceItems.map((item, index) => (
          <div key={index}>
            <p>{item.company}</p>
            <p>{item.position}</p>
            <p>{item.jobDescription}</p>
            <p>{item.startDate}</p>
            <p>{item.endDate}</p>
          </div>
        ))}
      </div>

      <br />

      {/* Projects */}
      <div className="projects">
        {projectItems.map((item, index) => (
          <div key={index}>
            <p>{item.projectTitle}</p>
            <p>{item.projectDescription}</p>
          </div>
        ))}
      </div>
    </>
  )
}

export default Page

import '../../styles/FormCard.css'

function Projects({ projects, handleInputChange, section }) {
    return (
        <div className='basic-info-container' id='project-card'>
            <div className="title-container">
                <h2>Projects</h2>
            </div>

            <form>
                <div className="input-group">
                    <label>Project Title</label>
                    <input
                        type="text"
                        name="projectTitle"
                        value={projects.projectTitle}
                        onChange={(e) => handleInputChange(section, e)}
                    />
                </div>

                <div className="input-group">
                    <label>Project Description</label>
                    <textarea
                        type="text"
                        name="projectDescription"
                        value={projects.projectDescription}
                        onChange={(e) => handleInputChange(section, e)}
                    />
                </div>
            </form>
        </div>
    )
}

export default Projects

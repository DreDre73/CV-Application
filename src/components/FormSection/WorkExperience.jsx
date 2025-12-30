import '../../styles/FormCard.css'

function WorkExperience({ workExperience, handleInputChange, section }) {
    return (
        <div className='basic-info-container' id='work-experience-card'>
            <div className="title-container">
                <h2>Work Experience</h2>
            </div>

            <form>
                <div className="input-group">
                    <label>Company</label>
                    <input
                        type="text"
                        name="company"
                        value={workExperience.company}
                        onChange={(e) => handleInputChange(section, e)}
                    />
                </div>

                <div className="input-group">
                    <label>Position</label>
                    <input
                        type="text"
                        name="position"
                        value={workExperience.position}
                        onChange={(e) => handleInputChange(section, e)}
                    />
                </div>

                <div className="input-group">
                    <label>Job Description</label>
                    <textarea
                        type="text"
                        name="jobDescription"
                        value={workExperience.jobDescription}
                        onChange={(e) => handleInputChange(section, e)}
                    />
                </div>

                <div className="input-group">
                    <label>Start Date</label>
                    <input
                        type="date"
                        name="startDate"
                        value={workExperience.startDate}
                        onChange={(e) => handleInputChange(section, e)}
                    />
                </div>

                <div className="input-group">
                    <label>End Date</label>
                    <input
                        type="date"
                        name="endDate"
                        value={workExperience.endDate}
                        onChange={(e) => handleInputChange(section, e)}
                    />
                </div>
            </form>
        </div>
    )
}

export default WorkExperience

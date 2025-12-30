import '../../styles/FormCard.css'

function Education({ education, handleInputChange, section }) {
    return (
        <div className='basic-info-container' id='education-card'>
            <div className="title-container">
                <h2>Education</h2>
            </div>

            <form>
                <div className="input-group">
                    <label>School Name</label>
                    <input
                        type="text"
                        name="schoolName"
                        value={education.schoolName}
                        onChange={(e) => handleInputChange(section, e)}
                    />
                </div>

                <div className="input-group">
                    <label>Degree</label>
                    <input
                        type="text"
                        name="degree"
                        value={education.degree}
                        onChange={(e) => handleInputChange(section, e)}
                    />
                </div>

                <div className="input-group">
                    <label>Start Date</label>
                    <input
                        type="date"
                        name="startDate"
                        value={education.startDate}
                        onChange={(e) => handleInputChange(section, e)}
                    />
                </div>

                <div className="input-group">
                    <label>End Date</label>
                    <input
                        type="date"
                        name="endDate"
                        value={education.endDate}
                        onChange={(e) => handleInputChange(section, e)}
                    />
                </div>
            </form>
        </div>
    )
}

export default Education

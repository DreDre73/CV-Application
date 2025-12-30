import '../../styles/FormCard.css'

function Skills({ skills, handleInputChange, section }) {
    return (
        <div className='basic-info-container' id='skill-card'>
            <div className="title-container">
                <h2>Add Skills</h2>
            </div>

            <form>
                <div className="input-group">
                    <label>Skill</label>
                    <input
                        type="text"
                        name="skill"
                        value={skills.skill}
                        onChange={(e) => handleInputChange(section, e)}
                    />
                </div>
            </form>
        </div>
    )
}

export default Skills

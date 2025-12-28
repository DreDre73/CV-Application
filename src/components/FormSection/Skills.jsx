import '../../styles/FormCard.css'

function Skills(){
    return (
        <div className='basic-info-container' id='skill-card'>
            
            <div className="title-container">
                <h2>Add Skills</h2>
            </div>

            <form>
                <div className="input-group">
                    <label htmlFor="Skill">Skill</label>
                    <input type="text" placeholder=''/>
                </div>

                <div className="button-container">
                    <button type="button" className="submit-btn">Submit</button>
                </div>

            </form>
        </div>
    )
}

export default Skills
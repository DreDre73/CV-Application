import '../../styles/FormCard.css'

function Projects(){
    return (
        <div className='basic-info-container'>
            
            <div className="title-container">
                <h2>Projects</h2>
            </div>

            <form>
                <div className="input-group">
                    <label htmlFor="project-title">Project Title</label>
                    <input type="text" placeholder=''/>
                </div>

                <div className="input-group">
                    <label htmlFor="project-description">Project Description</label>
                    <input type="text" placeholder=''/>
                </div>

                <div className="button-container">
                    <button type="button" className="submit-btn">Submit</button>
                </div>

            </form>
        </div>
    )
}

export default Projects
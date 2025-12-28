import '../../styles/FormCard.css'

function WorkExperience(){
    return (
        <div className='basic-info-container'>
            
            <div className="title-container">
                <h2>Work Experience</h2>
            </div>

            <form>
                <div className="input-group">
                    <label htmlFor="job-title">Company</label>
                    <input type="text" placeholder=''/>
                </div>

                <div className="input-group">
                    <label htmlFor="position">Position</label>
                    <input type="text" placeholder=''/>
                </div>

                <div className="input-group">
                    <label htmlFor="job-description">Job Description</label>
                    <input type="text" placeholder=''/>
                </div>
                
                <div className="input-group">
                    <label htmlFor="start-date">Start Date</label>
                    <input type="date" placeholder=''/>
                </div>

                <div className="input-group">
                    <label htmlFor="end-date">End Date</label>
                    <input type="date" placeholder=''/>
                </div>

                <div className="button-container">
                    <button type="button" className="submit-btn">Submit</button>
                </div>

            </form>
        </div>
    )
}

export default WorkExperience
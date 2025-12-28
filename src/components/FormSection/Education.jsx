import '../../styles/FormCard.css'

function Education(){
    return (
        <div className='basic-info-container' id='education-card'>
            
            <div className="title-container">
                <h2>Education</h2>
            </div>

            <form>
                <div className="input-group">
                    <label htmlFor="school-name">School Name</label>
                    <input type="text" placeholder=''/>
                </div>

                <div className="input-group">
                    <label htmlFor="degree">Degree</label>
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

export default Education
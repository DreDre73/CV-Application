import '../../styles/FormCard.css'

function BasicInfo(){
    return (
        <div className='basic-info-container' id='personal-info-card'>
            
            <div className="title-container">
                <h2>Personal Information</h2>
            </div>

            <form>
                <div className="input-group">
                    <label htmlFor="name">Full Name</label>
                    <input type="text" placeholder=''/>
                </div>

                <div className="input-group">
                    <label htmlFor="email">Email</label>
                    <input type="email" placeholder=''/>
                </div>
                
                <div className="input-group">
                    <label htmlFor="phone-number">Phone Number</label>
                    <input type="tel" placeholder=''/>
                </div>

                <div className="input-group">
                    <label htmlFor="linkedin">Linkedin</label>
                    <input type="url" placeholder=''/>
                </div>

                <div className="input-group">
                    <label htmlFor="github">Github</label>
                    <input type="url" placeholder=''/>
                </div>

                <div className="button-container">
                    <button type="button" className="submit-btn">Submit</button>
                </div>

            </form>
        </div>
    )
}

export default BasicInfo
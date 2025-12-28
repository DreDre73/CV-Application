import '../styles/Header.css'

function Header(){

    return (
        <div className='header-container'>
            <h1 className="header-text">Generic CV Builder</h1>
            
            <ul className="navbar">
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
        </div>
    )
}

export default Header
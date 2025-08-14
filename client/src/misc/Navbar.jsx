import './Navbar.css'

function Navbar() {
    return (
        <nav className="navbar">
            <ul className="navbar-links">
                <li><a href="/">🏠︎</a></li>
                <li><p>•</p></li>
                <li><a href="/about">About</a></li>
                <li><a href="/services">Services</a></li>
                <li><a href="/contact">Contact</a></li>
                <li><p>•</p></li>
            </ul>
        </nav>
    )
}

export default Navbar
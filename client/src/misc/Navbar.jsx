import './Navbar.css'

function Navbar() {
    return (
        <nav className="navbar">
            <ul className="navbar-links">
                <li></li>
                <li><a href="/">🏠︎</a></li>
                <li><a href="/account">Account</a></li>
                <li><a href="/features">Features</a></li>
                <li><a href="/docs">Wiki</a></li>
                <li><a href="/demo">Live demo</a></li>
                <li><button class="navbar-button"> Download </button>
                </li>
                <li></li>
            </ul>
        </nav>
    )
}

export default Navbar
import { Link } from 'react-router-dom'
import './Navbar.css' // Ensure you have a CSS file for styling
const Navbar = () => {
    return (
        <div >
            <nav>
                <ul class="navbar">
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/service">Service</Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar
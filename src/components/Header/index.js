// Write your JS code here
import {Link} from 'react-router-dom'

import './index.css'

const Header = () => (
  <nav className="nav-bar">
    <ul className="nav-header">
      <li>
        <Link to="/" className="nav-item">
          Home
        </Link>
      </li>
      <li>
        <Link to="/about" className="nav-item">
          About
        </Link>
      </li>
    </ul>
  </nav>
)

export default Header

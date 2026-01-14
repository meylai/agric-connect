import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <h2>AgricConnect</h2>
      <div className="nav-links">
        <Link to="/buyer">Buyer</Link>
        <Link to="/farmer">Farmer</Link>
      </div>
    </nav>
  );
}

export default Navbar;

import { Link } from 'react-router-dom';
import { useState } from 'react';
import '../styles/Header.css';
import HomeIcon from '@mui/icons-material/Home';
import GroupIcon from '@mui/icons-material/Group';
import WorkIcon from '@mui/icons-material/Work';
import EmailIcon from '@mui/icons-material/Email';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import logo from './Photoroom-20240926_201156.png'

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav className="navbar">
        <div className="logo">
          <Link to="/">
            <img src={logo} alt="Logo" />
          </Link>
        </div>
        <ul className="nav-links">
          <li><Link to="/"><HomeIcon fontSize="large" /> Home</Link></li>
          <li><Link to="/team"><GroupIcon fontSize="large" /> Team</Link></li>
          <li><Link to="/projects"><WorkIcon fontSize="large" /> Projects</Link></li>
          <li><Link to="/contact"><EmailIcon fontSize="large" /> Contact</Link></li>
        </ul>
        <div className="menu-icon" onClick={toggleMenu}>
          <MenuIcon />
        </div>
      </nav>

      <div className={`side-drawer ${isOpen ? 'open' : ''}`}>
        <div className="menu-header">
          <span className="menu-text">Menu</span>
          <div className="close-icon" onClick={toggleMenu}>
            <CloseIcon />
          </div>
        </div>
        <ul className="drawer-links">
          <li><Link to="/" onClick={toggleMenu}><HomeIcon fontSize="large" /> Home</Link></li>
          <li><Link to="/team" onClick={toggleMenu}><GroupIcon fontSize="large" /> Team</Link></li>
          <li><Link to="/projects" onClick={toggleMenu}><WorkIcon fontSize="large" /> Projects</Link></li>
          <li><Link to="/contact" onClick={toggleMenu}><EmailIcon fontSize="large" /> Contact</Link></li>
        </ul>
      </div>
    </>
  );
}

export default Header;

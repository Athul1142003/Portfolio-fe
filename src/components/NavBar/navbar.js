import React, { useState } from 'react';
import './navbar.css';
import logo from '../../assets/logo.png';
import contactImg from '../../assets/contact.png';
import {Link} from 'react-scroll';
import menu from '../../assets/menu.png';

const NavBar = () => {
    const [showMenu, setShowMenu] = useState(false);
    return (
        <nav className="navbar">
            <img src={logo} alt="Logo" className="logo" />
            <div className="desktopMenu">
                <Link activeClass='active' spy={true} to='intro' smooth={true} offset={-100} duration={500} className="desktopMenuLinkItem">Home</Link>
                <Link activeClass='active' spy={true} to='skills' smooth={true} offset={-50} duration={500} className="desktopMenuLinkItem">About</Link>
                <Link activeClass='active' spy={true} to='works' smooth={true} offset={-50} duration={500} className="desktopMenuLinkItem">Projects</Link>
                <Link activeClass='active' spy={true} to='clients' smooth={true} offset={-50} duration={500} className="desktopMenuLinkItem">Clients</Link>
            </div>
            <button className="desktopMenuBtn" onClick={() => { document.getElementById('contact').scrollIntoView({ behavior: 'smooth' }); }}>
                <img src={contactImg} alt="Menu" className="desktopMenuImg" />Contact me</button>

                <img src={menu} alt="Menu" className="mobMenu" onClick={()=>setShowMenu(!showMenu)} />
            <div className="navMenu" style={{display: showMenu? 'flex':'none'}}>
                <Link activeClass='active' spy={true} to='intro' smooth={true} offset={-100} duration={500} className="listItem" onClick={()=>setShowMenu(false)}>Home</Link>
                <Link activeClass='active' spy={true} to='skills' smooth={true} offset={-50} duration={500} className="listItem" onClick={()=>setShowMenu(false)}>About</Link>
                <Link activeClass='active' spy={true} to='works' smooth={true} offset={-50} duration={500} className="listItem" onClick={()=>setShowMenu(false)}>Projects</Link>
                <Link activeClass='active' spy={true} to='clients' smooth={true} offset={-50} duration={500} className="listItem" onClick={()=>setShowMenu(false)}>Clients</Link>
                <Link activeClass='active' spy={true} to='contact' smooth={true} offset={-50} duration={500} className="listItem" onClick={()=>setShowMenu(false)}>Contact</Link>
            </div>
                </nav>
    );
};

export default NavBar;
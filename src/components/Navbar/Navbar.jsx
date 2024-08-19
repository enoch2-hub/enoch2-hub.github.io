import React from 'react';
import ReactDOM from 'react-dom';

const Navbar = (toggleMenu, click) => {
    const navlinks = (
        <>
          <div className="navbar">
            <div className='container'>
                <div className='nav-logo'>
                  <img className='nav-logo' src={require('./Assets/Images/Other/logo2.png')} alt="logo" />
                </div>
              <ul className={click ? "nav-menu active" : "nav-menu"}>
                <li><a onClick={() => scrollToSection('personal-projects')} href="#personal-projects">Personal Projects</a></li>
                {/* <li><a href="#work-projects">Work Projects-Fullstack</a></li> */}
                <li><a href="#fullstack">Fullstack MERN</a></li>
                <li><a href="#phpmysql">PHP & MySQL</a></li>
                <li><a href="#other-projects">Other Projects-Frontend</a></li>
                <li><a href="#tools">Tools</a></li>
                <li><a href="#mobileApps">Mobile Apps</a></li>
                <li><a href="#contact">Contact</a></li>
              </ul>
              <div className="hamburger" onClick={() => toggleMenu()}>
                {click ? <FaRegTimesCircle color='red'/> : <HiOutlineMenuAlt4/>}
              </div>
            </div>
          </div>
        </>
      );
  return (
    ReactDOM.createPortal(navlinks, document.getElementById('navbar-hook'))
  )
}

export default Navbar
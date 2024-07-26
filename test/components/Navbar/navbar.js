import './navbar.css';
import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function Link({ route, message, isActive, tooltip }) {
  return (
    <>
    <a
      className={`link ${isActive ? 'active' : ''}`}
      href={`/${route}`}
    >
      {message}
    </a>
    <div className="tooltip">
    {tooltip}
    </div>
    </>
  );

}

function Navbar() {
  const location = useLocation();
  const currentPath = location.pathname;

  useEffect(() => {
    const navbar = document.querySelector('.navbar');
    const content = document.querySelector('body');

    if (navbar && content) {
      const navbarHeight = navbar.offsetHeight;
      content.style.paddingTop = `${navbarHeight}px`;
    }

    const handleResize = () => {
      if (navbar && content) {
        const navbarHeight = navbar.offsetHeight;
        content.style.paddingTop = `${navbarHeight}px`;
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="navbar">
      <div className="title">
        Medication Tracker
      </div>
      <div>
        <Link route="" message="Home" isActive={currentPath === '/'} tooltip="This is the Home page" />
        <Link route="calendar" message="Calendar" isActive={currentPath === '/calendar'} tooltip="A calendar for your schedule" />
        <Link route="prescriptions" message="Prescriptions" isActive={currentPath === '/prescriptions' } tooltip="A summary of your prescriptions"/>
        <Link route="mail" message="Mails" isActive={currentPath === '/mail'} tooltip="A summary of your mail orders"/>
        <Link route="chat" message="Chat" isActive={currentPath === '/chat'} />
        <Link route="search" message="Search" isActive={currentPath === '/search'} />
      </div>
    </div>
  );
}

export default Navbar;

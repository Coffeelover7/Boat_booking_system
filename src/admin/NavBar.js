import React, { useEffect, useState } from 'react';
import './NavBar.css';
const NavBar = () => {
  const [dateTime, setDateTime] = useState('');

  useEffect(() => {
    // Update date and time every second
    const interval = setInterval(() => {
      const now = new Date();
      const date = now.toDateString();
      const time = now.toLocaleTimeString();
      setDateTime(`Date: ${date} Time: ${time}`);
    }, 1000);

    return () => {
      clearInterval(interval); // Clean up interval on component unmount
    };
  }, []);

  return (
    <nav className="navbar">
      <div className="navbar-content">
      <i className="fa-sharp fa-solid fa-bars" />
        <div className="website-name">Dashboard</div>
      </div>
      <div className="navbar-content">
        <div className="date-time">{dateTime}</div>
      </div>
    </nav>
  );
};

export default NavBar;

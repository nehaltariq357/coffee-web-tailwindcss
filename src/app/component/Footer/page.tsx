import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-column">
          <h1>Merchandise</h1>
          <ul>
            <li><a href="#link1">T-shirts</a></li>
            <li><a href="#link2">Caps</a></li>
            <li><a href="#link3">Caps</a></li>
          </ul>
        </div>
        <div className="footer-column">
          <h1>Franchise</h1>
          <ul>
            <li><a href="#link1">Coffee Outlet</a></li>
            <li><a href="#link2">Coffee Vending Machine</a></li>
            <li><a href="#link3">Contact us</a></li>
          </ul>
        </div>
        <div className="footer-column">
          <h1>About us</h1>
          <ul>
            <li><a href="#link1">Promotions</a></li>
            <li><a href="#link2">Customer Care</a></li>
            <li><a href="#link3">Legal information</a></li>
            <li><a href="#link3">Achievements</a></li>
            <li><a href="#link3">Careers</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

// Header.js
import React from 'react';
import { BiCalendar } from 'react-icons/bi';
import './Header.css'; // Import the CSS file

const Header = ({ onNavigate }) => {
  return (
    <header className="header bg-blue-900 text-white p-4 w-full mt-0">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <BiCalendar className="text-red-400 text-3xl md:text-4xl lg:text-5xl mr-2" />
          <h1 className="text-lg md:text-2xl lg:text-3xl font-bold">Appointments for Patients</h1>
        </div>
        <nav className="hidden md:flex space-x-4 text-sm md:text-base lg:text-lg">
          <button onClick={() => onNavigate('home')}>Home</button>
          <button onClick={() => onNavigate('otherPage')}>Data of Patients</button>
          <button onClick={() => onNavigate('instruction')}>Instructions</button>
          <button onClick={() => onNavigate('Help')}>Help</button>
          {/* Add buttons for other pages */}
        </nav>
      </div>
    </header>
  );
};

export default Header;

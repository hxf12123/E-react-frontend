// Footer.js

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white p-4 mt-8 flex justify-center">
      <div className="container mx-auto grid grid-cols-4 gap-4">
        <div>
          <h3 className="text-lg font-bold mb-2">Contact Us</h3>
          {/* Add your contact information */}
          <p>Email: xhe021@uottawa.ca</p>
          <p>Phone: (343) 456-7890</p>
        </div>
        <div>
          <h3 className="text-lg font-bold mb-2">Social Media</h3>
          {/* Add social media icons and links */}
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faFacebook} size="2x" className="mr-2" />
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faInstagram} size="2x" className="mr-2" />
          </a>
          <a href="https://www.github.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faGithub} size="2x" />
          </a>
        </div>
        <div className="col-span-2">
          {/* Add additional content or links */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;

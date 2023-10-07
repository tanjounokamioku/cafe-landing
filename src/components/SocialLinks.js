import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faTwitter,
  faInstagram,
  faLinkedin,
  faDiscord,
} from '@fortawesome/free-brands-svg-icons';
import {
  faGlobe,
  faLink
} from '@fortawesome/free-solid-svg-icons';

const SocialLinks = () => {
  return (
    <div className="flex justify-around p-4">

      <a href="https://cybercafe.blog.br/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-400">
        <FontAwesomeIcon icon={faGlobe} size="2x" />
      </a>
      <a href="https://linktr.ee/cybercafebr" target="_blank" rel="noopener noreferrer" className="text-white hover:text-green-400">
        <FontAwesomeIcon icon={faLink} size="2x" alt="more links" />
      </a>
      <a href="https://twitter.com/cybercafebr" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-400">
        <FontAwesomeIcon icon={faTwitter} size="2x" />
      </a>
      <a href="https://www.instagram.com/cybercafebr/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-pink-400">
        <FontAwesomeIcon icon={faInstagram} size="2x" />
      </a>
      <a href="https://www.linkedin.com/company/cybercafebr/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-600">
        <FontAwesomeIcon icon={faLinkedin} size="2x" />
      </a>
      <a href="https://discord.com/invite/FsQEaVB4ar" target="_blank" rel="noopener noreferrer" className="text-white hover:text-indigo-500">
        <FontAwesomeIcon icon={faDiscord} size="2x" />
      </a>
    </div>
  );
};

export default SocialLinks;

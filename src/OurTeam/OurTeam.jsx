import React from 'react';

import './OurTeam.css';

const OurTeam = ({ name, developer, socials }) => {
  return (
    <>
      <h3 className="team__memb">{name}</h3>
      <p className="team__pstn">{developer}</p>
      <ul className="team__social-icons">
        <li className="social-icon">
          <a className="social-icon-link" href="#">
            {socials.instagram}
          </a>
        </li>
        <li className="social-icon">
          <a className="social-icon-link" href="#">
            {socials.facebook}
          </a>
        </li>
        <li className="social-icon">
          <a className="social-icon-link" href="#">
            {socials.linkdin}
          </a>
        </li>
        <li className="social-icon">
          <a className="social-icon-link" href="#">
            {socials.github}
          </a>
        </li>
      </ul>
    </>
  );
};

export default OurTeam;

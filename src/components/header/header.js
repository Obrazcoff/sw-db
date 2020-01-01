import React from 'react';

import './header.css';

const Header = ({ onServiceChange }) => {
  return (
    <div className="header d-flex">
      <h3>{/* eslint-disable-next-line */}
        <a href="#">Star DB</a>
      </h3>
      <ul className="d-flex">
        <li>{/* eslint-disable-next-line */}
          <a href="#">People</a>
        </li>
        <li>{/* eslint-disable-next-line */}
          <a href="#">Planets</a>
        </li>
        <li>{/* eslint-disable-next-line */}
          <a href="#">Starships</a>
        </li>
      </ul>
      <button
      className="btn btn-primary btn-sm"
      onClick={onServiceChange}>
        Change service
      </button>
    </div>
  );
};

export default Header;

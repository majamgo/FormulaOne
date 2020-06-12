import React, { useState } from 'react';
import './Navbar.scss';
import { NavLink } from 'react-router-dom';
import Logo from '../../img/formula1Logo.png';
import TVlogo from '../../img/formula1LogoTV.png';
import { GoThreeBars, GoSearch } from 'react-icons/go';

function Navbar() {

    const [navOpened, setNavOpened] = useState(false);
    const navClassNames = navOpened ? 'bignav-menu bignav-menu-active' : 'bignav-menu';

  return (
    <nav className="main-nav">
      <section className="main-navinside">

        <span>
          <NavLink to="/">
            <img src={Logo} alt="Formula One logo" className="nav-logoimg" />
          </NavLink>
        </span>

        <span className="nav-toggle"
        onClick={() => {
            setNavOpened(!navOpened);
        }}>
          <GoThreeBars />
        </span>

        <ul className={navClassNames}>
          <li>
            <NavLink to="/" exact>
              home
            </NavLink>
          </li>
          <li>
            <NavLink to="/teams" exact>
              teams
            </NavLink>
          </li>
          <li>
            <NavLink to="/drivers" exact>
              drivers
            </NavLink>
          </li>
          <li>
            <NavLink to="/calendar" exact>
              calendar
            </NavLink>
          </li>
          <li>
            <NavLink to="/cartech" exact>
              cartechnical
            </NavLink>
          </li>
          <li>
            <NavLink to="/fia" exact>
              FIA
            </NavLink>
          </li>
        

<div className="searchandtv">
        <span className="nav-searchbar">
            <input type="search"/>
            <button><GoSearch className="searchicon" /></button>
        </span>

        <a
          href="https://f1tv.formula1.com/en/"
          className="navf1-tv"
          rel="noopener noreferrer"
          target="_blank"
        >
          <img src={TVlogo} alt="Formula One logo" className="nav-tvlogo" />
          <p>TV</p>
        </a>
</div>
</ul>

      </section>
    </nav>
  );
}

export default Navbar;

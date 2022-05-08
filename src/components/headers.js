import "bulma";

import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faBell, faUser } from "@fortawesome/free-solid-svg-icons";

import * as Auth from "./auth";

export default function Header() {
  function toggleBurgerMenu() {
    document.querySelector(".navbar-menu").classList.toggle("is-active");
  }

  // TODO: change logo
  // TODO: fix colors in active burger
  // TODO: fix dropdown on mobile : https://stackoverflow.com/questions/67163374/how-to-fix-bulma-navbar-dropdown-when-it-is-in-the-navbar-brand-section?msclkid=742b440ace5e11eca2d0aacadb47e00f

  let auth = React.useContext(Auth.AuthContext);

  function LogInOrLogOut() {
    if (auth.user) {
      return (
        <div className="level">
          <a className="navbar-item has-text-light" href="/places">
            Dashboard
          </a>
          <span className="navbar-item">
            <a
              className="button is-inverted"
              href="https://github.com/eugeneyng/homa"
            >
              <span className="icon">
                <FontAwesomeIcon icon={faGithub} />
              </span>
              <span>Source</span>
            </a>
          </span>
        </div>
      );
    } else if (!auth.user) {
      return (
        <div className="level">
          <a className="navbar-item has-text-light" href="/login">
            Login
          </a>
          <a className="navbar-item has-text-light" href="/register">
            Register
          </a>
          <span className="navbar-item">
            <a
              className="button is-inverted"
              href="https://github.com/eugeneyng/homa"
            >
              <span className="icon">
                <FontAwesomeIcon icon={faGithub} />
              </span>
              <span>Source</span>
            </a>
          </span>
        </div>
      );
    }
  }

  return (
    <nav className="navbar has-background-black">
      <div className="navbar-brand">
        <a className="navbar-item" href="/">
          <img src="./logo192.png" alt="Logo"></img>
        </a>
        <span
          className="navbar-burger"
          data-target="navbarMenu"
          onClick={toggleBurgerMenu}
        >
          <span></span>
          <span></span>
          <span></span>
        </span>
      </div>
      <div id="navbarMenu" className="navbar-menu has-background-black">
        <div className="navbar-end">{<LogInOrLogOut />}</div>
      </div>
    </nav>
  );
}

export function DashboardNav() {
  let auth = React.useContext(Auth.AuthContext);

  return (
    <div className="level has-background-black is-mobile">
      <div className="level-left">
        <a className="navbar-item" href="/">
          <img src={window.location.origin + "/logo192.png"} alt="Logo"></img>
        </a>
      </div>
      <div className="level-right">
        <div className="navbar-item">
          <a className="navbar-item" href="#/">
            {" "}
            {/* https://www.querythreads.com/react-site-warning-the-href-attribute-requires-a-valid-address-provide-a-valid-navigable-address-as-the-href-value-jsx-a11y-anchor-is-valid/ */}
            <span className="icon">
              <FontAwesomeIcon icon={faBell} />
            </span>
          </a>
        </div>
        <div className="navbar-item has-dropdown is-hoverable">
          <a className="navbar-item" href="#/">
            <span className="icon">
              <FontAwesomeIcon icon={faUser} />
            </span>
          </a>
          <div className="navbar-dropdown is-right">
            <a className="navbar-item" href="/" onClick={() => null}>
              Settings
            </a>
            <a className="navbar-item" href="/" onClick={() => auth.signOut()}>
              Log Out
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}


import React from "react";
import "bulma"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub } from "@fortawesome/free-brands-svg-icons"

import * as Utilities from "../utilities";

export default function Header() {

  function toggleBurgerMenu() {
    document.querySelector('.navbar-menu').classList.toggle('is-active');
  }

  // TODO: change logo
  // TODO: fix colors in active burger

  let auth = React.useContext(Utilities.Auth.AuthContext);

  function LogInOrLogOut() {

    if (auth.user) {
      return (
        <div className="level">
          <a className="navbar-item has-text-light" href="/places">
            Dashboard
          </a>
          <a className="navbar-item has-text-light" href="/" onClick={() => auth.signOut()}>
            Log Out
          </a>
          <span className="navbar-item">
            <a className="button is-inverted" href="https://github.com/eugeneyng/homa">
              <span className="icon">
                <FontAwesomeIcon icon={faGithub} />
              </span>
              <span>Source</span>
            </a>
          </span>
        </div>
      )
    } else if (!auth.user) {
      return (
        <div className="level">
          <a className="navbar-item has-text-light" href="/login">
            Login
          </a>
          <span className="navbar-item">
            <a className="button is-inverted" href="https://github.com/eugeneyng/homa">
              <span className="icon">
                <FontAwesomeIcon icon={faGithub} />
              </span>
              <span>Source</span>
            </a>
          </span>
        </div>
      )
    }
  }
  
  return (
    <div className="hero-head">
      <nav className="navbar has-background-dark">
        <div className="container">
          <div className="navbar-brand">
            <a className="navbar-item" href="/">
              <img src="./logo192.png" alt="Logo"></img>
            </a>
            <span className="navbar-burger" data-target="navbarMenuHeroA" onClick={toggleBurgerMenu}>
              <span></span>
              <span></span>
              <span></span>
            </span>
          </div>
          <div id="navbarMenuHeroA" className="navbar-menu has-background-dark">
            <div className="navbar-end">
              {<LogInOrLogOut />}
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub } from "@fortawesome/free-brands-svg-icons"

export default function Header() {
  return (
    <div className="hero-head">
      <nav className="navbar">
        <div className="container">
          <div className="navbar-brand">
            <a className="navbar-item" href="/">
              <img src="./logo192.png" alt="Logo"></img>
            </a>
            <span className="navbar-burger" data-target="navbarMenuHeroA">
              <span></span>
              <span></span>
              <span></span>
            </span>
          </div>
          <div id="navbarMenuHeroA" className="navbar-menu">
            <div className="navbar-end">
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
          </div>
        </div>
      </nav>
    </div>
  )
}
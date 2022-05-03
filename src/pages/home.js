
import React from "react";
import "bulma";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub } from "@fortawesome/free-brands-svg-icons"

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  // TODO: change hero color (is-primary)
  // TODO: change logo
  // TODO: navbar burger not working

  render() {
    return (
      <section className="hero is-primary is-fullheight">
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
                  <a className="navbar-item" href="/login">
                    Login
                  </a>
                  <span className="navbar-item">
                    <a className="button is-primary is-inverted" href="https://github.com/eugeneyng/homa">
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

        <div className="hero-body">
          <div className="container has-text-centered">
            <p className="title">
              Homa
            </p>
          </div>
        </div>

        {/* <div className="hero-foot">
          <nav className="tabs">
            <div className="container">
              <ul>
                <li className="is-active"><a>Overview</a></li>
                <li><a>Modifiers</a></li>
                <li><a>Grid</a></li>
                <li><a>Elements</a></li>
                <li><a>Components</a></li>
                <li><a>Layout</a></li>
              </ul>
            </div>
          </nav>
        </div> */}
      </section>
    )
  }
}

export default Home;
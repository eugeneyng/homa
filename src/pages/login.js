import React from "react";
import "bulma";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEnvelope, faKey } from "@fortawesome/free-solid-svg-icons"

import * as Components from "../components";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div className="hero has-background-dark is-fullheight">
        {<Components.Header/>}

        <div className="hero-body">
          <div className="container has-text-centered">
            <div className="columns is-centered">
              <div className="column is-half">
                <div className="form notification">
                  <div>
                    <label className="label">Email</label>
                    <div className="control has-icons-left">
                      <input className="input" type="email" placeholder="Email"></input>
                      <span className="icon is-left">
                        <FontAwesomeIcon icon={faEnvelope} />
                      </span>
                    </div>
                  </div>
                  <div>
                    <label className="label">Password</label>
                    <div className="control has-icons-left">
                      <input className="input" type="password" placeholder="Password"></input>
                      <span className="icon is-left">
                        <FontAwesomeIcon icon={faKey} />
                      </span>
                    </div>
                  </div>
                  <div className="button is-rounded is-outlined">Login</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    )
  }
}

export default Login;
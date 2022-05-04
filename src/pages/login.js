import React from "react";
import { useLocation, useNavigate } from "react-router-dom"
import "bulma";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEnvelope, faKey } from "@fortawesome/free-solid-svg-icons"

import * as Components from "../components";
import * as Utilities  from "../utilities";

function Login() {

  let location = useLocation();
  let navigate = useNavigate();

  let auth = React.useContext(Utilities.AuthContext);
  let state = location.state;
  let from = state ? state.from.pathname : '/places';

  function attemptLogin() {
    console.log("Attempting to login ...");
    auth.signIn("eugene", () => {
      navigate(from, { replace: true });
    })
  }

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
                <div 
                  className="button is-rounded is-outlined"
                  onClick={() => attemptLogin()}
                >
                  Login
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    
  )

}

export default Login;
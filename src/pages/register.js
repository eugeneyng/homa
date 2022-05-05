import React from "react";
import { useLocation, useNavigate, Navigate } from "react-router-dom"
import "bulma";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEnvelope, faKey } from "@fortawesome/free-solid-svg-icons"

import * as Components from "../components";
import * as Utilities  from "../utilities";

// TODO: replace with Formik

function Register() {

  const [username, setUserName] = React.useState();
  const [password, setPassword] = React.useState();

  let location = useLocation();
  let navigate = useNavigate();

  let auth = React.useContext(Utilities.Auth.AuthContext);
  let state = location.state;
  let from = state ? state.from.pathname : '/places';

  function attemptRegister(event) {

    event.preventDefault(); // Apparently the default behavior is to refresh the entire page: https://stackoverflow.com/questions/50193227/basic-react-form-submit-refreshes-entire-page

    let user = new Components.User(username, password)

    auth.signIn(user, () => {
      navigate(from, { replace: true });
    })
  }

  if (!auth.user) {
    return (
      <div className="hero has-background-dark is-fullheight">
        {<Components.Header/>}

        <div className="hero-body">
          <div className="container has-text-centered">
            <div className="columns is-centered">
              <div className="column is-half">
                <form className="form box" onSubmit={(event) => attemptRegister(event)}>
                  <div>
                    <label className="label">User Name</label>
                    <div className="control has-icons-left">
                      <input className="input" type="text" placeholder="username" id="username" onChange={(event) => setUserName(event.target.value)}></input>
                      <span className="icon is-left">
                        <FontAwesomeIcon icon={faEnvelope} />
                      </span>
                    </div>
                  </div>
                  <div>
                    <label className="label">Password</label>
                    <div className="control has-icons-left">
                      <input className="input" type="password" placeholder="Password" id="password" onChange={(event) => setPassword(event.target.value)}></input>
                      <span className="icon is-left">
                        <FontAwesomeIcon icon={faKey} />
                      </span>
                    </div>
                  </div>
                  <button className="button is-rounded is-outlined" type="submit">Login</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  } else {
    <Navigate replace to="/places" />
  }
}

export default Register;
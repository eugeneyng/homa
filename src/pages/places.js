
import React from "react";
import * as Utilities from "../utilities";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBell, faUser } from "@fortawesome/free-solid-svg-icons"

function Places() {

  let auth = React.useContext(Utilities.Auth.AuthContext);
  console.log(auth);

  return (
    <div>
      {<DashboardNav />}
    </div>
  )
}

function PlacesGrid() {

  let places = [
    {id: 1, address: "24 Skylark Ct"},
    {id: 2, address: "5502 Burning Ridge Dr"}
  ]

}

// TODO : put icons on the right side of the navbar. what the hell bulmaaaa

function DashboardNav() {
  return (
    <nav className="navbar has-background-black">
      <div className="container">
        <div className="navbar-brand">
          <a className="navbar-item" href="/">
            <img src="./logo192.png" alt="Logo"></img>
          </a>
          <div className="navbar-item">
            <a className="navbar-item" href="#/"> {/* https://www.querythreads.com/react-site-warning-the-href-attribute-requires-a-valid-address-provide-a-valid-navigable-address-as-the-href-value-jsx-a11y-anchor-is-valid/ */}
              <span className="icon">
                <FontAwesomeIcon icon={faBell} />
              </span>
            </a>
          </div>
          <div className="navbar-item">
            <a className="navbar-item" href="#/">
              <span className="icon">
                <FontAwesomeIcon icon={faUser} />
              </span>
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Places;
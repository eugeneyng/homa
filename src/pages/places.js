
import React from "react";
import { Link } from "react-router-dom"

import * as Utilities from "../utilities";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBell, faUser, faPlus } from "@fortawesome/free-solid-svg-icons"

function Places() {

  let auth = React.useContext(Utilities.Auth.AuthContext);
  console.log(auth);

  return (
    <div>
      {<DashboardNav />}
      {<PlacesGrid />}
    </div>
  )
}

function PlacesGrid() {

  let places = [
    {id: 1, name: "address 1"},
    {id: 2, name: "address 2"}
  ]

  // http://react.tips/how-to-create-reactjs-components-dynamically/

  function createTile(place) {

    return (
      <div className="tile is-parent is-3 is-justify-content-start" key={place["id"]}>
        <Link to={"place/" + place["id"]} className="tile is-child is-flex is-justify-content-center box has-background-grey-dark has-text-light">
          {place["name"]}
        </Link>
      </div>
    )
  }

  function createTiles(places) {
    return places.map(createTile)
  }

  return (
    <div className="container is-fluid is-max-desktop">
      <div className="tile is-ancestor">
        {createTiles(places)}
        <div className="tile is-parent is-3 is-justify-content-start" key="addnew">
          <a className="tile is-child is-flex is-justify-content-center box has-background-grey-dark has-text-light" href="#/">
            <span className="icon is-justify-content-center">
              <FontAwesomeIcon icon={faPlus} />
            </span>
          </a>
        </div>
      </div>
    </div>
  )

}

export function DashboardNav() {
  return (
    <div className="level has-background-black is-mobile">
        <div className="level-left">
          <a className="navbar-item" href="/">
            <img src={window.location.origin + "/logo192.png"} alt="Logo"></img>
          </a>
        </div>
        <div className="level-right">
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
  )
}

export default Places;

import React from "react";
import { Link } from "react-router-dom"

import { DashboardNav } from "../components";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPlus } from "@fortawesome/free-solid-svg-icons"

function Places() {

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

export default Places;
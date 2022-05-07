import React from "react";
import { Link } from "react-router-dom";
import * as Parse from "parse";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

import * as Components from "../components";

function Places() {
  return (
    <div>
      {<Components.DashboardNav />}
      {<PlacesGrid />}
    </div>
  );
}

function PlacesGrid() {
  let auth = React.useContext(Components.Auth.AuthContext);

  let places = [
    { id: 1, name: "address 1" },
    { id: 2, name: "address 2" },
  ];

  function getPlaces() {
    const parseQuery = new Parse.Query("Places");
  }

  // let places = getPlaces();

  

  function NewPlaceModal() {

    const [place, setPlace] = React.useState();

    function newPlaceClick(event) {
      event.preventDefault();
      console.log("Saving new place to Parse Server");
  
      let newPlace = Components.Place(place);
  
      newPlace.save().then(
        () => {
          console.log("Saved");
        },
        (error) => {
          console.log("Error: " + error.code + " " + error.message);
        }
      );
  
      document.querySelector(".modal").classList.toggle("is-active");
      document.getElementById("newPlaceForm").reset();
    }

    return (
      <div className="modal">
        <div
          className="modal-background"
          onClick={() =>
            document.querySelector(".modal").classList.toggle("is-active")
          }
        ></div>
        <div className="modal-card">
          <header className="modal-card-head">
            <p className="modal-card-title">New Place</p>
            <button
              className="delete is-large"
              onClick={() =>
                document.querySelector(".modal").classList.toggle("is-active")
              }
            ></button>
          </header>
          <section className="modal-card-body">
            <form className="form" id="newPlaceForm" onSubmit={(event) => newPlaceClick(event)}>
              <div className="field">
                <label className="label">Name</label>
                <div className="control">
                  <input
                    className="input"
                    id="place"
                    type="text"
                    placeholder="1 Road St"
                    onChange={(event) => setPlace(event.target.value)}
                  ></input>
                </div>
              </div>
            </form>
          </section>
          <footer className="modal-card-foot">
            <button
              className="button is-success"
              onClick={(event) => newPlaceClick(event)}
            >
              Save changes
            </button>
            <button
              className="button"
              onClick={() =>
                document.querySelector(".modal").classList.toggle("is-active")
              }
            >
              Cancel
            </button>
          </footer>
        </div>
      </div>
    );
  }

  // http://react.tips/how-to-create-reactjs-components-dynamically/
  function createTile(place) {
    return (
      <div
        className="tile is-parent is-3 is-justify-content-start"
        key={place["id"]}
      >
        <Link
          to={"place/" + place["id"]}
          className="tile is-child is-flex is-justify-content-center box has-background-grey-dark has-text-light"
        >
          {place["name"]}
        </Link>
      </div>
    );
  }

  function createTiles(places) {
    return places.map(createTile);
  }

  return (
    <div className="container is-fluid is-max-desktop">
      <div className="tile is-ancestor">
        {createTiles(places)}
        <div
          className="tile is-parent is-3 is-justify-content-start"
          key="addnew"
        >
          <a
            className="tile is-child is-flex is-justify-content-center box has-background-grey-dark has-text-light"
            href="#/"
            onClick={() =>
              document.querySelector(".modal").classList.toggle("is-active")
            }
          >
            <span className="icon is-justify-content-center">
              <FontAwesomeIcon icon={faPlus} />
            </span>
          </a>
        </div>
      </div>
      <NewPlaceModal />
    </div>
  );
}

export default Places;

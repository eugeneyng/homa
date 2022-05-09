import React from "react";
import { Link } from "react-router-dom";
import * as Parse from "parse";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

import * as Components from "../components";

// TODO : Maybe implement this instead of waiting for state to change: https://github.com/danilowoz/react-content-loader
// https://skeletonreact.com/

function Places() {
  return (
    <div>
      {<Components.DashboardNav />}
      {<PlacesGrid />}
    </div>
  );
}

function PlacesGrid() {

  // http://react.tips/how-to-create-reactjs-components-dynamically/
  function CreateTiles() {

    const [places, setPlaces] = React.useState([]); // This state is here because when it was in the very top level function for Places, it would fuck up and change the state of the entire page and then the New Modal Tile wasn't working

    if (places.length === 0 ) { // If this isn't here then the Parse requests NEVER STOP
      const parseQuery = new Parse.Query(Components.Place);
      parseQuery.equalTo("createdBy", Parse.User.current());
      parseQuery
        .find()
        .then((results) => {
          setPlaces(results);
        })
        .catch((error) => {
          console.log(
            "Failed to q. \nError: " + error.code + " " + error.message
          );
        });
    }

    return places.map(createTile);
  }

  function createTile(place) {
    return (
      <div
        className="tile is-parent is-3 is-justify-content-start"
        key={place.id}
      >
        <Link
          to={"place/" + place.id}
          className="tile is-child is-flex is-justify-content-center box has-background-grey-dark has-text-light"
        >
          {place.get("name")}
        </Link>
      </div>
    );
  }

  function NewPlaceModal() {
    const [place, setPlace] = React.useState();

    function newPlaceClick(event) {
      event.preventDefault();

      let newPlace = new Components.Place(place, Parse.User.current());
      let acl = new Parse.ACL(Parse.User.current());
      newPlace.setACL(acl);

      newPlace.save().then(
        () => {
          console.log("New place created with objectId: " + newPlace.id);
        },
        (error) => {
          console.log(
            "Failed to create new place. \nError: " +
              error.code +
              " " +
              error.message
          );
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
            <form
              className="form"
              id="newPlaceForm"
              onSubmit={(event) => newPlaceClick(event)}
            >
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

  return (
    <div className="container is-fluid is-max-desktop">
      <div className="tile is-ancestor">
        {<CreateTiles />}
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

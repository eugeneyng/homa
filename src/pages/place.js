import React from "react";
import { useParams } from "react-router-dom";
import * as Parse from "parse";

import * as Components from "../components";
import defaults from "../assets/defaults.json";

export default function PlacePage() {
  const params = useParams();

  const [place, setPlace] = React.useState(); // TODO : Should we consider using a whole React Context here to share state across pages? Is that necessary? https://stackoverflow.com/questions/52614676/react-state-in-different-component-on-different-page-route?msclkid=a6565f3fce7211ec87acd767188c404f

  function Infotainer() {
    const [meta, setMeta] = React.useState(defaults.meta);

    if (!place) {
      const parseQuery = new Parse.Query(Components.Place);
      parseQuery.equalTo("objectId", params.id);
      parseQuery
        .find()
        .then((results) => {
          setPlace(results[0]);
        })
        .catch((error) => {
          console.log(
            "Failed to query. \nError: " + error.code + " " + error.message
          );
        });
    }

    function onMetaChange(event, attribute) {
      place.set(attribute, event.target.innerHTML);
      place.save().then(
        () => {
          console.log("Place updated");
        },
        (error) => {
          console.log(
            "Failed to save place. \nError: " +
              error.code +
              " " +
              error.message
          );
        }
      );
      meta[attribute] = event.target.innerHTML;
      setMeta(meta);
    }

    function onEnter(event) {
      if (event.key === "Enter") {
        event.preventDefault();
        event.target.blur();
      }
    }

    return (
      <div className="mx-2">
        <div className="level">
          <div className="level-left">
            <div className="level-item">
              {/* the question mark in the next line here directly checks for place's existence, if doesn't exist return "" */}
              <p
                className="title block has-text-white"
                contentEditable="true"
                suppressContentEditableWarning="true"
                onBlur={(event) => onMetaChange(event, "name")}
                onKeyDown={(event) => onEnter(event)}
              >
                {place?.get("name") ?? ""}
              </p>
            </div>
          </div>
          <div className="level-right is-right">
            <div className="level-item">
              <button className="button is-danger is-small">Delete</button>
            </div>
          </div>
        </div>
        <div className="heading has-text-white level-left">
          <p>Address:&nbsp;</p>
          <p
            contentEditable="true"
            suppressContentEditableWarning="true"
            onBlur={(event) => onMetaChange(event, "address")}
            onKeyDown={(event) => onEnter(event)}
          >
            {place?.get("address") ?? meta.address}
          </p>
        </div>
        <div className="heading has-text-white level-left">
          <p>Built:&nbsp;</p>
          <p
            contentEditable="true"
            suppressContentEditableWarning="true"
            onBlur={(event) => onMetaChange(event, "built")}
            onKeyDown={(event) => onEnter(event)}
          >
            {place?.get("built") ?? meta.built}
          </p>
        </div>
        <div className="heading has-text-white level-left">
          <p>Sq. Ft.:&nbsp;</p>
          <p
            contentEditable="true"
            suppressContentEditableWarning="true"
            onBlur={(event) => onMetaChange(event, "sqft")}
            onKeyDown={(event) => onEnter(event)}
          >
            {place?.get("sqft") ?? meta.sqft}
          </p>
        </div>
        <div className="heading has-text-white level-left">
          <p>Rooms:&nbsp;</p>
          <p
            contentEditable="true"
            suppressContentEditableWarning="true"
            onBlur={(event) => onMetaChange(event, "bedbath")}
            onKeyDown={(event) => onEnter(event)}
          >
            {place?.get("bedbath") ?? meta.bedbath}
          </p>
        </div>
      </div>
    );
  }

  function RoomTabs() {
    function CreateRoomTabs() {
      const [rooms, setRooms] = React.useState([]);
      if (rooms.length === 0) {
        const parseQuery = new Parse.Query(Components.Room);
        parseQuery.equalTo("Place", place);
        parseQuery
          .find()
          .then((results) => {
            setRooms(results);
          })
          .catch((error) => {
            console.log(
              "Failed to q. \nError: " + error.code + " " + error.message
            );
          });
      }

      return rooms.map(createRoomTab);
    }

    function createRoomTab(room) {
      return (
        <li key={room.id}>
          <a className="has-text-white" href="#/">
            {room.get("name")}
          </a>
        </li>
      );
    }

    return (
      <div className="tabs is-boxed">
        <ul>
          <CreateRoomTabs />
          <li>
            <a
              className="has-text-white"
              href="#/" // TODO: fix this so that the href doesn't cause the page to refresh before this button works. Removing the href works but then I get an annoying react warning
              onClick={() =>
                document.querySelector(".modal").classList.toggle("is-active")
              }
            >
              +
            </a>
          </li>
        </ul>
      </div>
    );
  }

  function NewRoomModal() {
    const [room, setRoom] = React.useState();

    function newRoomClick(event) {
      event.preventDefault();

      let newRoom = new Components.Room(room, place);
      let acl = new Parse.ACL(Parse.User.current());
      newRoom.setACL(acl);

      newRoom.save().then(
        () => {
          console.log("New Room created with objectId: " + newRoom.id);
          window.location.reload(); // TODO : fix this so that a reload isn't necessary
        },
        (error) => {
          console.log(
            "Failed to create new Room. \nError: " +
              error.code +
              " " +
              error.message
          );
        }
      );

      document.querySelector(".modal").classList.toggle("is-active");
      document.getElementById("newRoomForm").reset();
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
            <p className="modal-card-title">New Room</p>
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
              id="newRoomForm"
              onSubmit={(event) => newRoomClick(event)}
            >
              <div className="field">
                <label className="label">Name</label>
                <div className="control">
                  <input
                    className="input"
                    id="room"
                    type="text"
                    placeholder="Living Room"
                    onChange={(event) => setRoom(event.target.value)}
                  ></input>
                </div>
              </div>
            </form>
          </section>
          <footer className="modal-card-foot">
            <button
              className="button is-success"
              onClick={(event) => newRoomClick(event)}
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

  function Roomtainer() {

  }

  return (
    <div>
      <Components.DashboardNav />
      <div>
        <Infotainer />
        <RoomTabs />
        <NewRoomModal />
        <Roomtainer />
      </div>
    </div>
  );
}

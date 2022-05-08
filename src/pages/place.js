import React from "react";
import { useParams } from "react-router-dom";
import * as Parse from "parse";

import * as Components from "../components";

export default function PlacePage() {
  const params = useParams();

  return (
    <div>
      <Components.DashboardNav />
      <div className="columns">
        <Menu />
        <Infotainer />
      </div>
    </div>
  );

  function Menu() {
    return (
      <aside className="menu column is-one-fifth mx-2">
        <p className="menu-label">General</p>
        <ul className="menu-list">
          <li>
            <a className="has-text-grey-light" href="#/">
              Dashboard
            </a>
          </li>
        </ul>
        <p className="menu-label">Interior</p>
        <ul className="menu-list">
          <InteriorRooms />
          <NewRoom />
        </ul>
        <p className="menu-label">Exterior</p>
        <ul className="menu-list">
          <ExteriorRooms />
          <NewRoom />
        </ul>
      </aside>
    );

    function InteriorRooms() {
      const [iRooms, setIRooms] = React.useState([]);
    }

    function ExteriorRooms() {
      const [eRooms, setERooms] = React.useState([]);
    }

    function NewRoom(type) {
      return (
        <li>
          <a className="has-text-grey-light" href="#/">
            +
          </a>
        </li>
      );
    }
  }

  function Infotainer() {
    const [place, setPlace] = React.useState(null); // TODO : Should we consider using a whole React Context here to share state across pages? Is that necessary? https://stackoverflow.com/questions/52614676/react-state-in-different-component-on-different-page-route?msclkid=a6565f3fce7211ec87acd767188c404f

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

    return (
      // If you're wondering why this is 3/4 and the other is 1/5 it's because the mx-2 spacer pushes this column out to the right so the button is off the page
      <div className="column is-three-quarters">
        <div className="level">
          <div className="level-left">
            <div className="level-item">
              {/* the question mark in the next line here directly checks for place's existence, if doesn't exist return "" */}
              <p className="title block has-text-white">{place?.get("name") ?? ""}</p> 
            </div>
          </div>
          <div className="level-right is-right">
            <div className="level-item">
              <button className="button is-danger">Delete</button>
            </div>
          </div>
        </div>
        <div className="subtitle has-text-white">
          <p>24 Skylark Ct, New Britain CT 06053</p>
        </div>
        <div className="level is-mobile">
          <div className="level-item">
            <div className="has-text-white">
              <p className="heading">Year Built</p>
              <p className="subtitle has-text-white">1956</p>
            </div>
          </div>
          <div className="level-item has-text-centered">
            <div className="has-text-white">
              <p className="heading">Sq Ft</p>
              <p className="subtitle has-text-white">1311</p>
            </div>
          </div>
          <div className="level-item has-text-centered has-text-white">
            <div className="has-text-white">
              <p className="heading">Rooms</p>
              <p className="subtitle has-text-white">3 Br | 2 Ba</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

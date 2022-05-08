import React from "react";
import { useParams } from "react-router-dom";
import * as Parse from "parse";

import * as Components from "../components";

export default function PlacePage() {
  const params = useParams();

  return (
    <div>
      <Components.DashboardNav />
      <div>
        <Infotainer />
        <Room />
      </div>
    </div>
  );

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
      <div className="mx-2">
        <div className="level">
          <div className="level-left">
            <div className="level-item">
              {/* the question mark in the next line here directly checks for place's existence, if doesn't exist return "" */}
              <p className="title block has-text-white">
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
        <div className="heading has-text-white">
          <p>Address: {place?.get("address") ?? "Not Provided"}</p>
        </div>
        <div className="heading has-text-white">
          <p>Built: {place?.get("built") ?? "XXXX"}</p>
        </div>
        <div className="heading has-text-white">
          <p>Sq. Ft.: {place?.get("sqft") ?? "XXXX"}</p>
        </div>
        <div className="heading has-text-white">
          <p>Rooms: {place?.get("bedbath") ?? "X Bed, X Bath"}</p>
        </div>
      </div>
    );
  }

  function Room() {
    return (
      <div>
        <NavigationPanel />
      </div>
    )
  }

  function NavigationPanel() {
    return (
      <article className="panel has-background-black">
        <p className="panel-heading">
          Rooms
        </p>
        <p className="panel-tabs">
          <a className="is-active">All</a>
          <a>Interior</a>
          <a>Exterior</a>
        </p>
        <div class="panel-block">
          <p class="control has-icons-left">
            <input class="input is-primary" type="text" placeholder="Search"></input>
            <span class="icon is-left">
              <i class="fas fa-search" aria-hidden="true"></i>
            </span>
          </p>
        </div>
        <a class="panel-block is-active">
          <span class="panel-icon">
            <i class="fas fa-book" aria-hidden="true"></i>
          </span>
          bulma
        </a>
        <a class="panel-block">
          <span class="panel-icon">
            <i class="fas fa-book" aria-hidden="true"></i>
          </span>
          marksheet
        </a>
      </article>
    )
  }
}
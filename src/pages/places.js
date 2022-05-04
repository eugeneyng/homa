
import React from "react";
import * as Utilities from "../utilities";

function Places() {

  let auth = React.useContext(Utilities.Auth.AuthContext);
  console.log(auth);

  return (
    <div>
      <nav className="navbar">
        <div className="container">
          <div className="navbar-brand">
            <a className="navbar-item" href="/">
              <img src="./logo192.png" alt="Logo"></img>
            </a>
          </div>
          <div className="navbar-end">
            <div className="navbar-item">

            </div>
            <div className="navbar-item">
              
            </div>
            <div className="navbar-item">
              
            </div>
          </div>
        </div>
      </nav>
    </div>
  )

}

export default Places;
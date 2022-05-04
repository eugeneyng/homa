
import React from "react";
import * as Utilities from "../utilities";

function Places() {

  let auth = React.useContext(Utilities.AuthContext);
  console.log(auth);

  return (
    <h1>this is the Places page</h1>
  )

}

export default Places;
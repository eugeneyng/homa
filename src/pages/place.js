import React from "react"
import { useParams } from "react-router-dom"

import * as Utilities from "../utilities";

function Place() {

  let auth = React.useContext(Utilities.Auth.AuthContext);
  console.log(auth);

  const params = useParams();
  const place = params.id;

  return (
    <div>
      <h1>{place}</h1>
    </div>
  )
  
}

export default Place;
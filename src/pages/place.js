import React from "react";
import { useParams } from "react-router-dom";

import { DashboardNav, Place } from "../components";

let thisplace = new Place(1, "Address 1");

export default function PlacePage() {
  const params = useParams();
  const place = params.id;

  return (
    <div>
      <DashboardNav />
      <h1>{thisplace.name}</h1>
      <h1>{place}</h1>
    </div>
  );
}

import React from "react"
import { useParams } from "react-router-dom"

import { Place } from "../components";

import { DashboardNav } from "./places"

let thisplace = new Place(1, "eugene", "Address 1")

export default function PlacePage() {

  const params = useParams();
  const place = params.id;

  return (
    <div>
      <DashboardNav />
      <h1>{thisplace.name}</h1>
    </div>
  )
  
}

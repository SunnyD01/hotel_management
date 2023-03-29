import React from "react";
import Axios from "axios";
import { useLocation } from "react-router-dom";

function Rooms() {
  let location = useLocation();

  const selectedAddress = new URLSearchParams(location.search).get("address");

  return <div>You selected: {selectedAddress}</div>;
}

export default Rooms;

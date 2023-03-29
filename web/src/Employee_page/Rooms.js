import React, { useState, useEffect } from "react";
import Axios from "axios";
import { useLocation } from "react-router-dom";

function Rooms() {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const selectedAddress = decodeURIComponent(params.get("address"));
  const hotelId = params.get("hotel_id");
  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    const fetchRooms = async () => {
      try {
        const response = await Axios.get("http://localhost:8000/rooms/hotel", {
          params: { hotel_id: hotelId },
        });

        setRooms(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchRooms();
  }, []);

  return (
    <div>
      <h1>Selected Address: {selectedAddress}</h1>
      <h1>Selected Hotel ID: {hotelId}</h1>
      <ul>
        {rooms.map((room) => (
          <li key={room.room_id}>
            <h3>Room ID: {room.room_id}</h3>
            <p>Type of view: {room.type_of_view}</p>
            <p>Capacity: {room.capacity}</p>
            <p>Amenities: {room.amenities}</p>
            <p>Price: {room.price}</p>
            <p>Extension: {room.ext ? "Yes" : "No"}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Rooms;

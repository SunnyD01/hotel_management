import React, { useState, useEffect } from "react";
import Axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";

function Rooms() {
  const location = useLocation();
  const navigate = useNavigate();
  const params = new URLSearchParams(location.search);
  const selectedAddress = decodeURIComponent(params.get("address"));
  const hotelId = params.get("hotel_id");
  const [rooms, setRooms] = useState([]);
  const [selectedRoomId, setSelectedRoomId] = useState(null);

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

  const handleBookNowClick = (room) => {
    const roomString = encodeURIComponent(JSON.stringify(room));
    navigate(`/bookingPage?room=${roomString}`);
  };

  return (
    <div>
      <h1>Selected Address: {selectedAddress}</h1>
      <h1>Selected Hotel ID: {hotelId}</h1>
      <ul>
        {rooms.map((room) => (
          <li
            key={room.room_id}
            style={{
              border: "1px solid black",
              backgroundColor:
                selectedRoomId == room.room_id ? "yellow" : "white",
            }}
            onClick={() => setSelectedRoomId(room.room_id)}
          >
            <h3>Room ID: {room.room_id}</h3>
            <p>Type of view: {room.type_of_view}</p>
            <p>Capacity: {room.capacity}</p>
            <p>Amenities: {room.amenities}</p>
            <p>Extension: {room.ext ? "Yes" : "No"}</p>
            <p>Active: {room.active ? "Yes" : "No"}</p>
            <p>Price: ${room.price}</p>
            <button onClick={() => handleBookNowClick(room)}>Book Now</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Rooms;

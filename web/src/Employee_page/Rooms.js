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

  const handleNewRental = (room) => {
    const employeeSsn = prompt("Enter employee SSN:");
    const customerSsn = prompt("Enter customer SSN:");
    const checkInDate = prompt("Enter check-in date (YYYY-MM-DD):");
    const checkOutDate = prompt("Enter check-out date (YYYY-MM-DD):");
    const paymentMethod = prompt("Enter payment method:");

    if (
      employeeSsn &&
      customerSsn &&
      checkInDate &&
      checkOutDate &&
      paymentMethod
    ) {
      Axios.post(`http://localhost:8000/new/rental`, {
        check_in: checkInDate,
        check_out: checkOutDate,
        employee: employeeSsn,
        customer: customerSsn,
        room_id: room.room_id,
        booking_id: null,
        hotel_id: hotelId,
        archive: false,
        payment: paymentMethod,
      })
        .then((response) => {
          console.log(response.data);
          // handle the response
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  const handleGoBack = () => {
    navigate(`/landing?address=${selectedAddress}`);
  };

  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
          marginBottom: "20px",
        }}
      >
        <button onClick={handleGoBack}>Go Back</button>
      </div>
      <h1>Selected Address: {selectedAddress}</h1>
      <h1>Selected Hotel ID: {hotelId}</h1>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {rooms.map((room) => (
          <li
            key={room.room_id}
            style={{
              border: "1px solid black",
              backgroundColor:
                selectedRoomId == room.room_id ? "yellow" : "white",
            }}
            onClick={() =>
              setSelectedRoomId((prevSelectedRoomId) =>
                prevSelectedRoomId === room.room_id ? null : room.room_id
              )
            }
          >
            <h3>Room ID: {room.room_id}</h3>
            <p>Type of view: {room.type_of_view}</p>
            <p>Capacity: {room.capacity}</p>
            <p>Amenities: {room.amenities}</p>
            <p>Extension: {room.ext ? "Yes" : "No"}</p>
            <p>Active: {room.active ? "Yes" : "No"}</p>
            <p>Price: ${room.price}</p>
            <button
              style={{ marginTop: "10px" }}
              onClick={() => handleBookNowClick(room)}
            >
              Book Now
            </button>
            <button
              onClick={() => handleNewRental(room)}
              style={{ marginLeft: "100px" }}
            >
              Create Rental
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Rooms;

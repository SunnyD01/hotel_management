import React, { useState, useEffect } from "react";
import Axios from "axios";
import { useLocation } from "react-router-dom";

function Bookings() {
  let location = useLocation();

  const selectedHotelId = new URLSearchParams(location.search).get("hotel_id");

  const [bookingData, setBookingData] = useState([]);

  useEffect(() => {
    // First fetch all the room ids for the selected hotel id
    Axios.get(`http://localhost:8000/rooms/hotel?hotel_id=${selectedHotelId}`)
      .then((response) => {
        const roomIds = response.data.map((room) => room.room_id);
        // Then fetch only the bookings for those room ids
        Axios.get(`http://localhost:8000/getAllBookings`)
          .then((response) => {
            const filteredBookings = response.data.filter((booking) =>
              roomIds.includes(booking.room_id)
            );
            setBookingData(filteredBookings);
          })
          .catch((error) => {
            console.log(error);
          });
      })
      .catch((error) => {
        console.log(error);
      });
  }, [selectedHotelId]);

  return (
    <div>
      <h1>Bookings for hotel ID: {selectedHotelId}</h1>
      <table>
        <thead>
          <tr>
            <th style={{ padding: "10px" }}>Booking ID</th>
            <th style={{ padding: "10px" }}>Room ID</th>
            <th style={{ padding: "10px" }}>Customer SSN</th>
            <th style={{ padding: "10px" }}>Expected Check-In Date</th>
            <th style={{ padding: "10px" }}>Expected Check-Out Date</th>
          </tr>
        </thead>
        <tbody>
          {bookingData.map((booking) => (
            <tr key={booking.booking_id}>
              <td>{booking.booking_id}</td>
              <td>{booking.room_id}</td>
              <td>{booking.customer_ssn}</td>
              <td>{new Date(booking.exp_checkin).toLocaleDateString()}</td>
              <td>{new Date(booking.exp_checkout).toLocaleDateString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Bookings;

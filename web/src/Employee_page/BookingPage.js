import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

function BookingPage() {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const roomString = params.get("room");
  const room = JSON.parse(decodeURIComponent(roomString));
  const [ssn, setSsn] = useState("");
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [bookingConfirmed, setBookingConfirmed] = useState(false);
  const [bookingNotConfirmed, setBookingNotConfirmed] = useState(false);
  const [createAccount, setCreateAccount] = useState(false);

  let navigate = useNavigate();

  const handleBooking = async () => {
    setBookingConfirmed(false);
    setBookingNotConfirmed(false);
    try {
      const checkInDate = new Date(checkIn).toISOString();
      const checkOutDate = new Date(checkOut).toISOString();
      const existingBookings = await axios.get(
        `http://localhost:8000/getAllBookings`
      );
      const overlappingBooking = existingBookings.data.find(
        (booking) =>
          booking.room_id === room.room_id &&
          checkInDate < booking.exp_checkout &&
          checkOutDate > booking.exp_checkin
      );
      const response = await axios.post("http://localhost:8000/checkCustomer", {
        ssn,
      });
      if (response.status === 200) {
        console.log(response.data);
        if (overlappingBooking) {
          console.error("Room is already booked for the selected dates.");
          setBookingNotConfirmed(true);
        } else {
          const response = await axios.post(
            "http://localhost:8000/new/booking",
            {
              ssn,
              room_id: room.room_id,
              hotel_id: room.hotel_id,
              check_in: checkInDate,
              check_out: checkOutDate,
              archive: false,
            }
          );
          console.log(response.data);
          console.log("Booking Confirmed");
          setBookingConfirmed(true);
        }
      } else {
        setCreateAccount(true);
      }
    } catch (error) {
      console.error(error);
      if (error.response.data.createAccount === true) {
        setCreateAccount(true);
      }
    }
  };

  return (
    <div>
      <h1>Room ID: {room.room_id}</h1>
      <p>Type of view: {room.type_of_view}</p>
      <p>Capacity: {room.capacity}</p>
      <p>Amenities: {room.amenities}</p>
      <p>Extension: {room.ext ? "Yes" : "No"}</p>
      <p>Active: {room.active ? "Yes" : "No"}</p>
      <p>Price: ${room.price}</p>
      <label>
        SSN:
        <input
          type={"text"}
          value={ssn}
          onChange={(e) => setSsn(e.target.value)}
        />
      </label>
      <label>
        Check In:
        <input
          type={"date"}
          value={checkIn}
          onChange={(e) => setCheckIn(e.target.value)}
        />
      </label>
      <label>
        Check Out:
        <input
          type={"date"}
          value={checkOut}
          onChange={(e) => setCheckOut(e.target.value)}
        />
      </label>
      {!createAccount && <button onClick={handleBooking}>Book Now</button>}
      {bookingConfirmed && <p>Booking Confirmed!</p>}
      {bookingNotConfirmed && (
        <p>Booking is not confirmed. Please select different dates</p>
      )}
      {createAccount && (
        <p>
          Customer Account does not exist. Please create one before proceeding.
        </p>
      )}
      {createAccount && (
        <button onClick={() => navigate("/create-customer-account")}>
          Create Customer Account
        </button>
      )}
    </div>
  );
}

export default BookingPage;

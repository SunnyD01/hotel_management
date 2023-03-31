import React, { useState, useEffect } from "react";
import Axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";

function Archived() {
  const location = useLocation();
  const navigate = useNavigate();
  const params = new URLSearchParams(location.search);
  const selectedAddress = decodeURIComponent(params.get("address"));
  const hotelId = params.get("hotel_id");

  const [archivedRentings, setArchivedRentings] = useState([]);
  const [archivedBookings, setArchivedBookings] = useState([]);
  const [selectedRenting, setSelectedRenting] = useState(null);
  const [selectedBooking, setSelectedBooking] = useState(null);

  useEffect(() => {
    const fetchArchivedRentings = async () => {
      try {
        const response = await Axios.get(
          `http://localhost:8000/rentings/hotels/archive/${hotelId}`
        );
        setArchivedRentings(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    const fetchArchivedBookings = async () => {
      try {
        const response = await Axios.get(
          `http://localhost:8000/bookings/hotels/archive/${hotelId}`
        );
        setArchivedBookings(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchArchivedRentings();
    fetchArchivedBookings();
  }, [hotelId]);

  const handleRentingClick = (renting) => {
    if (selectedRenting?.renting_id === renting.renting_id) {
      setSelectedRenting(null);
    } else {
      setSelectedRenting(renting);
    }
  };

  const handleBookingClick = (booking) => {
    if (selectedBooking?.booking_id === booking.booking_id) {
      setSelectedBooking(null);
    } else {
      setSelectedBooking(booking);
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

      <div style={{ display: "flex" }}>
        <div style={{ flex: 1 }}>
          <h2>Archived Rentings</h2>
          <br />
          <ul style={{ listStyle: "none", padding: 0 }}>
            {archivedRentings.map((renting) => (
              <li
                key={renting.renting_id}
                onClick={() => handleRentingClick(renting)}
                style={
                  selectedRenting?.renting_id === renting.renting_id
                    ? { backgroundColor: "#ddd" }
                    : {}
                }
              >
                <div>
                  Checkin date:{" "}
                  {new Date(renting.checkin_date).toLocaleDateString()}
                </div>
                <div>
                  Checkout date:{" "}
                  {new Date(renting.checkout_date).toLocaleDateString()}
                </div>
                <div>Employee: {renting.employee}</div>
                <div>Customer: {renting.customer}</div>
                <div>Room ID: {renting.room_id}</div>
                <div>Hotel ID: {renting.hotel_id}</div>
                <div>Payment: {renting.payment}</div>
                <br />
              </li>
            ))}
          </ul>
        </div>

        <div style={{ flex: 1 }}>
          <h2>Archived Bookings</h2>
          <br />
          <ul style={{ listStyle: "none", padding: 0 }}>
            {archivedBookings.map((booking) => (
              <li
                key={booking.booking_id}
                onClick={() => handleBookingClick(booking)}
                style={
                  selectedBooking?.booking_id === booking.booking_id
                    ? { backgroundColor: "#ddd" }
                    : {}
                }
              >
                <div>
                  Checkin date:{" "}
                  {new Date(booking.exp_checkin).toLocaleDateString()}
                </div>
                <div>
                  Checkout date:{" "}
                  {new Date(booking.exp_checkout).toLocaleDateString()}
                </div>
                <div>Customer: {booking.customer_ssn}</div>
                <div>Room ID: {booking.room_id}</div>
                <div>Hotel ID: {booking.hotel_id}</div>
                <br />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Archived;

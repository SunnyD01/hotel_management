import React, { useState, useEffect } from "react";
import Axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";

function Bookings() {
  let location = useLocation();
  let navigate = useNavigate();

  const selectedHotelId = new URLSearchParams(location.search).get("hotel_id");
  const selectedAddress = new URLSearchParams(location.search).get("address");

  const [bookingData, setBookingData] = useState([]);

  useEffect(() => {
    Axios.get(`http://localhost:8000/bookings/${selectedHotelId}`)
      .then((response) => {
        setBookingData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [selectedHotelId]);

  const handleNewRental = (booking, index) => {
    const employeeSsn = prompt("Enter employee SSN:");
    const paymentMethod = prompt("Enter payment method:");

    if (employeeSsn && paymentMethod) {
      Axios.post(`http://localhost:8000/new/rental`, {
        check_in: booking.exp_checkin,
        check_out: booking.exp_checkout,
        employee: employeeSsn,
        customer: booking.customer_ssn,
        room_id: booking.room_id,
        booking_id: booking.booking_id,
        hotel_id: booking.hotel_id,
        archive: false,
        payment: paymentMethod,
      })
        .then((response) => {
          console.log(response.data);
          const newBookingData = [...bookingData];
          newBookingData[index].isRentalCreated = true;
          setBookingData(newBookingData);
          Axios.put(`http://localhost:8000/bookings/${booking.booking_id}`, {
            archive: true,
          });
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
          {bookingData.map((booking, index) => (
            <tr key={booking.booking_id}>
              <td style={{ padding: "10px" }}>{booking.booking_id}</td>
              <td style={{ padding: "10px" }}>{booking.room_id}</td>
              <td style={{ padding: "10px" }}>{booking.customer_ssn}</td>
              <td style={{ padding: "10px" }}>
                {new Date(booking.exp_checkin).toLocaleDateString()}
              </td>
              <td style={{ padding: "10px" }}>
                {new Date(booking.exp_checkout).toLocaleDateString()}
              </td>
              <td style={{ padding: "10px" }}>
                {booking.isRentalCreated ? (
                  <span>Rental is Created</span>
                ) : (
                  <button onClick={() => handleNewRental(booking, index)}>
                    Create Rental
                  </button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Bookings;

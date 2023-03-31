import { useEffect, useState } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";

const pagetitle = "Booking & Renting History";
const BookingHistory = () => {
  const location = useLocation();
  const ssn = location.state?.ssn;
  const [bookings, setBookings] = useState([]);
  const [rentals, setRentals] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const bookingData = await axios.get(
        `http://localhost:8000/customer/view/bookings/${ssn}`
      );
      setBookings(bookingData.data);
      const rentalData = await axios.get(
        `http://localhost:8000/customer/view/rentals/${ssn}`
      );
      setRentals(rentalData.data);
    }
    fetchData();
  }, [ssn]);

  return (
    <div>
      <h1>Booking & Renting History for {ssn}</h1>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h3>Bookings</h3>
            <table>
              <thead>
                <tr>
                  <th style={{ padding: "10px" }}>Booking ID</th>
                  <th style={{ padding: "10px" }}>Check-in Date</th>
                  <th style={{ padding: "10px" }}>Check-out Date</th>
                  <th style={{ padding: "10px" }}>Room ID</th>
                  <th style={{ padding: "10px" }}>Hotel ID</th>
                </tr>
              </thead>
              <tbody>
                {bookings.map((booking) => (
                  <tr key={booking.booking_id}>
                    <td style={{ padding: "10px" }}>{booking.booking_id}</td>
                    <td style={{ padding: "10px" }}>
                      {new Date(booking.exp_checkin).toLocaleDateString()}
                    </td>
                    <td style={{ padding: "10px" }}>
                      {new Date(booking.exp_checkout).toLocaleDateString()}
                    </td>
                    <td style={{ padding: "10px" }}>{booking.room_id}</td>
                    <td style={{ padding: "10px" }}>{booking.hotel_id}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="col-md-6">
            <h3>Rentals</h3>
            <table>
              <thead>
                <tr>
                  <th style={{ padding: "10px" }}>Renting ID</th>
                  <th style={{ padding: "10px" }}>Check-in Date</th>
                  <th style={{ padding: "10px" }}>Check-out Date</th>
                  <th style={{ padding: "10px" }}>Room ID</th>
                  <th style={{ padding: "10px" }}>Hotel ID</th>
                </tr>
              </thead>
              <tbody>
                {rentals.map((rental) => (
                  <tr key={rental.renting_id}>
                    <td style={{ padding: "10px" }}>{rental.renting_id}</td>
                    <td style={{ padding: "10px" }}>
                      {new Date(rental.checkin_date).toLocaleDateString()}
                    </td>
                    <td style={{ padding: "10px" }}>
                      {new Date(rental.checkout_date).toLocaleDateString()}
                    </td>
                    <td style={{ padding: "10px" }}>{rental.room_id}</td>
                    <td style={{ padding: "10px" }}>{rental.hotel_id}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingHistory;

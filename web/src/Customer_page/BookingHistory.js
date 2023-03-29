import Navbar from "../Navbar";
import { useEffect, useState } from 'react';
import axios from "axios";

const pagetitle = "Booking & Renting History"



const BookingHistory = () => {
    
    const [bookings, setBookings] = useState([
        {
          id: 1,
          hotelName: 'Hotel A',
          checkInDate: '2022-04-01',
          checkOutDate: '2022-04-05',
          numGuests: 2,
          customer_ssn: 235689,
        },
        {
          id: 2,
          hotelName: 'Hotel B',
          checkInDate: '2022-05-10',
          checkOutDate: '2022-05-15',
          numGuests: 3,
        },
      ]);

      const [rentings, setRentings] = useState([
        {
          id: 1,
          hotelName: 'Hotel A',
          checkInDate: '2022-06-17',
          checkOutDate: '2022-08-05',
          numGuests: 5,
          customer_ssn: 235689,
        },
        {
          id: 2,
          hotelName: 'Hotel B',
          checkInDate: '2022-05-10',
          checkOutDate: '2022-05-15',
          numGuests: 3,
        },
      ]);

    useEffect(() => {
      axios.get("api/booking")
      .then((response) => setBookings(response.data))
      .catch((error) => console.error(error));
    })
    
    useEffect(() => {
      axios.get("api/renting")
      .then((response) => setRentings(response.data))
      .catch((error) => console.error(error));
    })
    
    return (
        <div>
            <h1>{pagetitle}</h1>
            <Navbar/>
            <h1>Booking History</h1>
                {bookings.length > 0 ? (
        <table>
            <thead>
            <tr>
                <th>Hotel Name</th>
                <th>Check-in Date</th>
                <th>Check-out Date</th>
                <th>Number of Guests</th>
            </tr>
            </thead>
            <tbody>
                {bookings.map((booking) => (
                <tr key={booking.id}>
                    <td>{booking.hotelName}</td>
                    <td>{booking.checkInDate}</td>
                    <td>{booking.checkOutDate}</td>
                    <td>{booking.numGuests}</td>
                </tr>
                ))}
            </tbody>
        </table>
      ) : (
        <p>No bookings found</p>
      )}
       <h1>Renting History</h1>
                {bookings.length > 0 ? (
        <table>
            <thead>
            <tr>
                <th>Hotel Name</th>
                <th>Check-in Date</th>
                <th>Check-out Date</th>
                <th>Number of Guests</th>
            </tr>
            </thead>
            <tbody>
                {rentings.map((renting) => (
                <tr key={renting.id}>
                    <td>{renting.hotelName}</td>
                    <td>{renting.checkInDate}</td>
                    <td>{renting.checkOutDate}</td>
                    <td>{renting.numGuests}</td>
                </tr>
                ))}
            </tbody>
        </table>
      ) : (
        <p>No rentings found</p>
      )}
        </div>

    );
}
 
export default BookingHistory;
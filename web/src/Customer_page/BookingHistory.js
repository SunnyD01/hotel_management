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

    useEffect(() => {
      axios.get("api")
      .then((response) => setBookings(response.data))
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
        </div>

    );
}
 
export default BookingHistory;
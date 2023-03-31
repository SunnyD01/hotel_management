import express from "express";
import {
  getAllHotels,
  login_employee,
  create_customer_acc,
  getHotelsFromChain,
  getAllRooms,
  create_booking,
  getAllBooking,
  getRoomBetweenDates,
  newRental,
  getAllCustomerBookings,
  getAllCustomerRentals,
  getRoomHistory,
  getAllRoomsFromhotel,
  checkCustomer,
  getAllRentalsFromHotel,
  getAllBookingsWithoutRentalsFromHotel,
  updateBookingArchive,
  updateRentingArchive,
  showRentingArchiveHotel,
  showBookingArchiveHotel,
  login_customer,
  getRoomsAvailability,
} from "./endpoints";

const apiRouter = express.Router();

apiRouter.get("/", (req, res) => res.send(req));

apiRouter.get("/room", getAllRooms);
apiRouter.get("/room/hotel", getHotelsFromChain);
apiRouter.get("/room/date", getRoomBetweenDates);
apiRouter.get("/hotel", getAllHotels);
apiRouter.get("/hotel/chain", getHotelsFromChain);
apiRouter.get("/rooms/hotel", getAllRoomsFromhotel);

apiRouter.post("/login_employee", login_employee);
apiRouter.get("/login/employee", login_employee);
apiRouter.post("/login", login_customer);
apiRouter.post("/new/account", create_customer_acc);

apiRouter.post("/new/booking", create_booking);
apiRouter.post("/new/rental", newRental);

apiRouter.get("/getAllBookings", getAllBooking);

apiRouter.get("/customer/view/bookings/:customer_ssn", getAllCustomerBookings);
apiRouter.get("/customer/view/rentals/:customer", getAllCustomerRentals);
apiRouter.get("/history/room", getRoomHistory);

apiRouter.post("/checkCustomer", checkCustomer);
apiRouter.get("/rentings/hotels/:hotelId", getAllRentalsFromHotel);
apiRouter.get("/bookings/:hotelId", getAllBookingsWithoutRentalsFromHotel);

apiRouter.put("/bookings/:booking_id", updateBookingArchive);
apiRouter.put("/rentings/:renting_id", updateRentingArchive);

apiRouter.get("/rentings/hotels/archive/:hotel_id", showRentingArchiveHotel);
apiRouter.get("/bookings/hotels/archive/:hotel_id", showBookingArchiveHotel);

apiRouter.get("/customer/view/bookings", getAllCustomerBookings);
apiRouter.get("/customer/view/rentals", getAllCustomerRentals);
apiRouter.get("/history/room", getRoomHistory);

apiRouter.get("/Search/Rooms", getRoomsAvailability);

export default apiRouter;

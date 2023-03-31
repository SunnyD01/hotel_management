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
        getRoomHistory
    } from "./endpoints";

const apiRouter = express.Router();


apiRouter.get("/", (req, res) => res.send(req));

apiRouter.get("/room", getAllRooms);
apiRouter.get("/room/hotel", getHotelsFromChain)
apiRouter.get("/room/date", getRoomBetweenDates)
apiRouter.get("/hotel", getAllHotels);
apiRouter.get("/hotel/chain", getHotelsFromChain);


apiRouter.get("/login/employee", login_employee);
apiRouter.get("/login/customer", login_employee);
apiRouter.post("/new/account", create_customer_acc);

apiRouter.post("/new/booking", create_booking);
apiRouter.post("/new/rental", newRental);

apiRouter.get("/getAllBookings", getAllBooking);

apiRouter.get("/customer/view/bookings", getAllCustomerBookings);
apiRouter.get("/customer/view/rentals", getAllCustomerRentals)
apiRouter.get("/history/room", getRoomHistory)

export default apiRouter;

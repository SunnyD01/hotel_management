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
        newRental
    } from "./endpoints";

const apiRouter = express.Router();


apiRouter.get("/", (req, res) => res.send(req));

apiRouter.get("/room", getAllRooms);
apiRouter.get("/room/hotel", getHotelsFromChain)
apiRouter.get("/room/date", getRoomBetweenDates)
apiRouter.get("/hotel", getAllHotels);
apiRouter.get("/hotel/chain", getHotelsFromChain);


apiRouter.get("/login/employee", login_employee);
// apiRouter.get("/login/customer", log);
apiRouter.post("/new/account", create_customer_acc);

apiRouter.post("/new/booking", create_booking);
apiRouter.get("/getAllBookings", getAllBooking);

apiRouter.post("/rental", newRental)
export default apiRouter;


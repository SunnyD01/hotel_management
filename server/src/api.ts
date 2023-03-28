import express from "express";
import {
        getAllHotels,
        login_employee,
        create_customer_acc,
        getHotelsFromChain,
        getAllRooms,
        create_booking
    } from "./endpoints";

const apiRouter = express.Router();


apiRouter.get("/", (req, res) => res.send(req));

apiRouter.get("/room", getAllRooms);
apiRouter.get("/room/hotel", getHotelsFromChain)
apiRouter.get("/hotel", getAllHotels);
apiRouter.get("/hotel/chain", getHotelsFromChain);


apiRouter.get("/login/employee", login_employee);
// apiRouter.get("/login/customer", log);
apiRouter.post("/createaccount", create_customer_acc);

apiRouter.post("/booking", create_booking)
export default apiRouter;


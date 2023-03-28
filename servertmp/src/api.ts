import express from "express";
import {
        getAllHotels,
        login_employee,
        create_customer_acc,
        getHotelsFromChain,
        getAllRooms
    } from "./endpoints";

const apiRouter = express.Router();


apiRouter.get("/", (req, res) => res.send(req));

apiRouter.get("/room",getAllRooms);
apiRouter.get("/hotel", getAllHotels);
apiRouter.get("/hotel/chain", getHotelsFromChain);


apiRouter.get("/login/employee", login_employee);

apiRouter.post("/createaccount", create_customer_acc);

const yesterday = new Date(new Date().getDate());

export default apiRouter;


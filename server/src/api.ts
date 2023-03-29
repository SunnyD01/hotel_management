import express from "express";
import {
  getAllHotels,
  login_employee,
  create_customer_acc,
  getHotelsFromChain,
  getAllRooms,
  getAllRoomsFromhotel,
} from "./endpoints";

const apiRouter = express.Router();

apiRouter.get("/", (req, res) => res.send(req));

apiRouter.get("/room", getAllRooms);
apiRouter.get("/hotel", getAllHotels);
apiRouter.get("/hotel/chain", getHotelsFromChain);
apiRouter.post("/login_employee", login_employee);
apiRouter.get("/rooms/hotel", getAllRoomsFromhotel);
apiRouter.get("/login/employee", login_employee);

apiRouter.post("/createaccount", create_customer_acc);

const yesterday = new Date(new Date().getDate());

export default apiRouter;

import express from "express";
import {getHotels,
       login_employee} 
    from "./endpoints";

const apiRouter = express.Router();

apiRouter.get("/", (req, res) => res.send(req));
apiRouter.get("/hotel", getHotels);
apiRouter.get("/login/employee", login_employee);

const yesterday = new Date(new Date().setDate(new Date().getDate() - 1));

export default apiRouter;


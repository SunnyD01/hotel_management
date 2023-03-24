import express from "express";
import {getHotels} from "./endpoints";

const apiRouter = express.Router();

apiRouter.get("/", (req, res) => res.send(req));
apiRouter.get("/hotel", getHotels);


export default apiRouter;
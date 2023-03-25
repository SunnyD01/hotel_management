import express from "express";
import client from "./connection";
import apiRouter from "./src/api";

const app = express();
const cors = require("cors");
const bodyParser = require('body-parser');

// settings
app.use(cors());
app.options("http://localhost:3000", cors());
app.use(express.json());


app.listen(8000, () => {
    console.log("Server is now listening on port 8000");
});

client.connect();

app.use(apiRouter);
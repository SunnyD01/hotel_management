import client from "../connection";
import express from "express";

export const getHotels = async (req: express.Request, res: express.Response) => {
    try {
        console.log("??s")
        const hotels = await client.query("SELECT * FROM hotel");
        res.json(hotels.rows);
    } catch (err:any) {
        console.error(err.message);
    }
};
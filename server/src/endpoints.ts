import client from "../connection";
import express from "express";

export const getHotels = async (req: express.Request, res: express.Response) => {
    try {
        const hotels = await client.query("SELECT * FROM public.hotel");
        res.json(hotels.rows);
    } catch (err:any) {
        console.error(err.message);
    }
};

export const login_employee = async (
    req: express.Request,
    res: express.Response,
) => {
    try {
        const emp_user= req.body.user;
        const emp_password = req.body.password;
        const sign_in = await client.query(
            `SELECT * FROM public.employee WHERE fname='${emp_user}' and lname='${emp_password}'`
        );
        return res.status(200).json(sign_in.rows);
    } catch (err: any) {
        console.error(err.message);
    }
}

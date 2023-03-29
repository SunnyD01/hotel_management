import client from "../connection";
import express from "express";

export const getAllRooms = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const hotels = await client.query("SELECT * FROM public.room");
    res.json(hotels.rows);
  } catch (err: any) {
    console.error(err.message);
  }
};

export const getAllHotels = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const hotels = await client.query("SELECT * FROM public.hotel");
    res.json(hotels.rows);
  } catch (err: any) {
    console.error(err.message);
  }
};

export const getHotelsFromChain = async (
  req: express.Request,
  res: express.Response
) => {
  const chain_id = req.body.chain_id;
  try {
    const hotels = await client.query(
      `SELECT * FROM public.hotel WHERE chain_id=${chain_id}`
    );
    res.json(hotels.rows);
  } catch (err: any) {
    console.error(err.message);
  }
};

export const login_employee = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const emp_ssn = req.body.ssn;
    const sign_in = await client.query(
      `SELECT * FROM public.employee WHERE ssn='${emp_ssn}'`
    );
    if (sign_in.rows.length === 0) {
      return res.status(401).json({ message: "Unauthorized" });
    }
    return res.status(200).json(sign_in.rows);
  } catch (err: any) {
    console.error(err.message);
  }
};

export const login_customer = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const cus_email = req.body.email;
    const cus_password = req.body.password;
    const sign_in = await client.query(
      `SELECT * FROM public.customer WHERE fname='${cus_email}' and lname='${cus_password}'`
    );
    return res.status(200).json(sign_in.rows);
  } catch (err: any) {
    console.error(err.message);
  }
};

export const create_customer_acc = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const cus_ssn = req.body.ssn;
    const cus_password = req.body.password;
    const cus_fname = req.body.fname;
    const cus_lname = req.body.lname;
    const cus_address = req.body.address;
    const cus_reg_date = req.body.date;

    const sign_in = await client.query(
      `INSERT INTO public.customer (ssn, fname, lname, address, date_of_registration) VALUES (${cus_ssn},'${cus_fname}','${cus_lname}','${cus_address}',${cus_reg_date})`
    );
    return res.status(200).json(sign_in.rows);
  } catch (err: any) {
    console.error(err.message);
  }
};

export const getAllRoomsFromhotel = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const hotelId = req.query.hotel_id;
    const rooms = await client.query(
      "SELECT * FROM public.room WHERE hotel_id = $1",
      [hotelId]
    );
    res.json(rooms.rows);
  } catch (err: any) {
    console.error(err.message);
  }
};

// export const create_booking = async (
//     req: express.Request,
//     res: express.Response,
// ) => {
//     const booking_id = Math.floor(Math.random()* (9999999999 - 1000000000) + 1000000000);
//     const customer_ssn = req.body.ssn;
//     const check_in = req.body.check_in;
//     const check_out = req.body.check_out;
//     const booking_time = req.body.datetime;
// }

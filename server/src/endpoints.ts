import client from "../connection";
import express from "express";

export const getAllRooms = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const room = await client.query("SELECT * FROM public.room");
    res.json(room.rows);
  } catch (err: any) {
    console.error(err.message);
  }
};

export const getRoomFromHotel = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const hotel_id = req.body.hotel_id;
    const room = await client.query(
      `SELECT * FROM public.room WHERE hotel_id=${hotel_id}`
    );
    res.json(room.rows);
  } catch (err: any) {
    console.error(err.message);
  }
};

export const getRoomBetweenDates = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const check_in = req.body.check_in;
    const check_out = req.body.check_out;
    const room = await client.query(
      `SELECT * FROM public.room NATURAL FULL JOIN public.booking WHERE booking_id IS NOT NULL OR renting_id IS NOT NULL`
    );
    res.json(room.rows);
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
    const emp_password = req.body.password;
    const sign_in = await client.query(
      `SELECT * FROM public.employee WHERE fname='${emp_ssn}' and lname='${emp_password}'`
    );
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
    const cus_ssn = req.body.ssn;
    const sign_in = await client.query(
      `SELECT * FROM public.customer WHERE ssn='${cus_ssn}'`
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
    const cus_fname = req.body.fname;
    const cus_lname = req.body.lname;
    const cus_address = req.body.address;
    const cus_reg_date = new Date().toISOString().split("T")[0];

    const sign_in = await client.query(
      `INSERT INTO public.customer (ssn, fname, lname, address, date_of_registration) VALUES (${cus_ssn},'${cus_fname}','${cus_lname}','${cus_address}','${cus_reg_date}')`
    );
    return res.status(200).json(sign_in.rows);
  } catch (err: any) {
    console.error(err.message);
  }
};

export const create_booking = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const booking_id = Math.floor(Math.random() * (99999 - 10000) + 10000);
    const customer_ssn = req.body.ssn;
    const room_id = req.body.room_id;
    const hotel_id = req.body.hotel_id;
    const check_in = req.body.check_in;
    const check_out = req.body.check_out;
    const archive = req.body.archive;
    const booking_time = new Date().toISOString().split("T")[0];

    const book = await client.query(
      `INSERT INTO public.booking VALUES(${booking_id},'${check_in}','${check_out}','${booking_time}',${room_id},${hotel_id},${archive},${customer_ssn})`
    );
    return res.status(200).json(book.rows);
  } catch (err: any) {
    console.error(err.message);
  }
};

export const getAllBooking = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const bookings = await client.query("SELECT * FROM public.booking");
    return res.status(200).json(bookings.rows);
  } catch (err: any) {
    console.error(err.message);
  }
};

export const newRental = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const renting_id = Math.floor(Math.random() * (99999 - 10000) + 10000);
    const check_in = req.body.check_in;
    const check_out = req.body.check_out;
    const employee = req.body.employee;
    const customer = req.body.customer;
    const room_id = req.body.room_id;
    const booking_id = req.body.booking_id;
    const hotel_id = req.body.hotel_id;
    const archive = req.body.archive;
    const payment = req.body.payment;
    const rental = await client.query(
      `INSERT INTO public.renting (renting_id, checkin_date, checkout_date, employee, customer, room_id, booking_id, hotel_id, archive, payment) VALUES (${renting_id},'${check_in}','${check_out}',${employee},${customer},${room_id},${booking_id},${hotel_id},${archive},'${payment}')`
    );
    return res.status(200).json(rental.rows);
  } catch (err: any) {
    console.error(err.message);
    return res.status(400);
  }
};

export const getAllCustomerBookings = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const ssn = req.body.ssn;
    const bookings = await client.query(
      `SELECT * FROM public.customer NATURAL FULL JOIN public.booking WHERE ssn=${ssn}`
    );
    res.json(bookings.rows);
  } catch (err: any) {
    console.error(err.message);
  }
};

export const getAllCustomerRentals = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const ssn = req.body.ssn;
    const rentings = await client.query(
      `SELECT * FROM public.customer NATURAL FULL JOIN public.renting WHERE ssn=${ssn}`
    );
    res.json(rentings.rows);
  } catch (err: any) {
    console.error(err.message);
  }
};

export const getRoomHistory = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const rid = req.body.room_id;
    const history = await client.query(
      `SELECT * FROM public.room NATURAL FULL JOIN public.renting`
    );
    res.json(history.rows);
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

export const getAllBookingRoom = async (
  req: express.Request,
  res: express.Response
) => {
  const { room_id, check_in, check_out } = req.query;
  try {
    const bookings = await client.query(
      `SELECT * FROM public.booking 
       WHERE room_id = $1 AND check_in <= $2 AND check_out >= $3`,
      [room_id, check_out, check_in]
    );
    return res.status(200).json(bookings.rows);
  } catch (err: any) {
    console.error(err.message);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};

export const checkCustomer = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const cus_ssn = req.body.ssn;
    const sign_in = await client.query(
      `SELECT * FROM public.customer WHERE ssn='${cus_ssn}'`
    );
    if (sign_in.rows.length === 0) {
      return res
        .status(404)
        .json({ message: "Customer not found", createAccount: true });
    }
    return res.status(200).json(sign_in.rows);
  } catch (err: any) {
    console.error(err.message);
  }
};

export const getAllRentalsFromHotel = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const hotelId = req.params.hotelId;

    // Query the database to fetch all the rentings associated with the hotel
    const rentings = await client.query(
      `SELECT *
       FROM public.renting
       WHERE hotel_id = $1 AND archive = FALSE`,
      [hotelId]
    );

    // Return the rentings as a JSON response
    res.json(rentings.rows);
  } catch (err: any) {
    console.error(err.message);
    res.status(500).json({ message: "Server error" });
  }
};

export const getAllBookingsWithoutRentalsFromHotel = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const hotelId = req.params.hotelId;

    // Query the database to fetch all the bookings associated with the hotel that do not have a corresponding renting
    const bookingsWithoutRenting = await client.query(
      `SELECT booking.*
       FROM public.booking
       LEFT JOIN public.renting ON booking.booking_id = renting.booking_id
       WHERE booking.hotel_id = $1 AND renting.booking_id IS NULL AND booking.archive = FALSE`,
      [hotelId]
    );

    // Return the bookings without renting as a JSON response
    res.json(bookingsWithoutRenting.rows);
  } catch (err: any) {
    console.error(err.message);
    res.status(500).json({ message: "Server error" });
  }
};

export const updateBookingArchive = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const bookingId = req.params.booking_id;
    const { archive } = req.body;

    // Update the archive attribute of the booking with the specified ID
    const result = await client.query(
      `UPDATE public.booking SET archive = $1 WHERE booking_id = $2 RETURNING *`,
      [archive, bookingId]
    );

    // If no rows were affected, return a 404 error
    if (result.rowCount === 0) {
      res.status(404).json({ message: "Booking not found" });
      return;
    }

    // Return the updated booking as a JSON response
    res.json(result.rows[0]);
  } catch (err: any) {
    console.error(err.message);
    res.status(500).json({ message: "Server error" });
  }
};

export const updateRentingArchive = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const rentingId = req.params.renting_id;
    const { archive } = req.body;

    // Update the archive attribute of the renting with the specified ID
    const result = await client.query(
      `UPDATE public.renting SET archive = $1 WHERE renting_id = $2 RETURNING *`,
      [archive, rentingId]
    );

    // If no rows were affected, return a 404 error
    if (result.rowCount === 0) {
      res.status(404).json({ message: "Renting not found" });
      return;
    }

    // Return the updated renting as a JSON response
    res.json(result.rows[0]);
  } catch (err: any) {
    console.error(err.message);
    res.status(500).json({ message: "Server error" });
  }
};

export const showRentingArchiveHotel = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const hotelId = req.params.hotel_id;

    // Retrieve all archived rentings for the specified hotel_id
    const result = await client.query(
      `SELECT * FROM public.renting WHERE hotel_id = $1 AND archive = TRUE`,
      [hotelId]
    );

    // Return the archived rentings as a JSON response
    res.json(result.rows);
  } catch (err: any) {
    console.error(err.message);
    res.status(500).json({ message: "Server error" });
  }
};

export const showBookingArchiveHotel = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const hotelId = req.params.hotel_id;

    // Retrieve all archived rentings for the specified hotel_id
    const result = await client.query(
      `SELECT * FROM public.booking WHERE hotel_id = $1 AND archive = TRUE`,
      [hotelId]
    );

    // Return the archived rentings as a JSON response
    res.json(result.rows);
  } catch (err: any) {
    console.error(err.message);
    res.status(500).json({ message: "Server error" });
  }
};

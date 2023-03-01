CREATE TABLE Hotel_Chain(
	Chain_id SERIAL PRIMARY KEY,
	email_address VARCHAR(255),
	number_of_hotels INT,
	address_CO VARCHAR(255),
	phone_number VARCHAR(255)
);

CREATE TABLE Hotel(
	Hotel_id SERIAL PRIMARY KEY,
	Manager VARCHAR(100),
	Employees INT,
	Rating INT,
	Phone_number VARCHAR(255),
	Email_Address VARCHAR(255),
	Address VARCHAR(255),
	Number_of_rooms INT,
	Chain_id INT,
	CONSTRAINT fk_chain_id
		FOREIGN KEY(Chain_id)
			REFERENCES Hotel_chain(Chain_id)
);

CREATE TABLE Employee(
	SSN INT PRIMARY KEY,
	"Role" VARCHAR(50),
	Address VARCHAR(255),
	fName VARCHAR(50),
	lName VARCHAR(50),
	Hotel_id INT,
	CONSTRAINT fk_Hotel_id
		FOREIGN KEY(Hotel_id)
			REFERENCES Hotel(Hotel_id)
);

CREATE TABLE Customer(
	SSN INT PRIMARY KEY,
	fName VARCHAR(50),
	lName VARCHAR(50),
	Address VARCHAR(255),
	date_of_registration VARCHAR(11),
	Booking_history TEXT
);

CREATE TABLE Booking(
	Booking_id SERIAL PRIMARY KEY,
	Exp_checkin VARCHAR(11),
	Exp_checkout VARCHAR(11),
	Time_of_booking VARCHAR(5),
	Room_id INT,
	Customer_SSN INT,
	CONSTRAINT fk_customer_ssn
		FOREIGN KEY(Customer_SSN)
			REFERENCES Customer(SSN)
);

CREATE TABLE Renting(
	Renting_id SERIAL PRIMARY KEY,
	Checkout_date VARCHAR(11),
	Checkin_date VARCHAR(11),
	Employee INT,
	Customer INT,
	Room_id INT,
	Booking_id INT,
	CONSTRAINT fk_booking_id
		FOREIGN KEY(Booking_id)
			REFERENCES Booking(Booking_id)
);

CREATE TABLE Room(
	Room_id SERIAL PRIMARY KEY,
	Renting_history TEXT,
	Type_of_view VARCHAR(50),
	Capacity INT,
	Damages VARCHAR(255),
	Amenities VARCHAR(255),
	Price INT,
	Ext BOOLEAN,
	Booking_id INT,
	Hotel_id INT,
	Renting_id INT,
	CONSTRAINT fk_booking_id
		FOREIGN KEY(Booking_id)
			REFERENCES Booking(Booking_id),
	CONSTRAINT fk_hotel_id
		FOREIGN KEY(Hotel_id)
			REFERENCES Hotel(Hotel_id),
	CONSTRAINT fk_renting_id
		FOREIGN KEY(Renting_id)
			REFERENCES Renting(Renting_id)
);


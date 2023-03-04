CREATE TABLE hotel_chain(
	chain_id SERIAL PRIMARY KEY,
	email_address VARCHAR(255),
	number_of_hotels INT,
	address_co VARCHAR(255),
	phone_number VARCHAR(255)
);

CREATE TABLE hotel(
	hotel_id SERIAL PRIMARY KEY,
	manager VARCHAR(100),
	employees INT,
	rating INT,
	phone_number VARCHAR(255),
	email_address VARCHAR(255),
	Address VARCHAR(255),
	number_of_rooms INT,
	chain_id INT,
	CONSTRAINT fk_chain_id
		FOREIGN KEY(chain_id)
			REFERENCES hotel_chain(chain_id)
);

CREATE TABLE employee(
	ssn INT PRIMARY KEY,
	"role" VARCHAR(50),
	Address VARCHAR(255),
	fname VARCHAR(50),
	lname VARCHAR(50),
	hotel_id INT,
	CONSTRAINT fk_hotel_id
		FOREIGN KEY(hotel_id)
			REFERENCES hotel(hotel_id)
);

CREATE TABLE customer(
	ssn INT PRIMARY KEY,
	fname VARCHAR(50),
	lname VARCHAR(50),
	Address VARCHAR(255),
	date_of_registration VARCHAR(11),
	booking_history TEXT
);

CREATE TABLE booking(
	booking_id SERIAL PRIMARY KEY,
	exp_checkin VARCHAR(11),
	exp_checkout VARCHAR(11),
	time_of_booking VARCHAR(5),
	room_id INT,
	customer_ssn INT,
	CONSTRAINT fk_customer_ssn
		FOREIGN KEY(customer_ssn)
			REFERENCES customer(ssn)
);

CREATE TABLE renting(
	renting_id SERIAL PRIMARY KEY,
	checkout_date VARCHAR(11),
	checkin_date VARCHAR(11),
	employee INT,
	customer INT,
	room_id INT,
	booking_id INT,
	CONSTRAINT fk_booking_id
		FOREIGN KEY(booking_id)
			REFERENCES booking(booking_id)
);

CREATE TABLE room(
	room_id SERIAL PRIMARY KEY,
	renting_history TEXT,
	type_of_view VARCHAR(50),
	capacity INT,
	damages VARCHAR(255),
	amenities VARCHAR(255),
	price INT,
	ext BOOLEAN,
	booking_id INT,
	hotel_id INT,
	renting_id INT,
	CONSTRAINT fk_booking_id
		FOREIGN KEY(booking_id)
			REFERENCES booking(booking_id),
	CONSTRAINT fk_hotel_id
		FOREIGN KEY(hotel_id)
			REFERENCES hotel(hotel_id),
	CONSTRAINT fk_renting_id
		FOREIGN KEY(renting_id)
			REFERENCES renting(renting_id)
);


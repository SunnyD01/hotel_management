CREATE TABLE hotel_chain(
	chain_id SERIAL PRIMARY KEY,
	email_address VARCHAR(255) NOT NULL UNIQUE,
	number_of_hotels INT,
	address_co VARCHAR(255) NOT NULL UNIQUE,
	phone_number VARCHAR(255) UNIQUE
);

CREATE TABLE hotel(
	hotel_id SERIAL PRIMARY KEY,
	manager_id INT,
	employees INT,
	rating INT,
	phone_number VARCHAR(255) NOT NULL UNIQUE,
	email_address VARCHAR(255) NOT NULL UNIQUE,
	address VARCHAR(255) NOT NULL UNIQUE,
	number_of_rooms INT,
	chain_id INT NOT NULL,
	CONSTRAINT fk_chain_id
		FOREIGN KEY(chain_id)
			REFERENCES hotel_chain(chain_id)
);

CREATE TABLE employee(
	ssn INT PRIMARY KEY NOT NULL UNIQUE,
	employee_type VARCHAR(50) NOT NULL,
	address VARCHAR(255) NOT NULL,
	fname VARCHAR(50) NOT NULL,
	lname VARCHAR(50) NOT NULL,
	hotel_id INT NOT NULL,
	CONSTRAINT fk_hotel_id
		FOREIGN KEY(hotel_id)
			REFERENCES hotel(hotel_id)
);

CREATE TABLE customer(
	ssn INT PRIMARY KEY NOT NULL UNIQUE,
	fname VARCHAR(50) NOT NULL,
	lname VARCHAR(50) NOT NULL,
	address VARCHAR(255) NOT NULL UNIQUE,
	date_of_registration DATE NOT NULL,
	booking_history TEXT
);

CREATE TABLE booking(
	booking_id SERIAL PRIMARY KEY,
	exp_checkin DATE NOT NULL,
	exp_checkout DATE,
	time_of_booking DATETIME NOT NULL,
	room_id INT NOT NULL UNIQUE,
	customer_ssn INT NOT NULL,
	CONSTRAINT fk_customer_ssn
		FOREIGN KEY(customer_ssn)
			REFERENCES customer(ssn)
);

CREATE TABLE renting(
	renting_id SERIAL PRIMARY KEY,
	checkout_date DATE,
	checkin_date DATE,
	employee INT NOT NULL,
	customer INT NOT NULL,
	room_id INT NOT NULL UNIQUE,
	booking_id INT NOT NULL,
	CONSTRAINT fk_booking_id
		FOREIGN KEY(booking_id)
			REFERENCES booking(booking_id)
);

CREATE TABLE room(
	room_id SERIAL PRIMARY KEY,
	renting_history TEXT,
	type_of_view VARCHAR(50) NOT NULL,
	capacity INT NOT NULL,
	damages VARCHAR(255),
	amenities VARCHAR(255) NOT NULL,
	price INT NOT NULL,
	ext BOOLEAN NOT NULL,
	active BOOLEAN NOT NULL,
	booking_id INT,
	hotel_id INT NOT NULL,
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

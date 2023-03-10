CREATE OR REPLACE FUNCTION check_chain_id() RETURNS TRIGGER AS $$
BEGIN
  IF NOT EXISTS (SELECT * FROM hotel WHERE chain_id = NEW.chain_id) THEN
    RAISE EXCEPTION 'The chain_id must have a corresponding ID from hotel chain';
  END IF;
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER check_chain_id
  BEFORE INSERT OR UPDATE ON hotel_chain
  FOR EACH ROW
  EXECUTE FUNCTION check_chain_id();
  
CREATE OR REPLACE FUNCTION unique_email_of_hotel_chain() RETURNS TRIGGER AS $$
BEGIN
  IF (SELECT COUNT(*) FROM hotel_chain WHERE email_address = NEW.email_address AND chain_id != NEW.chain_id) > 0 THEN
    RAISE EXCEPTION 'The email address must be unique';
  END IF;
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER unique_email_of_hotel_chain
  BEFORE INSERT OR UPDATE ON hotel_chain
  FOR EACH ROW
  EXECUTE FUNCTION unique_email_of_hotel_chain();
  
CREATE OR REPLACE FUNCTION unique_of_hotel() RETURNS TRIGGER AS $$
BEGIN
  IF (SELECT COUNT(*) FROM hotel WHERE (email_address = NEW.email_address OR phone_number = NEW.phone_number) AND hotel_id != NEW.hotel_id) > 0 THEN
    RAISE EXCEPTION 'The email address and phone number must be unique';
  END IF;
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER unique_of_hotel
  BEFORE INSERT OR UPDATE ON hotel
  FOR EACH ROW
  EXECUTE FUNCTION unique_of_hotel();

CREATE OR REPLACE FUNCTION insert_room() RETURNS TRIGGER AS $$
BEGIN 
	IF NOT EXISTS (SELECT 1 FROM booking WHERE booking_id = NEW.booking_id) THEN
		RAISE EXCEPTION 'Cannot insert room: booking id % does not exist', NEW.booking_id;
	END IF;
	RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER insert_room
	BEFORE INSERT ON room
	FOR EACH ROW
	EXECUTE FUNCTION insert_room();
	
CREATE OR REPLACE FUNCTION update_room() RETURNS TRIGGER AS $$
BEGIN
  IF NOT EXISTS (SELECT 1 FROM booking WHERE booking_id = NEW.booking_id) THEN
    RAISE EXCEPTION 'Cannot update room: booking_id % does not exist', NEW.booking_id;
  END IF;
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER update_room_trigger
  BEFORE UPDATE ON room
  FOR EACH ROW
  EXECUTE FUNCTION update_room();

CREATE OR REPLACE FUNCTION delete_room() RETURNS TRIGGER AS $$
BEGIN
  IF EXISTS (SELECT 1 FROM renting WHERE room_id = OLD.room_id) THEN
    RAISE EXCEPTION 'Cannot delete room: room_id % is currently rented', OLD.room_id;
  END IF;
  RETURN OLD;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER delete_room_trigger
  BEFORE DELETE ON room
  FOR EACH ROW
  EXECUTE FUNCTION delete_room();
  

CREATE OR REPLACE FUNCTION employee_id_check() RETURNS TRIGGER AS $$
BEGIN
	IF NOT EXISTS (SELECT 1 FROM employee WHERE ssn = NEW.ssn) THEN
		RAISE EXCEPTION 'the empolyee is invalid';
	END IF;
	RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER employee_id_check
BEFORE INSERT ON employee
FOR EACH ROW
EXECUTE FUNCTION employee_id_check();

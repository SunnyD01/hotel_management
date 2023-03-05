CREATE TRIGGER unique_email_of_hotel_chain
BEFORE INSERT OR UPDATE ON hotel_chain
FOR EACH ROW
BEGIN
	IF (SELECT COUNT(*) FROM hotel_chain WHERE email_address = NEW.email_address AND chain_id != NEW.chain_id) > 0 THEN
		SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = 'The email address must be unique';
	END IF;
END; 

CREATE TRIGGER unique_of_hotel
BEFORE INSERT OR UPDATE ON hotel
FOR EACH ROW
BEGIN
	IF (SELECT COUNT(*) FROM hotel WHERE (email_address = NEW.email_address OR phone_number = NEW.phone_number) AND hotel != NEW.hotel) >0 THEN
		SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = 'The email address and phone number must be unique';
	END IF;
END;

CREATE TRIGGER check_chain_id
BEFORE INSERT OR UPDATE ON hotel_chain
FOR EACH ROW
BEGIN
	IF NOT EXISTS (SELECT * FROM hotel WHERE chain_id = NEW.chain_id) THEN
		SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = 'The chain_id must have a corresponding ID from hotel chain';
	END IF;
END;

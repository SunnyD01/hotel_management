CREATE TRIGGER unique_email_of_hotel
BEFORE INSERT OR UPDATE ON hotel_chain
FOR EACH ROW
BEGIN
	IF (SELECT COUNT(*) FROM hotel_chain WHERE email_address = NEW.email_address AND chain_id != NEW.chain_id) > 0 THEN
		SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = 'The email address must be unique';
	END IF;
END; 

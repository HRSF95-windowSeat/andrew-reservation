\c sdc_reservations;

CREATE TABLE IF NOT EXISTS reservations_sql ( 
	id INT AUTO_INCREMENT,
	party_size INT NOT NULL,
	date DATE,
  party_size_max INT NOT NULL,
	time VARCHAR(255) NOT NULL,
	PRIMARY KEY(id)
);

COPY reservations_sql from fakedata.txt (DELIMITER ('|'));
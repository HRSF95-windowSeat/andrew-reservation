\c sdc_reservations;

CREATE TABLE IF NOT EXISTS reservations_sql ( 
	id serial,
	party_size INT NOT NULL,
	date VARCHAR(255) NOT NULL,
  party_size_max INT NOT NULL,
	time VARCHAR(255) NOT NULL,
	PRIMARY KEY(id)
);

\copy reservations_sql (party_size, date, party_size_max, time) from './fakedata.txt' (DELIMITER ('|'))
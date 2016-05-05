/*

to run this file do this in your Terminal:

1. go to the directory of this sql file.

2. get into your mysql console

3. run source schema.sql

*/

CREATE DATABASE wishes_db;
USE event_saver_db;

CREATE TABLE wishes
(
id int NOT NULL AUTO_INCREMENT,
wish varchar(255) NOT NULL,
PRIMARY KEY (id)
);

INSERT INTO wishes (wish) VALUES ('I wish for 5 more wishes.');
INSERT INTO wishes (wish) VALUES ('If I cant get 5 wishes I want a million bucks.');
INSERT INTO wishes (wish) VALUES ('I wish this weather would change.');

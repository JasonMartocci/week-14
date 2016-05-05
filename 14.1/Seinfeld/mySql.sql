CREATE DATABASE seinfeld_db;
USE seinfeld_db;

CREATE TABLE actors (
  id int AUTO_INCREMENT,
  name varchar(30) NOT NULL,
  coolness_points int, 
  attitude varchar(255),
  PRIMARY KEY(id)
);

INSERT INTO actors (name, coolness_points, coolness_points) VALUES ("Jerry", 2, "Calm");
INSERT INTO actors (name, coolness_points, attitude) VALUES ("Steve", 5, "Crazy");
INSERT INTO actors (name, coolness_points, attitude) VALUES ("Kerry", 7, "Stupid");
INSERT INTO actors (name, coolness_points, attitude) VALUES ("Louis", 9, "Insane");
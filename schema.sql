DROP DATABASE IF EXISTS checkout;

CREATE DATABASE checkout;

USE checkout;

CREATE TABLE users (
  /*
  id
  name
  email
  password
  */
  id INT AUTO_INCREMENT,
  username VARCHAR(25) NOT NULL,
  email VARCHAR(255) NOT NULL,
  pass VARCHAR(255) NOT NULL,
  PRIMARY KEY(id)
);

CREATE TABLE shipping (
  /*
  id
  address1
  address2
  city
  state
  zip
  users_id
  */
  id INT AUTO_INCREMENT,
  address1 VARCHAR(255) NOT NULL,
  address2 VARCHAR(255) NULL,
  city VARCHAR(255) NOT NULL,
  us_state VARCHAR(255) NOT NULL,
  zip INT NOT NULL,
  users_id INT NOT NULL,
  PRIMARY KEY(id),
  FOREIGN KEY(users_id) REFERENCES users(id)
);

CREATE TABLE billing (
  /*
  id
  cc#
  expire
  cvv
  bill zip
  users_id
  */
  id INT AUTO_INCREMENT,
  card_number INT NOT NULL,
  expiry VARCHAR(5) NOT NULL,
  zip INT NOT NULL,
  users_id INT NOT NULL,
  PRIMARY KEY(id),
  FOREIGN KEY(users_id) REFERENCES users(id)
);


/** Create Database and Tables
    mysql -u root < schema.sql
*/
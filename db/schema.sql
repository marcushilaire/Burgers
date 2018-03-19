DROP DATABASE IF EXISTS burgersDB;
CREATE DATABASE burgersDB;
USE burgersDB;
CREATE TABLE burgers(
    id INT(11) AUTO_INCREMENT NOT NULL,
    burgerName VARCHAR(30), 
    devourered BOOLEAN DEFAULT false,
    PRIMARY KEY (id)
);
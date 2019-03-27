DROP DATABASE IF EXISTS hdnkq3sjie33avyb;
CREATE DATABASE hdnkq3sjie33avyb;
USE hdnkq3sjie33avyb;

CREATE TABLE userInfo (
  userID INT NOT NULL,
  userName VARCHAR(100) NULL,
  userPassword VARCHAR(100) NULL,
  userPhone INT NULL,
  userEmail VARCHAR(100) NULL,
  userCC INT NULL,
  PRIMARY KEY (userID)
);

CREATE TABLE userTimes (
  timeID INT NOT NULL,
  timeStarting TIMESTAMP NULL,
  timeEnding TIMESTAMP NULL,
  PRIMARY KEY (timeID)
);

CREATE TABLE userProperty (
  propertyID INT NOT NULL,
  propertyType VARCHAR(100) NULL,
  propertyAddNum INT (5) NULL,
  propertyAddStreet VARCHAR(100) NULL,
  propertyAddCity VARCHAR(100) NULL,
  propertyAddSate VARCHAR(15) NULL,
  propertyAddZIP INT (5) NULL,
  PRIMARY KEY (propertyID)
);
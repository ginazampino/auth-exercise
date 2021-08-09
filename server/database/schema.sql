DROP SCHEMA `petzhub`;
CREATE SCHEMA `petzhub`;
USE `petzhub`;

CREATE TABLE users (
    id                          INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    email                       VARCHAR(250) NOT NULL UNIQUE,
    createdAt                   DATETIME,
    updatedAt                   DATETIME
);

CREATE TABLE profiles (
    id                          INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    username                    VARCHAR(25) NOT NULL UNIQUE,
    userId                      INT NOT NULL UNIQUE,
    createdAt                   DATETIME,
    updatedAt                   DATETIME,
    FOREIGN KEY (userId) REFERENCES users(id)
);
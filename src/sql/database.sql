CREATE DATABASE ama;

USE ama;

CREATE TABLE Persona(
    idPersona INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    nombre VARCHAR(100),
    apellido VARCHAR(100),
    direccion VARCHAR(200),
    telefono  VARCHAR(50),
    fechaNacimiento TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
DESCRIBE Persona:

INSERT INTO Persona(nombre,apellido,direccion,telefono) VALUES('Pepe','Lopera','direc','123')

SELECT * FROM Persona;
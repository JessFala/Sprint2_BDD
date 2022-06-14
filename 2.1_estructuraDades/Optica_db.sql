DROP DATABASE IF EXISTS Optica;
CREATE DATABASE Optica;
USE Optica;

CREATE TABLE proveidor(
	idProveidor INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    nom VARCHAR(45) NOT NULL, 
    adress VARCHAR(100) NOT NULL, 
    codiPostal INT NOT NULL,
    ciutat VARCHAR(45) NOT NULL, 
    pais VARCHAR(45) NOT NULL, 
    telefon VARCHAR(45) NOT NULL,
    fax VARCHAR(45) NOT NULL, 
    nif VARCHAR(20) NOT NULL
    );
    
    CREATE TABLE clientx (
	idClientx INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    nom VARCHAR(45) NOT NULL, 
    cognoms VARCHAR(75) NOT NULL, 
    adress VARCHAR(100) NOT NULL, 
    codiPostal INT NOT NULL,
    ciutat VARCHAR(45) NOT NULL, 
    pais VARCHAR(45) NOT NULL, 
    telefon VARCHAR(17) NOT NULL, 
    correuElectronic VARCHAR(255) NOT NULL, 
    dataRegistre DATETIME NOT NULL,
    clientxRecomanacio INT,
    total_compres INT NOT NULL,
    FOREIGN KEY(clientxRecomanacio) REFERENCES clientx(idClientx)
    );
    
CREATE TABLE empleatx (
	idEmpleatx INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    nom VARCHAR(25) NOT NULL,
    cognoms VARCHAR(45) NOT NULL
    );
    
CREATE TABLE ulleres (
	idUlleres INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    marca VARCHAR(45) NOT NULL,
    graduacioEsq FLOAT(6, 2) NOT NULL,
    graduacioDret FLOAT(6, 2) NOT NULL,
    colorVidres VARCHAR(45) NOT NULL,
    color_muntura VARCHAR(45) NOT NULL,
    muntura ENUM('flotant', 'pasta', 'metalica') NOT NULL,
    preu FLOAT NOT NULL,
    data_venta DATE NOT NULL,
    idProveidor INT NOT NULL,
    idEmpleatx INT NOT NULL,
    idClientx INT NOT NULL,
    FOREIGN KEY (idProveidor) REFERENCES proveidor (idProveidor),
    FOREIGN KEY (idEmpleatx) REFERENCES empleatx (idEmpleatx),
    FOREIGN KEY (idClientx) REFERENCES clientx (idClientx)
    );

INSERT INTO empleatx (nom, cognoms)
VALUES ('Mariquita', 'Perez'),
('Mari', 'Pi'),
('Mar', 'Pez'),
('Riquita', 'Zerep'),
('Ariqui', 'Taun');

INSERT INTO proveidor (nom, adress, codiPostal, ciutat, pais, telefon, fax, nif)
VALUES ('ulleres_barates1', 'carrer Solera, 4639, 8-2', 08001, 'Solsona', 'Espanya', '34666666666', '111111110','528326923723'),
('ulleres_barates2', 'carrer llum, 67, 4-5', 08002, 'Amer', 'Espanya', '674123123', '222222220', '659284720540'),
('ulleres_barates3', 'carrer de la obaga, 3, 1-1', 08003, 'Mataró', 'Espanya', '321123123', '333333330', '654456789');

INSERT INTO  clientx (nom, cognoms, adress, codiPostal, ciutat, pais, telefon, correuElectronic, dataRegistre, clientxRecomanacio,total_compres)
VALUES  ('Nom1', 'Cognoms1','Baixador, 83', 08004, 'Granollers', 'Espanya', '789456876', 'client1@client1.com', '2021-02-28', NULL, 1),
('Nom2', 'Cognoms2','avda Roma, 39, 1-3', 08005, 'Mataró', 'Espanya', '897456835','client2@client2.com', '2022-02-13', 1, 2),
('Nom3', 'Cognoms3','Carrer Aribau, 39, 3-9', 08006, 'Barcelona', 'Espanya', '987654123','client3@client3.com', '2022-03-13', 2, 3), 
('Nom4', 'Cognoms4','Carrer Dinamarca, 116, 4-2', 08007, 'Castelldefels', 'Espanya', '123456789','client4@client4.com', '2022-06-11', 3, 4),    
('Nom5', 'Cognoms5','avda Roma, 39, 1-3', 08005, 'Mataró', 'Espanya', '987123654','client5@client5.com', '2022-06-13', 4, 1); 

INSERT INTO ulleres (marca, graduacioEsq, graduacioDret, colorVidres, color_muntura, muntura, preu, data_venta, idProveidor, idEmpleatx, idClientx)
VALUES ('PRADA', 1.25, 1.5, 'negre', 'negra', 'pasta', 150.50,'2021-02-28', 1, 1, 1),
('OAKLEY', 1.00, 0.5, 'verd', 'verd', 'pasta', 75.00,'2022-02-13', 1, 2, 2),
('RayBan', 1.25, 2.5, 'gris', 'gris', 'metalica', 115.00, '2022-03-13', 2, 3, 3),
('Tous', 0.5, 0.75,'transparent', 'vermell', 'flotant', 200.00, '2022-06-11', 2, 4, 4),
('DolceGabana', 2.00, 2.5, 'transparent', 'taronja', 'pasta', 179.90, '2022-06-13', 3, 5, 5);


## Queries

# Query 1
 /* Llista el total de compres d'un client */
 
SELECT COUNT(clientx) FROM clientx.total_compres WHERE idClientx = 'Nom1';
 
# Query 2
/* Llista les diferents ulleres que ha venut un empleat durant un any */

SELECT distinct ulleres.idUlleres FROM ulleres WHERE idEmpleatx = 1 AND f.data_venta between '2022-01-07' AND '2022-07-07';

# Query 3
-- Llista els diferents proveïdors que han subministrat ulleres venudes amb èxit per l'òptica

SELECT p.nom FROM proveidor p INNER JOIN ulleres u ON u.idProveidor = p.idProveidor;
SELECT pr.nom AS proveidor, COUNT(f.data_venta) AS data_venta FROM ulleres.marca f INNER JOIN idProveidor pr ON pr.idProveidor = f.idProveidor WHERE venta > 0 GROUP BY pr.nom;



------------------------------------------------
SELECT * FROM ulleres.idEmpleatx, e.id WHERE e.idEmpleatx = 1 AND f.data_venta between '2022/01/07' AND '2022/07/07';  -- Laura

SELECT pr.nom AS proveidor, COUNT(f.data_venta) AS data_venta FROM ulleres.marca f INNER JOIN proveidor pr ON pr.idProveidor = f.idProveidor WHERE venta > 0 GROUP BY pr.nom; -- Laura

SELECT SUM(u.id) total_compres FROM clientx u INNER JOIN clientx c ON u.idClientx = c.id WHERE c.nom = 'Ariqui'; -- Laura

DROP DATABASE IF EXISTS Take_away;
CREATE DATABASE Take_away;
USE Take_away;
CREATE TABLE Provincies (
  id_provincia INT AUTO_INCREMENT PRIMARY KEY,
  nomProvincia VARCHAR(100) NOT NULL
);
CREATE TABLE Localitats (
  id_localitat INT AUTO_INCREMENT PRIMARY KEY,
  nomLocalitat VARCHAR(100) NOT NULL,
  id_provincia INT NOT NULL,
  FOREIGN KEY (id_provincia) REFERENCES provincies (id_provincia)
);
CREATE TABLE Clientxs (
  id_clientx INT AUTO_INCREMENT PRIMARY KEY,
  nomclientx VARCHAR(40) NOT NULL,
  cognoms VARCHAR(40) NOT NULL,
  adress VARCHAR(100) NOT NULL,
  codipostal INT NOT NULL,
  telefon INT NOT NULL,
  id_localitat INT NOT NULL,
  FOREIGN KEY (id_localitat) REFERENCES localitats (id_localitat)
);
CREATE TABLE Botigues (
  id_botiga INT AUTO_INCREMENT PRIMARY KEY,
  adress VARCHAR(100) NOT NULL,
  codipostal INT NOT NULL,
  telefon INT NOT NULL,
  id_localitat INT NOT NULL,
  FOREIGN KEY (id_localitat) REFERENCES localitats (id_localitat)
);
CREATE TABLE Treballadorxs (
  id_treballadorx INT AUTO_INCREMENT PRIMARY KEY,
  nom VARCHAR(40) NOT NULL,
  cognoms VARCHAR(40) NOT NULL,
  nif VARCHAR(100) NOT NULL,
  telefon INT NOT NULL,
  carrec enum ('cuinerx', 'repartidorx'),
  id_botiga INT NOT NULL,
  FOREIGN KEY (id_botiga) REFERENCES botigues (id_botiga)
);
CREATE TABLE Categories (
  id_categoria INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  nomCategoria VARCHAR(40) NOT NULL
);
CREATE TABLE Productes (
  id_producte INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  tipus ENUM ('beguda', 'pizza', 'burger'),
  nom VARCHAR(40) NOT NULL,
  imatge LONGBLOB,
  descripcio VARCHAR(60) NOT NULL,
  preu FLOAT NOT NULL,
  id_categoria INT,
  FOREIGN KEY (id_categoria) REFERENCES Categories (id_categoria)
);
CREATE TABLE Comandes (																											
 id_comanda INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
 id_clientx INT NOT NULL,   
 id_botiga INT NOT NULL,
 data_hora DATETIME,
 mètode_entrega enum ('botiga', 'domicili'),
 preu_total INT NOT NULL,
 repartidorx INT,
 FOREIGN KEY (id_clientx) REFERENCES Clientxs (id_clientx),
 FOREIGN KEY (id_botiga) REFERENCES Botigues (id_botiga),
  FOREIGN KEY (repartidorx) REFERENCES Treballadorxs (id_treballadorx)
 );
 CREATE TABLE Productes_demanats(
  idprod_com INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  id_producte INT NOT NULL,
  id_comanda INT NOT NULL,
  FOREIGN KEY (id_producte) REFERENCES Productes (id_producte),
  FOREIGN KEY (id_comanda) REFERENCES Comandes (id_comanda)
);
 
INSERT INTO Provincies (id_provincia, nomProvincia)
VALUES (1, 'Barcelona'),
(2, 'Lleida'),
(3, 'Girona'),
(4, 'Tarragona');

INSERT INTO Localitats (id_localitat, nomLocalitat, id_provincia)
VALUES (1,'Mataro',1),
(2, 'Barcelona',2),
(3,' Valldoreix' ,3),
(4, 'Cardedeu' ,4),
(5, 'Portdelaselva' ,4),
(6, 'Deltebre' ,1),
(7, 'Portbou',1),
(8, 'Cadaques',1),
(9, 'Vallfosca' ,1),
(10, 'Solsona' ,2),
(11, 'Badalona' ,2),
(12, 'Ordal' ,3),
(13, 'Cadaqués' ,3);

INSERT INTO Clientxs (id_clientx, nomclientx, cognoms, adress, codipostal, telefon, id_localitat)
VALUES (1, 'Cristina', 'Puig', 'Carrer Cristina Puig 1', 08000, 111111111, 1),
(2, 'MariaMerce', 'Marçal', 'Carrer Maria Merce Marçal 2', 25000, 222222222, 2),
(3, 'Montserrat', 'Roig', 'Carrer Montserrat Roig 3', 17000, 333333333, 3),
(4, 'Miriam', 'Reyes', 'Carrer Miriam Reyes 4', 43000, 444444444, 4);
  
INSERT INTO Botigues (id_botiga, adress, codipostal, telefon, id_localitat)
VALUES (1, 'Carrer Botiga 1', 08000, 111111111, 1),
(2, 'Carrer Botiga 2', 25000, 222222222, 2),
(3, 'Carrer Botiga 3', 17000, 333333333, 3),
(4, 'Carrer Botiga 4', 43000, 444444444, 4);   
    
INSERT INTO Treballadorxs (id_treballadorx, nom, cognoms, nif, telefon, carrec, id_botiga)
VALUES (1, 'Emma', 'Puig', '11111111A', 111111111, 'cuinerx', 1),
(2, 'Iria', 'Puig', '22222222A', 222222222, 'repartidorx', 1),
(3, 'Alex', 'Soriano','33333333C', 333333333, 'cuinerx', 2),
(4, 'Iria', 'Soriano','44444444C', 444444444, 'repartidorx', 2),
(5, 'Ona', 'Puig', '55555555A', 555555555, 'cuinerx', 3),
(6, 'Valentina', 'Wandosel', '66666666A', 666666666, 'repartidorx', 3),
(7, 'Elo', 'Sama','77777777A', 777777777, 'cuinerx', 4),
(8, 'Gael', 'Gouailler','88888888A', 888888888, 'repartidorx', 4);
 
INSERT INTO Categories (id_categoria, nomCategoria)
VALUES (1, 'categoria1'),
(2, 'categoria2'),
(3, 'categoria3'),
(4, 'categoria4');

INSERT INTO Productes (tipus, nom, imatge, descripcio, preu) 
VALUES ('beguda', 'cola', 'imatge1', 'descripcio', 2.50),
('beguda', 'cola', 'imatge2', 'descripcio', 2.50),
('beguda', 'suc', 'imatge3', 'descripcio', 2.50),
('beguda', 'suc', 'imatge4', 'descripcio', 2.50),
('beguda', 'aigua', 'imatge5', 'descripcio', 2.50),
('beguda', 'aigua', 'imatge6', 'descripcio', 2.50),
('pizza', 'carbonara', 'imatge7', 'descripcio', 10.00),
('pizza', 'hawaiana', 'imatge8', 'descripcio', 10.00),
('pizza', 'vegana', 'imatge9', 'descripcio', 10.00),
('pizza', 'tonyina', 'imatge10', 'descripcio', 10.00),
('pizza', 'barbacoa', 'imatge11', 'descripcio', 10.00),
('burger', 'pollastre', 'imatge12', 'descripcio', 5.00),
('burger', 'vegana', 'imatge13', 'descripcio', 5.00),
('burger', 'completa', 'imatge14', 'descripcio', 5.00),
('burger', 'bacon-ceba', 'imatge15', 'descripcio', 5.00),
('burger', 'doble formatge', 'imatge16', 'descripcio', 5.00);


INSERT INTO Comandes (id_comanda, id_clientx, id_botiga, data_hora, mètode_entrega, preu_total, repartidorx)
VALUES (1, 1, 1, '2022-01-10 20:04:05','botiga', 30.00, 2), 
(2, 1, 1, '2022-06-11 21:04:05','domicili', 25.00, 2), 
(3, 1, 1, '2022-06-12 20:04:05','domicili', 35.00, 2), 
(4, 2, 2, '2022-06-13 20:04:05','botiga', 35.00, 3 ), 
(5, 2, 2, '2022-06-14 20:04:05','domicili', 20.00, 4), 
(6, 2, 2, '2022-06-15 20:04:05','domicili', 15.00, 4), 
(7, 3, 3, '2022-06-16 20:04:05','botiga', 25.00, 3), 
(8, 3, 3, '2022-05-17 20:04:05','domicili', 30.00, 6), 
(9, 3, 3, '2022-05-18 20:04:05','domicili', 35.00, 6), 
(10, 4, 4, '2022-05-19 20:04:05','botiga', 40.00, 5), 
(11, 4,4, '2022-05-20 20:04:05','domicili', 20.00, 8), 
(12, 4, 4, '2022-05-21 20:04:05','domicili', 30.00, 8);

INSERT INTO productes_demanats(id_producte, id_comanda)
VALUES ( 1, 1),
( 2, 1),
( 3, 1),
( 4, 1),
( 5, 2),
( 6, 2),
( 7, 2),
( 8, 2),
( 9, 3),
( 10, 3),
( 11, 3),
( 12, 3),
( 13, 4),
( 14, 4),
( 15, 4),
( 16, 4);

----------------------------------
# Query 1
/*Llista quants productes del tipus 'begudes' s'han venut en una determinada localitat*/

SELECT *
	FROM Productes p INNER JOIN Provincies pr
    WHERE p.tipus = 'beguda' AND  pr.nomProvincia = 'Barcelona' ;

# Query 2
/* Llista quantes comandes ha efectuat un determinat empleat */

 SELECT id_comanda FROM Comandes 
 WHERE repartidorx = 8;



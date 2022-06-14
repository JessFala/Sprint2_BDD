DROP DATABASE IF EXISTS Spotify;
CREATE DATABASE Spotify;
USE Spotify;

CREATE TABLE Usuarixs(
  id_usuarx INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  email VARCHAR(50) NOT NULL,
  nom_usuarx VARCHAR(50) NOT NULL,
  login VARCHAR(50) NOT NULL,
  data_naixement DATE NOT NULL,
  sexe ENUM('man', 'woman', 'other') NOT NULL,
  pais VARCHAR(30) NOT NULL,
  cp INT NOT NULL,
  subscripcio ENUM('free', 'premium')
);

CREATE TABLE Subscripcions_premium( 
  id_premium INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  data_premium DATE NOT NULL,
  data_renovacio DATE NOT NULL,
  forma_pagament ENUM('targeta', 'Paypal'),
  id_usuarx INT NOT NULL,
  FOREIGN KEY(id_usuarx) REFERENCES Usuarixs (id_usuarx)
);
CREATE TABLE Pagaments(
  id_pagar INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  data_pagament DATETIME NOT NULL,
  total_pagament FLOAT NOT NULL,
  id_premium INT NOT NULL,
  FOREIGN KEY(id_premium) REFERENCES Subscripcions_premium (id_premium)
);

CREATE TABLE Targetes(
    id_targeta INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    num_targeta INT NOT NULL,
    caducitat DATE NOT NULL,
    codi_seg INT NOT NULL,
    id_premium INT NOT NULL,
   FOREIGN KEY(id_premium) REFERENCES Subscripcions_premium (id_premium)
);

CREATE TABLE Paypal(
    id_paypal INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    usuari_paypal VARCHAR(30) NOT NULL,
	id_premium INT NOT NULL,   
   FOREIGN KEY(id_premium) REFERENCES Subscripcions_premium (id_premium)
);

CREATE TABLE Artistes(
    id_artista INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    nom VARCHAR(49) NOT NULL,
    cover BLOB NOT NULL   
);

CREATE TABLE Albums(
  id_album INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  titol VARCHAR(30) NOT NULL,
  any_publicacio YEAR NOT NULL,
  portada BLOB NOT NULL,
  id_artista INT NOT NULL,
  FOREIGN KEY(id_artista) REFERENCES Artistes(id_artista)
);

CREATE TABLE Playlist_activa(
    id_playlistActiva INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    titol VARCHAR(20) NOT NULL,
    nombre_songs INT NOT NULL,
    data_creacio TIMESTAMP,
	id_usuarx INT NOT NULL,
    FOREIGN KEY(id_usuarx) REFERENCES Usuarixs (id_usuarx)
);
CREATE TABLE Playlist_esborrada(
    id_playlistX INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    data_eliminacio TIMESTAMP,
    id_playlistActiva INT NOT NULL,
    FOREIGN KEY(id_playlistActiva) REFERENCES Playlist_activa (id_playlistActiva)
);

CREATE TABLE Songs(
    id_song INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    titol VARCHAR(25) NOT NULL,
    durada VARCHAR(10) NOT NULL,
    nombre_plays INT NOT NULL,
    id_album INT NOT NULL,
    FOREIGN KEY(id_album) REFERENCES Albums (id_album)
);
CREATE TABLE Songs_afegides(
    id_song_afegida INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    data_afegit TIMESTAMP NOT NULL,
    id_playlistActiva INT NOT NULL,
    id_usuarx INT NOT NULL,
    id_song INT NOT NULL,
    FOREIGN KEY(id_playlistActiva) REFERENCES Playlist_activa (id_playlistActiva),
    FOREIGN KEY(id_usuarx) REFERENCES Usuarixs (id_usuarx),
    FOREIGN KEY(id_song) REFERENCES Songs (id_song)
);
CREATE TABLE Artista_relacionat(
    id_artista_rel INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    id_artista1 INT NOT NULL,
    id_artista2 INT NOT NULL,
    FOREIGN KEY(id_artista1) REFERENCES Artistes (id_artista),
    FOREIGN KEY(id_artista2) REFERENCES Artistes (id_artista)
);
CREATE TABLE Albums_preferits(
    id_album_prefer INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    id_usuarx INT NOT NULL,
    id_album INT NOT NULL,
    FOREIGN KEY(id_usuarx) REFERENCES Usuarixs (id_usuarx),
    FOREIGN KEY(id_album) REFERENCES Albums (id_album)
);
CREATE TABLE Songs_prefer(
    id_song_prefer INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    id_usuarx INT NOT NULL,
    id_song INT NOT NULL,
    FOREIGN KEY(id_usuarx) REFERENCES Usuarixs (id_usuarx),
    FOREIGN KEY(id_song) REFERENCES Songs (id_song)
);
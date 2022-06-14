DROP DATABASE IF EXISTS Youtube;
CREATE DATABASE Youtube;
USE Youtube;

CREATE TABLE Usuarix (
  id_usuarix INT AUTO_INCREMENT PRIMARY KEY NOT NULL,
  email VARCHAR(50) NOT NULL,
  pass VARCHAR(10) NOT NULL,
  naixement DATE,
  gender ENUM ('female', 'male', 'queer', 'non-binary', 'fluid', 'others'),
  pais VARCHAR(50) NOT NULL,
  codipostal INT NOT NULL
);
CREATE TABLE Video (
  id_video INT AUTO_INCREMENT PRIMARY KEY,
  titol VARCHAR(50) NOT NULL,
  descripcio VARCHAR(100) NOT NULL,
  tamany INT NOT NULL,
  nomFile VARCHAR(10) NOT NULL,
  duracio INT NOT NULL,
  thumbnail BLOB,
  numRep INT NOT NULL,
  typeVideo ENUM ('public', 'hidden', 'private') NOT NULL,
  data_creacio DATETIME NOT NULL,
  id_usuarix INT NOT NULL,
  FOREIGN KEY (id_usuarix) REFERENCES Usuarix (id_usuarix)
);
CREATE TABLE Tag (
  id_Tag INT AUTO_INCREMENT PRIMARY KEY NOT NULL,
  nameTag VARCHAR(50) NOT NULL,
  id_video INT NOT NULL,
  FOREIGN KEY (id_video) REFERENCES Video (id_video)
);
CREATE TABLE Canal (
  id_canal INT AUTO_INCREMENT PRIMARY KEY NOT NULL,
  nomCanal VARCHAR(50) NOT NULL,
  descripcio VARCHAR(100),
  data_creacio DATETIME NOT NULL,
  id_usuarix INT NOT NULL,
  FOREIGN KEY (id_usuarix) REFERENCES Usuarix (id_usuarix)
);
CREATE TABLE Suscripcio (
  id_canal INT NOT NULL,
  id_usuarix INT NOT NULL,
  FOREIGN KEY (id_usuarix) REFERENCES Usuarix (id_usuarix),
  FOREIGN KEY (id_canal) REFERENCES Canal (id_canal)
);
CREATE TABLE Video_like_dislike (
  type_like ENUM ('like', 'dislike'),
  data_creacio DATETIME NOT NULL,
  id_video INT NOT NULL,
  id_usuarix INT NOT NULL,
  FOREIGN KEY (id_usuarix) REFERENCES Usuarix (id_usuarix),
  FOREIGN KEY (id_video) REFERENCES Video (id_video)
);
CREATE TABLE Playlists (
  id_Playlist INT AUTO_INCREMENT PRIMARY KEY,
  nomPlaylist VARCHAR(10) NOT NULL,
  typePlaylist ENUM ('public', 'private'),
  data_creacio DATETIME NOT NULL,
  id_video INT NOT NULL,
  id_usuarix INT NOT NULL,
  FOREIGN KEY (id_usuarix) REFERENCES Usuarix (id_usuarix),
  FOREIGN KEY (id_video) REFERENCES Video (id_video)
);
CREATE TABLE Comentaris (
  id_comentaris INT AUTO_INCREMENT PRIMARY KEY,
  comentariText VARCHAR(100) NOT NULL,
  data_creacio DATETIME NOT NULL,
  id_video INT NOT NULL,
  id_usuarix INT NOT NULL,
  FOREIGN KEY (id_usuarix) REFERENCES Usuarix (id_usuarix),
  FOREIGN KEY (id_video) REFERENCES Video (id_video)
);
CREATE TABLE Comment_like_dislike (
  tipus_like ENUM ('like', 'dislike'),
  data_creacio DATETIME NOT NULL,
  id_comentaris INT NOT NULL,
  id_usuarix INT NOT NULL,
  FOREIGN KEY (id_usuarix) REFERENCES Usuarix (id_usuarix),
  FOREIGN KEY (id_comentaris) REFERENCES Comentaris (id_comentaris)
);
db.dropDatabase();

db.usuari.insertMany([{
    "_id": ObjectId("6200218ff7893b31d0655393"),
    "email": "PepiLo@gmail.com",
    "password": "192n",
    "nom_usuari": "Pepita12",
    "data_naixement": "10 enero, 1978",
    "sexe": "F",
    "pais": "Espanya",
    "codi_postal": 1234,
    "suscripcio": "Paypal",
    "playlists": {
        "titol": "Atope!",
        "numero_songs": 50,
        "data_creació": "22 enero, 2022",
        "estat": "activa"
    },
    "songs_favorites": {
      "_id": ObjectId("62002563f7893b31d065539f"),
      "_id": ObjectId("62002587f7893b31d06553a1")
    },
    "songs_compartides": {
      "_id": ObjectId("62002563f7893b31d065539f")
    },
    "favorit_album": ObjectId("620023fcf7893b31d0655399"),
    "artistas_seguidores": ObjectId("62002563f7893b31d065539f")
},
{
    "_id": ObjectId("620021c5f7893b31d0655395"),
    "email": "Loloo@gmail.com",
    "password": "122n",
    "nom_usuari": "Lolo22",
    "data_naixement": "11 enero, 1978",
    "sexe": "M",
    "pais": "Espanya",
    "codi_postal": 1224,
    "suscripcio": "Paypal",
    "playlists": {
      "titol": "AtodaMarcha!",
      "numero_songs": 30,
      "data_creació": "21 enero, 2022",
      "estat": "activa"
    },
    "songs_favorites": {
      "_id": ObjectId("62002563f7893b31d065539f")
    },
    "songs_compartides": {
      "_id": ObjectId("62002563f7893b31d065539f")
    },
    "favorit_album": ObjectId("6200242ff7893b31d065539b"),
    "artistas_seguidores": ObjectId("62002563f7893b31d065539f")

}]);

db.suscripcions.insertMany([{
    "_id": ObjectId("620023fcf7893b31d0655399"),
    "data_inici": "22 enero, 2022",
    "data_renovacio": "22 enero, 2023",
    "pagament": {
        "data": "22 enero, 2022",
        "preu": 30,
        "crédit": {
            "número": 1928371828,
            "data_caducitat": "27 marzo, 2025",
            "codi_seguretat": 212
        },
        "Paypal": {
            "nom_usuari": "pepito"
    }
  },
    "suscripció_usuari": ObjectId("6200218ff7893b31d0655393")
},
{
    "_id": ObjectId("6200242ff7893b31d065539b"),
    "data_inici": "25 enero, 2022",
    "data_renovacio": "25 enero, 2023",
    "pagament": {
      "data": "25 enero, 2022",
      "preu": 30,
      "crédit": {
        "número": 132321828,
        "data_caducitat": "26 marzo, 2025",
        "codi_seguretat": 124
      },
      "Paypal": {
        "nom_usuari": "Antonia"
      }
    },
    "suscripció_usuari": ObjectId("620021c5f7893b31d0655395")

}]);

db.songs.insertMany([{
    "_id": ObjectId("62002563f7893b31d065539f"),
    "titol": "I love u",
    "durada": 2.34,
    "num_reproduccions": 233,
    "song_usuari":  ObjectId("6200218ff7893b31d0655393"),
    "song_album": {
        "_id": ObjectId("620023fcf7893b31d0655399"),
        "titol": "SuperStar",
        "any_publicació": 2003,
        "imatge_portada": "imatge1.img",
        "artista": {
           "_id": ObjectId("62002563f7893b31d065539f"),
           "titol": "LaMala"
        }
    }
},
{
    "_id": ObjectId("62002587f7893b31d06553a1"),
    "titol": "Power",
    "durada": 3.34,
    "num_reproduccions": 13,
    "song_usuari": ObjectId("620021c5f7893b31d0655395"),
    "song_album": {
        "_id": ObjectId("6200242ff7893b31d065539b"),
        "titol": "PowerPower",
        "any_publicació": 2004,
        "imatge_portada": "imatge2.img",
        "artista": {
            "_id": ObjectId("62002587f7893b31d06553a1"),
            "titol": "LasNenis"
    }
  }
}]);

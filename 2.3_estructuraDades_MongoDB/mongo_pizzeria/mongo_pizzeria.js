//Crea base de dades
use('mongo_pizzeria');

//Crea col.leccions
db.createCollection('Botiga');
db.createCollection('Clientxs');
db.createCollection('Productes');


//Insereix documents en una col.lecció
db.Botiga.insertMany(
[{
    "_id": {
      "$oid": "62b2c6a4472b2797d681f09d"
    },
    "address": "adress1",
    "codipostal": "08100",
    "localitat": "localitat1",
    "provincia": "provincia1",
    "empleatx": {
      "nomicognom": "Cris C3",
      "NIF": "78946746",
      "telefon": "678987142",
      "Feina": "repartidorx"
    }
  },{
    "_id": {
      "$oid": "62b2c87d472b2797d681f09e"
    },
    "address": "adress2",
    "codipostal": "08200",
    "localitat": "localitat2",
    "provincia": "provincia2",
    "empleatx": {
      "nomicognom": "Leyvacan",
      "NIF": "38893412C",
      "telefon": "612345673",
      "Feina": "cuinerx"
    }
  }]
);

db.Clientxs.insertMany(
    [{
        "_id": {
          "$oid": "62af0516975de2d2dea2bb4d"
        },
        "nom": "client1",
        "cognom": "cognom1",
        "address": "adress_1",
        "codipostal": "08100",
        "localitat": "localitat1",
        "provincia": "prov1",
        "telefon": "123456789",
        "comandes": {
          "tipus": "Domicili",
          "empleatx": "Cris C3",
          "dataentrega": "19/06/2022 21:03",
          "productes": [
            {
              "_id": "62b35627fa325b380a6cc4ca"
            },
            {
              "_id": "62b35627fa325b380a6cc4ca"
            },
            {
              "_id": "62b35742fa325b380a6cc4cc"
            },
            {
              "_id": "62b357effa325b380a6cc4ce"
            }
          ]
        }
      },{
        "_id": {
          "$oid": "62af0516975de2d2dea2bb4e"
        },
        "nom": "client2",
        "cognom": "cognom2",
        "address": "adress_2",
        "codipostal": "08200",
        "localitat": "localitat2",
        "provincia": "prov2",
        "telefon": "223456789",
        "comandes": {
          "tipus": "Recollir",
          "empleatx": "Leyvacan",
          "dataentrega": "13/03/2022 22:30",
          "productes": [
            {
              "_id": "62b2de69472b2797d681f0bf"
            },
            {
              "_id": "62b355befa325b380a6cc4c9"
            },
            {
              "_id": "62b357c1fa325b380a6cc4cd"
            },
            {
              "_id": "62b357effa325b380a6cc4ce"
            }
          ]
        }
      }]
);
db.Productes.insertMany(
    [{
        "_id": {
          "$oid": "62b2db51472b2797d681f0be"
        },
        "Categoria1": "pizza",
        "nom:": "campiña",
        "descripcio": "Verdures de temporada",
        "imatge": "campiña.jpg",
        "preu": "6.99",
        "quantitat": "0"
      },{
        "_id": {
          "$oid": "62b2de69472b2797d681f0bf"
        },
        "Categoria1": "pizza",
        "nom:": "hawaiana",
        "descripcio": "Pinya, tonyina, pernil dolç i olives negres",
        "imatge": "hawaiana.jpg",
        "preu": "6.99",
        "quantitat": "0"
      },{
        "_id": {
          "$oid": "62b35510fa325b380a6cc4c8"
        },
        "Categoria1": "pizza",
        "nom": "barbacoa",
        "descripcio": "Bacó, pollastre i salsa barbacoa",
        "imatge": "barbacoa.jpg",
        "preu": "7.99",
        "quantitat": "0"
      },{
        "_id": {
          "$oid": "62b355befa325b380a6cc4c9"
        },
        "Categoria2": "burguer",
        "nom": "veggie",
        "descripcio": "Hamburguesa vegana amb enciam, tomaquet i salsa soja. Acompanyament amb patates fregides o amanida a escollir.",
        "imatge": "veggie.jpg",
        "preu": "4.99",
        "quantitat": "0"
      },{
        "_id": {
          "$oid": "62b35627fa325b380a6cc4ca"
        },
        "Categoria2": "burguer",
        "nom": "cabramelitzada",
        "descripcio": "Hamburguesa de vedella o pollastre amb formatge de cabra i ceba caramelitzada. Acompanyament amb patates fregides o amanida a escollir.",
        "imatge": "cabramelitzada.jpg",
        "preu": "5.99",
        "quantitat": "0"
      },{
        "_id": {
          "$oid": "62b35666fa325b380a6cc4cb"
        },
        "Categoria2": "burguer",
        "nom": "barbacoa",
        "descripcio": "Hamburguesa de vedella amb bacó, formatge cheedar, ceba i salsa barbacoa. Acompanyament amb patates fregides o amanida a escollir.",
        "imatge": "burguerbarbacoa.jpg",
        "preu": "5.99",
        "quantitat": "0"
      },{
        "_id": {
          "$oid": "62b35742fa325b380a6cc4cc"
        },
        "Categoria3": "beguda",
        "nom": "Coca-cola",
        "descripcio": "Llauna de 33cl.A escollir entre: tradicional, Zero o descafeinada",
        "imatge": "Coca-cola.jpg",
        "preu": "1.00",
        "quantitat": "0"
      },{
        "_id": {
          "$oid": "62b357c1fa325b380a6cc4cd"
        },
        "Categoria3": "beguda",
        "nom": "Fanta",
        "descripcio": "Llauna de 33cl.A escollir entre: Llimona o taronja, tradicional o Zero",
        "imatge": "Fanta.jpg",
        "preu": "1.00",
        "quantitat": ""
      },{
        "_id": {
          "$oid": "62b357effa325b380a6cc4ce"
        },
        "Categoria3": "beguda",
        "nom": "7Up",
        "descripcio": "Llauna de 33cl.A escollir entre: tradicional o Zero.",
        "imatge": "7Up.jpg",
        "preu": "1.00",
        "quantitat": "0"
      }]
);
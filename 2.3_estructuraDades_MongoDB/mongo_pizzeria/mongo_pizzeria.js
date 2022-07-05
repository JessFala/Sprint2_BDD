//Crear base de dades
db = db.getSiblingDB ('mongo_pizzeria');

//Crea col.leccions
db.createCollection('Botiga');
db.createCollection('Clientxs');
db.createCollection('Productes');


//Insereix documents en una col.lecció
db.Botiga.insertMany 
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
      "_id_empleatx": "001",
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
      "_id_empleatx": "002",
      "NIF": "38893412C",
      "telefon": "612345673",
      "Feina": "cuinerx"
    }
 }]

db.Clientxs.insertMany
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
      "ObjectId": "62b2c6a4472b2797d681f09d",
      "tipus": "Domicili",
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
  ]}
  }, {
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
      "ObjectId": "62b2c87d472b2797d681f09e",
      "tipus": "Recollir",
      "_id_empleatx": "002",
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

db.Productes.insertMany
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
      "ObjectId": "62b2c6a4472b2797d681f09d",
      "tipus": "Domicili",
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
      "ObjectId": "62b2c87d472b2797d681f09e",
      "tipus": "Recollir",
      "_id_empleatx": "002",
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
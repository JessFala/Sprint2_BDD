db.dropDatabase();

db.botiga.insertMany([{
  "_id": ObjectId("61fb98043c734c12ceea7bb5"),
  "adreça": "CalleTienda2",
  "codigo_postal": 12123,
  "localitat": "Barcelona",
  "provincia": "Barcelona",
  "empleats": {
    "nom": "Paco",
    "cognom": "rodriguez",
    "nif": 19191919,
    "telf": 92334123,
    "treball": "repartidor"

  }
},
{
  "_id": ObjectId("61fb982d3c734c12ceea7bb7"),
  "adreça": "CalleTienda3",
  "codigo_postal": 12113,
  "localitat": "Barcelona",
  "provincia": "Barcelona",
  "empleats": {
    "nom": "Anna",
    "cognom": "perez",
    "nif": 19001919,
    "telf": 92334123,
    "treball": "repartidor"
  }
}]);

db.clients.insertMany([{
  "_id": ObjectId("61fb95383c734c12ceea7ba3"),
  "clients": {
    "nom": "Maria",
    "cognom": "Lopez",
    "adreça": "callePerdida1",
    "codigo_postal": 1231,
    "telf": 60000009,
    "localitat": "Hospitalet",
    "provincia": "Barcelona"
  },
  "hora_comanda": "'21 marz, 2021, 18:00",
  "tipus": "domicili",
  "comanda_botiga": ObjectId("61fb98043c734c12ceea7bb5"),
  "comanda_clients": ObjectId("61fb969f3c734c12ceea7bb2"),
  "preuTotal": 15.97
},
{
  "_id": ObjectId("61fb956e3c734c12ceea7ba5"),
  "clients": {
    "nom": "Pepe",
    "cognom": "Leo",
    "adreça": "callePerdida2",
    "codigo_postal": 1111,
    "telf": 60022209,
    "localitat": "Hospitalet",
    "provincia": "Barcelona"
  },
  "hora_comanda": "'21 marz, 2021, 19:00",
  "tipus": "domicili",
  "comanda_botiga": ObjectId("61fb982d3c734c12ceea7bb7"),
  "comanda_clients": ObjectId("61fb969f3c734c12ceea7bb3"),
  "preuTotal": 19.97
}]);

db.productes.insertMany([{
  "_id": ObjectId("61fb95e13c734c12ceea7ba9"),
  "nom": "Beguda1",
  "descripcio": "con mucho azucar",
  "imatge": "beguda1.img",
  "preu": 2.99

}, {
  "_id": ObjectId("61fb96283c734c12ceea7bab"),
  "nom": "Beguda2",
  "descripcio": "con mucho azucar",
  "imatge": "beguda2.img",
  "preu": 3.99

}, {
  "_id": ObjectId("61fb96283c734c12ceaf7bab"),
  "nom": "Pizza1",
  "categoria_pizza": "categoria1",
  "descripcio": "con mucho queso",
  "imatge": "pizza1.img",
  "preu": 9.99

}, {
  "_id": ObjectId("61fb967e3c734c12ceea7baf"),
  "nom": "Pizza2",
  "categoria_pizza": "categoria2",
  "descripcio": "con mucho queso y peperoni",
  "imatge": "pizza2.img",
  "preu": 10.99

}, {
  "_id": ObjectId("61fb969f3c734c12ceea7bb1"),
  "nom": "Hamburguesa1",
  "descripcio": "con mucho queso y cebolla",
  "imatge": "hamburguesa1.img",
  "preu": 8.99

}]);

db.comandes.insertMany([{
  "_id": ObjectId("61fb969f3c734c12ceea7bb2"),
  "productes_comanda": {
    "producte1": ObjectId("61fb95e13c734c12ceea7ba9"),
    "producte2": ObjectId("61fb969f3c734c12ceea7bb1")
  }
},
{
  "_id": ObjectId("61fb969f3c734c12ceea7bb3"),
  "productes_comanda": {
    "producte2": ObjectId("61fb967e3c734c12ceea7baf"),
    "producte3": ObjectId("61fb96283c734c12ceaf7bab")
  }

}]);
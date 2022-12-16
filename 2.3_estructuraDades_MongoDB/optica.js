// The drop() command destroys all data from a collection.
// Make sure you run it against the correct database and collection.
db.dropDatabase();

// Insert a few documents into the sales collection.
db.clients.insertMany([{
  "_id": ObjectId("61fa425ae47b92e6abaf5853"),
  "nom": "Maria",
  "cognom": "Perez",
  "codigo_postal": 2123,
  "email": "Mariaperez@gmail.com",
  "telf": 65748392,
  "fecha_registro": "marz 20, 2021",
  "cliente_recomendat": ObjectId("61fa42bae47b92e6abaf5855"),
  "ulleresComprades": {
    "marca": "Rayban",
    "preu": 56.7,
    "color_vidres": "azul",
    "color_montura": "negra",
    "tipus_montura": "metalica",
    "graduacio_dreta": 1.25,
    "graduacio_esquerra": 3.25,
    "proveidor": ObjectId("61f063bb190dd8acc2d85f0c"),
    "empleat": ObjectId("61f06418190dd8acc2d85f11")
  }
},
{
  "_id": ObjectId("61fa42bae47b92e6abaf5855"),
  "nom": "Pedro",
  "cognom": "Ruiz",
  "codigo_postal": 2122,
  "email": "PedroRuiz@gmail.com",
  "telf": 657481222,
  "fecha_registro": "marz 21, 2021",
  "cliente_recomendat": ObjectId("61fa425ae47b92e6abaf5853"),
  "ulleresComprades": {
    "marca": "Persol",
    "preu": 99,
    "color_vidres": "negra",
    "color_montura": "marron",
    "tipus_montura": "metalica",
    "graduacio_dreta": 2.25,
    "graduacio_esquerra": 3.25,
    "proveidor": ObjectId("61f063bb190dd8acc2d85f0c"),
    "empleat": ObjectId("61f06418190dd8acc2d85f13")
  }
},
{
  "_id": ObjectId("61fa42f3e47b92e6abaf5857"),
  "nom": "Lucas",
  "cognom": "Orte",
  "codigo_postal": 1123,
  "email": "LucasOrte@gmail.com",
  "telf": 65712392,
  "fecha_registro": "marz 22, 2021",
  "cliente_recomendat": ObjectId("61fa42bae47b92e6abaf5855"),
  "ulleresComprades": {
    "marca": "Versace",
    "preu": 120.7,
    "color_vidres": "negra",
    "color_montura": "blau",
    "tipus_montura": "metalica",
    "graduacio_dreta": 2.25,
    "graduacio_esquerra": 1.25,
    "proveidor": ObjectId("61f063ef190dd8acc2d85f0e"),
    "empleat": ObjectId("61f06418190dd8acc2d85f13")
  }
}]);

db.proveidors.insertMany([{
  "_id": ObjectId("61f063bb190dd8acc2d85f0c"),
  "nom": "proveidor1",
  "adreça": {
    "calle": "calleproveidor1",
    "num": 2,
    "ciudad": "Barcelona",
    "pais": "Espanya",
    "codigo_postal": 21233
  },
  "telf": 96432323,
  "fax": 21929281,
  "nif": 10101010
},
{
  "_id": ObjectId("61f063ef190dd8acc2d85f0e"),
  "nom": "proveidor2",
  "adreça": {
    "calle": "calleproveidor2",
    "num": 3,
    "ciudad": "Barcelona",
    "pais": "Espanya",
    "codigo_postal": 21211
  },
  "telf": 96423223,
  "fax": 2100001,
  "nif": 12121210
},
{
  "_id": ObjectId("61f06418190dd8acc2d85f10"),
  "nom": "proveidor3",
  "adreça": {
    "calle": "calleproveidor3",
    "num": 7,
    "ciudad": "Barcelona",
    "pais": "Espanya",
    "codigo_postal": 21113
  },
  "telf": 77777713,
  "fax": 2112222,
  "nif": 11111111
}]);

db.empleats.insertMany([{
  "_id": ObjectId("61f06418190dd8acc2d85f11"),
  "nom": "Manuel",
  "cognom": "Perez"
},
{
  "_id": ObjectId("61f06418190dd8acc2d85f13"),
  "nom": "Lucia",
  "cognom": "Ortega"
},
{
  "_id": ObjectId("61f06418190dd8acc2d85f15"),
  "nom": "Patricia",
  "cognom": "Lopez"

}]);
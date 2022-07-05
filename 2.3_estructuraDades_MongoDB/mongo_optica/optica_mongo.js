//Crear base de dades
db = db.getSiblingDB('optica_mongo');

//Crear col.leccions
db.createCollection('Proveidorxs');
db.createCollection('Ulleres');
db.createCollection('clientxs');

//Inserir documents de la col·lecció

db.Proveidorxs.insert(
  [{
    "_id": {
      "$oid": "62b87152fa325b380a6cc554"
    },
    "nom": "FalaGlasses",
    "Address": "Avda Roma, 456, ppal.3. 08036 Barcelona (Espanya)",
    "Telefon": "+34123456789",
    "Fax": "673297451",
    "NIF": "972502071K",
    "Marca1": "Rya-ban",
    "Marca2": "Oakley",
    "Marca3": "Polaroid"
  },{
    "_id": {
      "$oid": "62b87e54fa325b380a6cc55f"
    },
    "nom": "SoleraFactory",
    "address": "Avda solysombre, 13, local.15. 08017 St Joan (Espanya)",
    "telefon": "678123987",
    "fax": "678123881",
    "NIF": "902202001R",
    "Marca1": "Tous"
  },{
    "_id": {
      "$oid": "62b87f84fa325b380a6cc560"
    },
    "nom": "Deslumbraos. SL",
    "address": "Carrer obaga 171 (Polígion Llampec) Local.89. 08003 Lleida (Espanya)",
    "telefon": "609465786",
    "fax": "609465312",
    "NIF": "46712932T",
    "Marca1": "Dior",
    "Marca2": "Vogue"
  }]
);


db.Ulleres.insert {[
   {
    "_id": {
      "$oid": "62aedde7eb56758b3d816b49"
    },
    "Marca": "Rya-ban",
    "graduacioEsq": "1.00",
    "graduacioDret": "0.75",
    "tipusMuntura": "pasta",
    "colorMuntura": "negra",
    "colorVidres": "verd",
    "preu": "165.00",
    "Proveidor": "62b87152fa325b380a6cc554",
    "Empleatx": [
      {
        "_id_empleatx": "001",
        "Nom": "empleatx1",
        "Carrec": "Venedorx"
      },
      {
        "_id_empleatx": "005",
        "Nom": "empleatx5",
        "Carrec": "Venedorx"
      },
      {
        "_id_empleatx": "002",
        "Nom": "empleatx2",
        "Carrec": "Caixerx"
      }
    ]
  },{
    "_id": {
      "$oid": "62aedde7eb56758b3d816b4c"
    },
    "Marca": "Tous",
    "graduacioEsq": "1.50",
    "graduacioDret": "1.75",
    "tipusMuntura": "pasta",
    "colorMuntura": "blanca",
    "colorVidres": "negre",
    "preu": "250.00",
    "Proveidor": "62b87e54fa325b380a6cc55f",
    "Empleatx": [
      {
        "_id_empleatx": "004",
        "Nom": "empleatx4",
        "Carrec": "Venedorx"
      },
      {
        "id_empleatx": "002",
        "Nom": "empleatx2",
        "Carrec": "Caixerx"
      }
    ]
  }]
}



    db.clientxs.insert([{
      "_id": {
        "$oid": "62bd4e066d6c5f1c9d262927"
      },
      "Clientx1": {
        "Address": "Carrer Clientx1, 34, 7-8, 08001 Barcelona",
        "Telefon": "677888999",
        "correu_electronic": "clientx1@clientx1.com",
        "data_resgistre": "23/06/2022",
        "idclient_recomanador": "null",
        "_id_empleatx": "001",
        "_id ulleres": "62aedde7eb56758b3d816b49"
      },
    },{
      "_id": {
        "$oid": "62bd52676d6c5f1c9d262932"
      },
      "Clientx2": {
        "Address": "Carrer Clientx2, 34, 7-8, 08002 Barcelona",
        "Telefon": "666846123",
        "correu_electronic": "clientx2@clientx2.com",
        "data_resgistre": "30/06/2022",
        "idclient_recomanador": "62bd4e066d6c5f1c9d262927",
        "_id_empleatx": "004",
        "_id ulleres": "62aedde7eb56758b3d816b4c"
      },
    }]
    );
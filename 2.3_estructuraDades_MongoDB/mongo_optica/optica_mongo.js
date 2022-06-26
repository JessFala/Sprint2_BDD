//Crear base de dades
db = db.getSiblingDB('optica_mongo');

//Crea col.leccions
db.createCollection('Botiga');
db.createCollection('Ulleres');
db.createCollection('Proveidorxs');

//Inserir documents de la col·lecció
db.Botiga.insert([
    {
        "_id": {
          "$oid": "62b88393fa325b380a6cc577"
        },
        "Adress": "Plaça Major, 56. 08054 Amer (Girona)",
        "Empleatx": [
          {
            "id_empleatx": "001",
            "Nom": "empleatx1",
            "Carrec": "Venedorx"
          },
          {
            "id_empleatx": "005",
            "Nom": "empleatx5",
            "Carrec": "Venedorx"
          }
        ]
      },
      {
        "_id": {
          "$oid": "62b8894afa325b380a6cc578"
        },
        "Adress": "Carrer gran, 97. 08045 Tarragona (Tarragona)",
        "Empleatx": [
          {
            "id_empleatx": "002",
            "Nom": "empleatx2",
            "Carrec": "Caixerx"
          },
          {
            "id_empleatx": "003",
            "Nom": "empleatx3",
            "Carrec": "Venedorx"
          },
          {
            "id_empleatx": "004",
            "Nom": "empleatx4",
            "Carrec": "Venedorx"
          }
        ]
      },
      {
        "_id": {
          "$oid": "62b88baafa325b380a6cc579"
        },
        "Adress": "Plaça Major, 56. 08054 Amer (Girona)",
        "Empleatx": [
          {
            "id_empleatx": "001",
            "Nom": "empleatx 001",
            "Carrec": "Caixerx"
          },
          {
            "id_empleatx": "009",
            "Nom": "empleatx 009",
            "Carrec": "Venedorx"
          }
        ]
      }
    ]);
db.Proveidorxs.insert([
    {
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
      },
      {
        "_id": {
          "$oid": "62b87e54fa325b380a6cc55f"
        },
        "nom": "SoleraFactory",
        "address": "Avda solysombre, 13, local.15. 08017 St Joan (Espanya)",
        "telefon": "678123987",
        "fax": "678123881",
        "NIF": "902202001R",
        "Marca1": "Tous"
      },
      {
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
      }
    ]);

db.Ulleres.insert([{
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
        "Clientx": {
          "id_clientx": "001",
          "Nom": "Client1",
          "Address": "passeig client1, 10",
          "Telefon": "111111111",
          "correuElectronic": "client1@client1.com",
          "dataRegistre": "19/06/2022",
          "Recomanat": "",
          "Empleatx": "005"
        }
      },
      {
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
        "Clientx": {
          "id_clientx": "002",
          "Nom": "Client2",
          "Address": "carretera client2, 20, 2-2",
          "Telefon": "555555555",
          "correuElectronic": "client2@client2.com",
          "dataRegistre": "07/01/2022",
          "Recomanat": "001",
          "Empleatx": "001"
        }
      }
    ]);


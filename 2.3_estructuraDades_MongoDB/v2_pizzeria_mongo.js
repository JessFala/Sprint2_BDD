db.dropDatabase();

db.createCollection('clientxs');
db.createCollection('productes');
db.createCollection('botigues');

db.clientxs.insert({
    _id:"_id 1",
	nom:"nom 1",
	cognoms1:"cognom1 1",
	direccio:"adresa 1",
	codi_postal:"codi_postal 1",
	localitat:"localitat 1",
	provincia:"provincia 1",
	telf:"telf 1",
	comanda:[
		{
            id:"1",
			data:"2022-01-01",
            hora:"12:00:00",
            a_domicili:"si",
            productes_id:[
                {
                    producte_id:"1",
                    quantitat:"2"
                },
                {
                    producte_id:"2",
                    quantitat:"3"
                }
            ],
            repartidorx:"Leyva",
            data_repartiment:"2022-01-01",
            hora_repartiment:"14:00:00",
            preu_total:"37.89"
		}
	]
});

db.productes.insert({
    _id:"1",
    nom:"pizza",
    descripcio:"pizza",
    categoria:"cat 1",
    imatge:"asdf",
    preu:"12.99"
});

db.productes.insert({
    _id:"2",
    nom:"pizza",
    descripcio:"pizza",
    categoria:"cat 2",
    imatge:"asdfd",
    preu:"16.99"
});

db.productes.insert({
    _id:"3",
    nom:"beguda",
    descripcio:"beguda",
    categoria:"",
    imatge:"asdfasdf",
    preu:"2.99"
});

db.botigues.insert({
    _id:"1",
	direccio:"adresa 2",
	codi_postal:"codi_postal 2",
	localitat:"localitat 2",
	provincia:"provincia 2",
    empleatxs:[
        {
            nom:"nom 1",
            cognoms:"cognom1 1",
            nif:"nif 1",
            tel:"tel 1",
            tipus_treball:"repartidorx"
        },
        {
            nom:"nom 2",
            cognoms:"cognom1 2",
            nif:"nif 2",
            tel:"tel 2",
            tipus_treball:"cuinerx"
        }
    ]
});
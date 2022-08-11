db.createCollection('usuarixs');
db.createCollection('artistxs');

db.artistxs.insert({
    _id: ObjectId(),
    nom:"",
    image:"",
    genere_musical:["",""],
    albums:
    [
        {
            _id: ObjectId(),
            titol:"",
            any:"",
            image:"",
            songs:
            [
                {
                    _id: ObjectId(),
                    titol:"",
                    duracio:"",
                    num_reproduccions:""
                }
            ]
        }
    ]
});

db.usuarixs.insert({
    _id: ObjectId(),
    username:"",
    email:"",
    password:"",
    data_naixament:"",
    pais:"",
    zipcode:"",
    user_type:"", // [free|premium]
    suscripcio:{
        data_inici:"",
        rdata_renovacio:"",
        tipus_pagament:"", //[credit|paypal]
        credit_card_num:"",
        credit_card_mes:"",
        credit_card_cvv:"",
        paypal_username:"",
        pagament:[
            {
                _id: ObjectId(),
                data:"",
                total:""
            }
        ],
    },
    playlists:[
        {
            _id: ObjectId(),
            titol:"",
            estat:"", //[active|deleted]
            data_creacio:"",
            data_eliminacio:"",
            songs:[
                {
                    afegit_per_usuarix_id:"",
                    song_id:"",
                    data:""
                }
            ],
        }
    ],
    fav_artistxs_id:[],
    fav_albums_id:[],
    fav_song_id:[],
    fav_playlists:[]
});
db.createCollection('usuarixs');

db.usuarixs.insertMany([
    {
        _id: ObjectId("000000000000000000000001"),
        username:"Leyva",
        email:"leyvacan@gmail.com",
        password:"1234",
        data_naixement:"2006-20-05",
        pais:"ESP",
        zipcode:"08030",
        videos:[
            {
                id: ObjectId("100000000000000000000001"),
                titol:"titul 1",
                descripcio:"descripcio 1",
                tamany:"10",
                nom:"nom 1",
                durada:"10:00",
                thumbnail:"1",
                num_reproduccions:"123",
                likes:[
                    {
                        usuarix_id:ObjectId("000000000000000000000001"),
                        data:"2022-04-27",
                        hora:"12:00"
                    }
                ],
                dislikes:[
                    {
                        usuarix_id:ObjectId("000000000000000000000002"),
                        data:"2022-04-27",
                        hora:"16:00"
                    }
                ],
                estat: ["pb", "o", "pr"], // public, ocult, privat
                etiqueta:["super", "mainstream"],
                data_publicacio:"2022-04-27",
                hora_publicacio:"12:00",
                comentaris:[
                    {
                        id:ObjectId("200000000000000000000002"),
                        usuarix_id:ObjectId("000000000000000000000002"),
                        text:"No me ha gustado nada este video",
                        data:"2022-08-11",
                        hora:"12:00",
                        likes:[
                            {
                                usuarix_id:ObjectId("000000000000000000000001"),
                                data:"2022-08-11",
                                hora:"12:00"
                            }
                        ],
                        dislikes:[
                            {
                                usuarix_id:ObjectId("000000000000000000000002"),
                                data:"2022-08-12",
                                hora:"12:00"
                            }
                        ],
                    }
                ]
            },
        ],
        canal:ObjectId("300000000000000000000001"),
        canal_nom:"Leyva Can(al) 1",
        canal_descripcio:"Descripcio Leyva Can(al) 1",
        data_creacio:"2022-08-11",
        suscripcio_canal:[ObjectId("300000000000000000000002")],
        playlists:[
            {
                playlist_name:"¡Viernes!",
                data_creacio:"2022-08-11",
                estat:["pb", "pr"], //public o privat
                videos_id:[]
            }
        ]
    },
    {
        _id: ObjectId("000000000000000000000002"),
        username:"Leyva",
        email:"leyvacan@gmail.com",
        password:"1234",
        data_naixement:"2006-20-05",
        pais:"ESP",
        zipcode:"08030",
        videos:[
            {
                id: ObjectId("100000000000000000000002"),
                titol:"titol 2",
                descripcio:"descripcio 2",
                tamany:"10",
                nom:"nom 2",
                durada:"10:00",
                thumbnail:"1",
                num_reproduccions:"123",
                likes:[
                    {
                        usuarix_id:ObjectId("000000000000000000000002"),
                        data:"2022-07-27",
                        hora:"12:00"
                    }
                ],
                dislikes:[
                    {
                        usuarix_id:ObjectId("000000000000000000000001"),
                        data:"2022-07-27",
                        hora:"17:00"
                    }
                ],
                estat: ["pb", "o","pr"], // public, ocult, privat
                etiqueta:["mainstream"],
                data_publicacio:"2022-07-27",
                hora_publicacio:"23:00",
                comentaris:[
                    {
                        id:ObjectId("200000000000000000000002"),
                        usuarix_id:ObjectId("000000000000000000000001"),
                        text:"Debe mejorarse",
                        data:"2022-07-27",
                        hora:"24:00",
                        likes:[
                            {
                                usuarix_id:ObjectId("000000000000000000000002"),
                                data:"2022-07-27",
                                hora:"03:00"
                            }
                        ],
                        dislikes:[
                            {
                                usuarix_id:ObjectId("000000000000000000000001"),
                                data:"2022-07-27",
                                hora:"03:00"
                            }
                        ],
                    }
                ]
            },
        ],
        canal_id:ObjectId("300000000000000000000001"),
        canal_nom:"Leyva Can(al) 1",
        canal_descripcio:"Descripcio Leyva Can(al) 1",
        data_creacio:"2022-07-27",
        suscripcio_canal:[ObjectId("300000000000000000000002")],
        playlists:[
            {
                playlist_name:"Relax",
                data_creacio:"2022-04-27",
                estat:["pb","pr"], //public o privat
                videos_id:[ObjectId("100000000000000000000002")]
            }
        ]
    }
]);
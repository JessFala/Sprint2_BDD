## PARA CREAR, VERIFICAR Y EJECUTAR  CÓDIGO CON MONGODBCOMPASS Y LUEGO PODER EJECUTARLO EN JAVASCRIPT CON VISUAL STUDIO

1- He usado el MongoCompasDb para crear las BDD (colecciones, documentos...).

2- Una vez estaban todas las colecciones creadas, las he exportado en formato json a una carpeta previamente creada.

3- Con DbCshema he creado el esquema de la BDD y lo he exportado en formato png a la misma carpeta.

4- He abierto esa misma carpeta con el Visual Studio. En este punto aspectos importantes a tener en cuenta:

  a) $db = db.getSiblingDB('nombre_BDD') --> Esta es la primera línea de código que debemos añadir. 
  
  b) $db.createCollection('nombre_coleccion') --> Esto crea las distintas colecciones que ya hemos creado con el Compas. ¡¡¡¡¡Debe escribirse igual!!!!
  
5- Una vez ya hemos copiado todo el código vamos al Terminal donde hay que hacer varios pasos:
  
  c)	Escribir: mongo localhost:27017/test noombre_BDD.js --> ¡¡¡¡¡¡Siempre debe acabar en .js!!!!!!
  
  d)	Ejecutar y ver qué errores indica.
  
  e) Testear hasta que no dé ningún mensaje de error.

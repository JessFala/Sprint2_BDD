## PARA CREAR, VERIFICAR Y EJECUTAR  CÓDIGO CON MONGODB COMPASS Y LUEGO PODER EJECUTARLO EN JAVASCRIPT CON VISUAL STUDIO

1- He usado el MongoCompasDb para crear las BDD (colecciones, documentos...).

2- Una vez creadas las colecciones las he exportado en formato .json a una carpeta creada previamente.

3- He creado el esquema de la BDD y lo he exportado en formato png a la misma carpeta.

4- He abierto esa misma carpeta de trabajo con el Visual Studio Code. En este punto hay cosas importantes a tener en cuenta:

  a) $db = db.getSiblingDB('nombre_BDD') --> Esta es la primera línea de código que debemos añadir. 
  
  b) $db.createCollection('nombre_coleccion') --> Esto crea las distintas colecciones que ya hemos creado con el Compas. ¡¡¡¡¡Debe escribirse igual!!!!
  
5- Una vez ya se ha copiado todo el código es necesario ir a al Terminal y:
  
  c)	Escribir: mongo localhost:27017/test noombre_BDD.js --> ¡¡¡¡¡¡Siempre debe acabar en .js!!!!!!
  
  d)	Ejecutar y ver qué errores indica.
  
  e) Testear hasta que se hayan corregido todos los errores y no devuelva ningún mensaje.

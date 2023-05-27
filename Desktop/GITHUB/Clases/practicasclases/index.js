/**utilizamos dos dependencias */
console.log("hola en index.js")
const EXPRESS = require("express");
/**Accedemos a la configuracion de los archivos .env */
require("dotenv").config()

const APP = EXPRESS();
const PORT=3000;

/* express ocupar un puerto del pc*/
APP.listen(PORT, ()=>console.log('Connect for port ${PORT}')); 

/**Mongose Conectar con la BD NoSQL Mongo Conecte */
MONGOSE.connect(process.env.STRING-CONNECTION.then()=>console.log())
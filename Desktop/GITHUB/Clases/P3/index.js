console.log("hola en index.js")
const EXPRESS = require("express");
const APP = EXPRESS();
const PORT=3000;
/* express ocupar un puerto del pc*/
APP.listen(PORT, ()=>console.log('Connect for port ${PORT}')); 

/**Mongose Conectar con la BD NoSQL Mongo Conecte */
const express = require('express'); //Llamada del servicio de express
const conectarDB = require('./config/db');

const aplicacion = express(); //implementando el servicio en la aplicacion
const aplicacionform= express();

conectarDB();

// aplicacion.get('/', (req, res) => {
//     res.send("hola")
// })

//aplicacion.use('/api/agregarproducto', require('./routes/producto'));
//aplicacion1.use('/api/agregarformulario', require('./routes/formulario'));
aplicacion.use(express.json());
aplicacionform.use(express.json());

aplicacion.use('/api/producto', require('./Routes/producto'));
aplicacionform.use('/api/formulario',require('./Routes/formulario'));



//localhost:4000 - 127.0.0.1:4000
aplicacion.listen(4000, () => {
    console.log("El servidor esta funcionando");

});

aplicacionform.listen(4000,()=>{
    console.log("El servidor del formulario esta funcionando");
})
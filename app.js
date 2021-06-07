//inicio variable express/mongoose/bodyparser
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const dotenv = require("dotenv");
//const passsport = require('passport');


//iniciar middlewares
const helmet = require("helmet");
const morgan = require("morgan");


//routes
const userRoute = require("./routes/users");
const authRoute = require("./routes/auth");
const solucionRoute = require("./routes/Solucion");
const ticketRoute = require("./routes/Ticket");
const departmentRoute = require("./routes/Department")
const proyectoRoute = require("./routes/Proyecto");

// llamo el archivo dotenv que contiene variables de entorno
// require ('dotenv/config');
dotenv.config();

//inicio exprress
const app = express();


// const appRoutes = require('./routes/app');
// const UserRouter = require('./routes/Usuarios');

//cors
const cors = require("cors");
app.use(cors());

//AllowOrigin
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();

    app.options('*', (req, res) => {
        // allowed XHR methods  
        res.header('Access-Control-Allow-Methods', 'GET, PATCH, PUT, POST, DELETE, OPTIONS');
        res.send();
    });
});

//codifica las llamadas 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

//obteniendo server
/*app.get('/', (req, res) => {
    res.status(200).json({
        ok: true,
        mensaje: 'Peticion realizada correctamente'
    })
});*/

//conexion mongoatlas
/*mongoose.connect(
    process.env.DB_CONNECTION_STRING,
    { useUnifiedTopology: true, useNewUrlParser: true },
    (req, res) => {
        console.log('Connected to the database');
    } 
);*/
mongoose.connect(
    process.env.MONGO_URL,
    { useUnifiedTopology: true, useNewUrlParser: true , useCreateIndex: true,
        useNewUrlParser: true  },
    (req, res) => {
      console.log("Connected to MongoDB");
    }
  );

//middleware
app.use(express.json());
app.use(helmet());
app.use(morgan("common"));

//llamar rutas
app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/Solucion", solucionRoute);
app.use("/api/Ticket", ticketRoute);
app.use("/api/Departmen", departmentRoute);
app.use("/api/Proyectos", proyectoRoute);


app.listen(8800, () => {
    console.log("Backend server is running!");
  });


/*app.listen(3000, () => {
    console.log('Express Server On Port 3000: \x1b[32m%s\x1b[0m', 'online');
});*/
import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import db from './config/db.js';
import registroRoutes from './routes/registroRoutes.js'

const app = express();
app.use(express.json());

dotenv.config();

// Conexion a la base de datos 
try {
    await db.authenticate();
    db.sync()
    console.log('Conexion Correcta a la base de datos')
} catch (error) {
    console.log(error);
}

//Configurar CORS
const whitelist = [process.env.FRONTEND_URL];

const corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.includes(origin)) {
      // Puede consultar la API
     callback(null, true);
    } else {
      // No esta permitido
      callback(new Error("Error de Cors"));
    }
  },
};

app.use(cors(corsOptions));

//Routing
app.use("/api/registros", registroRoutes);



const PORT = process.env.PORT || 4000;
const servidor = app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
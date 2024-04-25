import express from "express";
import { obtenerRegistros, crearRegistro } from "../controllers/registroController.js";

const router = express.Router();

router.get("/registros/:anio/:mes/:dia", obtenerRegistros);
router.post('/crear-registro', crearRegistro)


export default router;
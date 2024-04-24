import express from "express";
import { obtenerRegistros } from "../controllers/registroController.js";

const router = express.Router();

router.get("/clientes", obtenerRegistros);


export default router;
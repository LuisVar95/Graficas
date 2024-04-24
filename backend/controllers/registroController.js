import Regsitro from "../models/Registro.js";

const obtenerRegistros = async (req, res) => {
    const registros = await Regsitro.findAll()
    res.json(registros)
}

export {
    obtenerRegistros
}
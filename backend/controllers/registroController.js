import Registro from "../models/Registro.js";
import { Sequelize } from "sequelize";

const obtenerRegistros = async (req, res) => {
    const { anio, mes, dia } = req.params;

    const registros = await Registro.findAll({
        where: {
            fecha: {
                [Sequelize.Op.and]: [
                    Sequelize.where(Sequelize.fn('YEAR', Sequelize.col('fecha')), anio),
                    Sequelize.where(Sequelize.fn('MONTH', Sequelize.col('fecha')), mes),
                    Sequelize.where(Sequelize.fn('DAY', Sequelize.col('fecha')), dia)
                ]
            }
        }
    });

    // Formatear la fecha de cada venta
    const registrosFormateados = registros.map((registro) => {
        return {
            ...registro.toJSON(),
            fecha: registro.fecha.toLocaleString('es-MX', { timeZone: 'America/Mexico_City' })
        };
    });

    res.json({ registrosFormateados });
}

const crearRegistro = async (req, res) => {
    try {
        const { name, produccion, ventas, costoProduccion, inventario, calidad, rendimientoMaquina, fecha} = req.body;

        const registro = await Registro.create({
            name,
            produccion,
            ventas,
            costoProduccion,
            inventario,
            calidad,
            rendimientoMaquina,
            fecha
        })

        return res.status(201).json({ registro })
    } catch (error) {
        console.error('Error al crear el pedido:', error);
        return res.status(500).json({ error: 'Error interno del servidor' });
    }
}

export {
    obtenerRegistros,
    crearRegistro
}
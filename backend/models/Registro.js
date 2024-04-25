import { DataTypes } from "sequelize";
import db from "../config/db.js";

const Registro = db.define('registros', {
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    produccion: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    ventas: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    costoProduccion: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    inventario: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    calidad: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    rendimientoMaquina: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    fecha: {
        type: DataTypes.DATE,
        allowNull: false,
    },
});

export default Registro;
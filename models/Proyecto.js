const mongoose = require("mongoose");
const moment = require("moment");

const ProyectotSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
      required: true,
    },
    CodigoTendencia: {
      type: String,
    },
    NombreProyecto: {
      type: String,
    },
    DetalleProyecto: {
      type: String,
      required: true
    },
    Prioridad: {
        type: String,
    },
    Descripcion: {
        type: String,
    },
    isClosed: {
        typed: Boolean,
        default: false
    },
    FechaActual:{
        type: Date,
        default: moment.now()
    },
    FechaCreacion:{
        type: Date
    },
    Colaboraciones: {
        type: String
    },
    HorasEstimadas: {
        type: Number
    },

  },
  { timestamps: true }
);

module.exports = mongoose.model("Proyecto", ProyectotSchema);
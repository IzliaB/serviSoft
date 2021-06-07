const mongoose = require("mongoose");
const moment = require("moment");

const TicketSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
      required: true,
    },
    tittle: {
      type: String,
    },
    descripcion: {
      type: String,
    },
    deparmentId: {
      type: String,
      required: true
    },
    supported_by: {
        type: String
    },
    priority: {
        type: Number,
        default: 0
    },
    isClosed: {
        typed: Boolean,
        default: false
    },
    created_at:{
        type: Date,
        default: moment.now()
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Ticket", TicketSchema);
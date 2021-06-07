const mongoose = require("mongoose");

const DepartmentSchema = new mongoose.Schema(
  {
    department: {
      type: String
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Department", DepartmentSchema);
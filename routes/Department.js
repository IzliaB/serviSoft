const router = require("express").Router();
const Department = require("../models/Department");

//create a post

router.post("/", async (req, res) => {
    const newDepartment = new Department(req.body);
    try {
      const savedDepartement = await newDepartment.save();
      res.status(200).json(savedDepartement);
    } catch (err) {
      res.status(500).json(err);
    }
  });


//get a post

router.get("/:id", async (req, res) => {
    try {
      const department = await Department.findById(req.params.id);
      res.status(200).json(department);
    } catch (err) {
      res.status(500).json(err);
    }
  });
  
  module.exports = router;
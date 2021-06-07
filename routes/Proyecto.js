const router = require("express").Router();
const Proyecto = require("../models/Proyecto");

//create a post

router.post("/", async (req, res) => {
    const newProyecto = new Proyecto(req.body);
    try {
      const savedProyecto = await newProyecto.save();
      res.status(200).json(savedProyecto);
    } catch (err) {
      res.status(500).json(err);
    }
  });

router.get("/:id", async (req, res) => {
    try {
      const proyecto  = await Proyecto.findById(req.params.id);
      res.status(200).json(proyecto);
    } catch (err) {
      res.status(500).json(err);
    }
  });

  module.exports = router;
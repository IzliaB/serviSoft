const router = require("express").Router();
const Ticket = require("../models/Ticket");
const User = require("../models/User");

//create a post

router.post("/", async (req, res) => {
    const newTicket = new Ticket(req.body);
    try {
      const savedTicket = await newTicket.save();
      res.status(200).json(savedTicket);
    } catch (err) {
      res.status(500).json(err);
    }
  });

//update a post

router.put("/:id", async (req, res) => {
    try {
      const ticket = await Ticket.findById(req.params.id);
      if (ticket.userId === req.body.userId) {
        await ticket.updateOne({ $set: req.body });
        res.status(200).json("the ticket has been updated");
      } else {
        res.status(403).json("you can update only your ticket");
      }
    } catch (err) {
      res.status(500).json(err);
    }
  });

//delete a post

router.delete("/:id", async (req, res) => {
    try {
      const ticket = await Ticket.findById(req.params.id);
      if (ticket.userId === req.body.userId) {
        await ticket.deleteOne();
        res.status(200).json("the post has been deleted");
      } else {
        res.status(403).json("you can delete only your post");
      }
    } catch (err) {
      res.status(500).json(err);
    }
  });

 //get a ticket

router.get("/:id", async (req, res) => {
    try {
      const ticket = await Ticket.findById(req.params.id);
      res.status(200).json(ticket);
    } catch (err) {
      res.status(500).json(err);
    }
  });

//get timeline posts

router.get("/timeline/all", async (req, res) => {
  try {
    const currentUser = await User.findById(req.body.userId);
    const userPosts = await Ticket.find({ userId: currentUser._id });
    const friendPosts = await Promise.all(
      currentUser.followings.map((friendId) => {
        return Ticket.find({ userId: friendId });
      })
    );
    res.json(userPosts.concat(...friendPosts))
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
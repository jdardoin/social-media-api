const { User, Thought } = require("../models");

const thoughtController = {
  async getAllThoughts(req, res) {
    try {
      const dbThoughtData = await Thought.find({}).populate("reactions");
      res.json(dbThoughtData);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  },

  async getThoughtById(req, res) {
    try {
      const dbThoughtData = await Thought.findOne({
        _id: req.params.id,
      }).populate("reactions");
      if (!dbThoughtData) {
        res.status(404).json({
          message: "No thought found with this id!",
        });
        return;
      }
      res.json(dbThoughtData);
    } catch (err) {
      console.log(err);
      res.status(400).json(err);
    }
  },

  async createThought(req, res) {
    try {
      const dbThoughtData = await Thought.create(req.body);
      res.json(dbThoughtData);
    } catch (err) {
      console.log(err);
      res.status(400).json(err);
    }
  },

  async updateThought(req, res) {
    try {
      const dbThoughtData = await Thought.findOneAndUpdate(
        {
          _id: req.params.id,
        },
        req.body,
        {
          new: true,
        }
      );
      if (!dbThoughtData) {
        res.status(404).json({
          message: "No thought found with this id!",
        });
        return;
      }
      res.json(dbThoughtData);
    } catch (err) {
      console.log(err);
      res.status(400).json(err);
    }
  },

  async deleteThought(req, res) {
    try {
      const dbThoughtData = await Thought.findOneAndDelete({
        _id: req.params.id,
      });
      if (!dbThoughtData) {
        res.status(404).json({
          message: "No thought found with this id!",
        });
        return;
      }
      res.json(dbThoughtData);
    } catch (err) {
      console.log(err);
      res.status(400).json(err);
    }
  },

  async addReaction(req, res) {
    try {
      const dbThoughtData = await Thought.findOneAndUpdate(
        {
          _id: req.params.id,
        },
        { $addToSet: { reactions: req.body } },
        { new: true, runValidators: true }
      );
      if (!dbThoughtData) {
        res.status(404).json({
          message: "No thought found with this id!",
        });
        return;
      }
      res.json(dbThoughtData);
    } catch (err) {
      console.log(err);
      res.status(400).json(err);
    }
  },

  async deleteReaction(req, res) {
    try {
      const dbThoughtData = await Thought.findOneAndUpdate(
        {
          _id: req.params.id,
        },
        { $addToSet: { reactions: { reactionId: req.params.reactionId } } },
        { new: true }
      );
      if (!dbThoughtData) {
        res.status(404).json({
          message: "No thought found with this id!",
        });
        return;
      }
      res.json(dbThoughtData);
    } catch (err) {
      console.log(err);
      res.status(400).json(err);
    }
  },
};
module.exports = thoughtController;

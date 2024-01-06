const {
    User, Thought
}
= require('../models');

const userController = {
    async getAllUsers(req, res) {
        try {
            const dbUserData = await User.find({}).populate('thoughts').populate('friends');
            res.json(dbUserData);
        } catch (err) {
            console.log(err);
            res.status(500).json(err);
        }
    },
    async getUserById(req, res) {
        try {
            const dbUserData = await User.findOne({
                _id: req.params.id
            }).populate('thoughts').populate('friends');
            if (!dbUserData) {
                res.status(404).json({
                    message: 'No user found with this id!'
                });
                return;
            }
            res.json(dbUserData);
        } catch (err) {
            console.log(err);
            res.status(400).json(err);
        }
    }, 
    async createUser(req, res) {
        try {
            const dbUserData = await User.create(req.body);
            res.json(dbUserData);
        } catch (err) {
            console.log(err);
            res.status(400).json(err);
        }
    }
};

module.exports = userController;

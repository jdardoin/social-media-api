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
    }
};

module.exports = userController;

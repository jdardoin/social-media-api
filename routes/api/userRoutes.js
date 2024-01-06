const router = require('express').Router();

const {
    getAllUsers, 
    getUserById,
    createUser,
} = require('../../controllers/user-controller');

router.get('/', getAllUsers).post('/', createUser);

router.get('/:id', getUserById);

module.exports = router;
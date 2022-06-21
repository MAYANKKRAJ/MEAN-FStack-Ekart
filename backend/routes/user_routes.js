const router = require('express').Router();
const regUser = require('../controller/auth_ctrl');
const client = require('../controller/user_ctrl');
const { verifyToken, verifyTokenAndAuth, verifyTokenAndAdmin } = require('./verify_token');

//REGISTER USER
router.post('/register', regUser.registerUser);

router.post('/refresh',regUser.refresh)
router.post('/login', regUser.signin );
router.put('/update/:id',[verifyTokenAndAuth],client.update );
router.delete('/delete/:id',[verifyTokenAndAuth],client.deleteUserbyId );
router.get('/users', client.findUsers);
router.get('/users/:id',[verifyTokenAndAdmin],client.findUserbyId);

module.exports = router; 
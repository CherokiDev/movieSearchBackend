const router = require('express').Router();
const UserController = require('../controllers/userController');

//Endpoint de alta de usuario
router.post('/signup', UserController.signup);

//Endpoint de login de usuario
router.post('/login', UserController.login);

/*
//Endpoint de perfil de usuario
router.get('/:id', UserController.getById);
*/

//Endpoint de baja de usuario
router.delete('/deleteUser', UserController.delete);



module.exports = router;
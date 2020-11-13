const router = require('express').Router();
const OrderController = require('../controllers/orderController')

const auth = require('../middleware/auth.js');

//Ruta para mostrar todos los pedidos
router.get('/', auth, OrderController.getAll);
//Ruta para crear un pedido
router.post('/', auth, OrderController.create);


module.exports = router;
const router = require('express').Router();
const OrderController = require('../controllers/orderController')

const auth = require('../middleware/auth.js');

//Ruta para mostrar todos los pedidos
router.get('/all', auth, OrderController.getAll);
//Ruta para crear un pedido
router.post('/', auth, OrderController.create);

//Ruta para mostrar todos los pedidos de un usuario
router.get('/:UserId', auth, OrderController.getUserOrders)


module.exports = router;
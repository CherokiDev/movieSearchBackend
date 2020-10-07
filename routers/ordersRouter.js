const router = require('express').Router();
const OrderController = require('../controllers/orderController')


//Ruta para mostrar todos los pedidos
router.get('/', OrderController.getAll);

//Ruta para crear un pedido
router.post('/', OrderController.create);


module.exports = router;
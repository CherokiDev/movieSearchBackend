const router = require('express').Router();
const MovieController = require('../controllers/movieController');

//Ruta para mostrar todas las películas
router.get('/', MovieController.getAll);

//Ruta para mostrar las películas filtradas por Id
router.get('/:id', MovieController.getById);

//Ruta para mostrar las películas filtradas por título
router.get('/title/:title', MovieController.getByTitle);

//Ruta para añadir una película nueva a la tabla
router.post('/', MovieController.create);


module.exports = router;
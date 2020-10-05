const router = require('express').Router();
const MovieController = require('../controllers/movieController');


router.get('/', MovieController.getAll);
router.get('/:id', MovieController.getById);
router.get('/name/:name', MovieController.getByName);


module.exports = router;
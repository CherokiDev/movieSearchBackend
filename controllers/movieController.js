const { movie, Sequelize} = require('../models');

const Op = Sequelize.Op;

const MovieController = {
    getAll(req, res) {
        movie.findAll()
            .then(movies => res.send(movies))
            .catch(error => {
                console.error(error);
                res.status(500).send({
                    message: 'There was a problem trying to get movies'
                })
            })
    },

    getById(req, res) {
        movie.findByPk(req.params.id)
            .then(movie => res.send(movie))
            .catch(error => {
                console.error(error);
                res.status(500).send({
                    message: 'There was a problem trying to get the movie'
                })
            })
    },

    getByName(req, res) {
        movie.findAll({
                where: {
                    name: {
                        [Op.like]: `%${req.params.name}%`
                    }
                }
            })
            .then(category => res.send(category))
            .catch(error => {
                console.error(error);
                res.status(500).send({
                    message: 'There was a problem trying to get the category'
                })
            })
    }

}




module.exports = MovieController
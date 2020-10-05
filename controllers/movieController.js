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

    getByTitle(req, res) {
        movie.findAll({
                where: {
                    title: {
                        [Op.like]: `%${req.params.title}%`
                    }
                }
            })
            .then(movie => res.send(movie))
            .catch(error => {
                console.error(error);
                res.status(500).send({
                    message: 'There was a problem trying to get the movie'
                })
            })
    },

    create(req, res) {
        movie.create(req.body)
            .then(movie => res.send(movie))
            .catch(error => {
                console.error(error);
                res.status(500).send({
                    message: 'There was a problem trying to create the movie'
                })
            })
    }

}




module.exports = MovieController
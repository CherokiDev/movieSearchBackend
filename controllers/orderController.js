const { Order, movie, User } = require('../models');

const OrderController = {
    async getAll(req, res) {
        try{
            const orders = await Order.findAll({
                attributes: {
                    exclude: ['UserId']
                },
                include: [{
                    model: movie,
                    attributes: ['title'],
                    through: {
                        attributes: []
                    }
                }, {
                    model: User,
                    attributes: ['name', 'email']
                }]
            });
            res.send(orders);
        } catch (error) {
            console.error(error);
            res.status(500).send({
                error,
                message: 'There was a problem trying to get the orders'
            })
        }
    }, 
    create(req, res) {
        const returnDate = new Date();
        returnDate.setDate(returnDate.getDate() + 2)
        Order.create({
            status: 'Rented',
            returnDate,
            UserId: req.user.id
        })
        .then(order => {
            return order.addMovie(req.body.movies);
        })
        .then(() => res.send({
            message: 'order successfully completed'
        }))
        .catch(error => {
            console.error(error);
            res.status(500).send({
                message: 'There was a problema trying to create the order'
            })
        })
    }
}

module.exports = OrderController;
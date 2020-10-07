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
    }
}

module.exports = OrderController;
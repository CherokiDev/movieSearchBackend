const {
    User
} = require('../models');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const UserController = {
    async signup(req, res) {
        try {
            req.body.password = await bcrypt.hash(req.body.password, 9)
            const user = await User.create(req.body);
            res.status(201).send(user)
        } catch (error) {
            console.error(error);
            res.status(500).send({
                error,
                message: 'There was a problem trying to register the user'
            })
        }
    },
    async login(req, res) {
        try {
            const user = await User.findOne({
                where: {
                    email: req.body.email
                }
            })
            if (!user) {
                return res.status(400).send({
                    message: 'Wrong credentials'
                })
            }
            const isMatch = await bcrypt.compare(req.body.password, user.password)
            if (!isMatch) {
                return res.status(400).send({
                    message: 'Wrong credentials'
                })
            }
            const token = jwt.sign({
                id: user.id
            }, 'supercalifragilisticoespialidoso', {
                expiresIn: '30d'
            });
            console.log(token)
            user.token = token;
            await user.save()
            res.send(user);
        } catch (error) {
            console.error(error);
            res.status(500).send({
                message: 'There was a problem trying to login'
            })
        }

    },

    async logout(req, res) {
        try {
            const updateValues = {
                token: ""
            };
            const user = await User.update(updateValues, 
                {
                    where: {
                        email: req.params.email
                    }
                });
            res.send({
                message: `Goodbye ${user.firstname}`
            });
        } catch (error) {
            console.error(error);
            res.status(500).send({
                error, message: 'Hubo un problema'
            })
        }
    },

    async getByEmail(req, res) {
        try {
            const email = await User.findOne({
                where: {
                    email: req.params.email
                },
                attributes: {
                    exclude: ['token', 'id']
                }
            })
            if (!email) {
                return res.status(400).send({
                    message: 'Email not found'
                })
            }
            res.send(email);
        } catch (error) {
            console.error(error);
            res.status(500).send({
                message: 'There was a problem trying to get the user'
            })
        }
    },

    /*
    getByEmail(req, res) {
        User.findAll({
                where: {
                    email: req.params.email
                }, attributes: {
                    exclude: ['token', 'id']
                }
            })
            .then(user => res.send(user))
            .catch(error => {
                console.error(error);
                res.status(500).send({
                    message: 'There was a problem trying to get the user'
                })
            })
    },*/

    async delete(req, res) {
        try {
            const email = await User.destroy({
                where: {
                    email: req.body.email
                }
            })
            if (!email) {
                return res.status(400).send({
                    message: 'Email not found'
                })
            }
            res.send({
                message: 'Account successfully removed'
            })
        } catch (error) {
            console.error(error);
            res.status(500).send({
                message: 'There was a problem trying to remove the account'
            })
        }
    }

    /*
    delete(req, res) {
        User.destroy({
                where: {
                    email: req.body.email
                }
            })
            .then((email) => {
                if (!email) {
                    return res.send({
                        message: 'Email not found'
                    })
                }
                res.send({
                    message: 'Account successfully removed'
                })
            })
            .catch(error => {
                console.error(error);
                res.status(500).send({
                    message: 'There was a problem trying to remove the account'
                })
            })
    }*/
}



module.exports = UserController;
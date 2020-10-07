const express = require('express');
const moviesRouter = require('./routers/movieRouter');
const usersRouter = require('./routers/userRouter');
const ordersRouter = require('./routers/ordersRouter');
const auth = require('./middleware/auth');


const app = express();
const PORT = 3000;
app.use(express.json());

app.get('/', auth, (req, res) => res.send(req.user))

//Endpoint de películas
app.use('/movies', moviesRouter);

//Endpoint de usuarios
app.use('/users', usersRouter);

//Endpoint de pedidos
app.use('/orders', auth, ordersRouter);


app.listen(PORT, () => console.log(`Server UP on port ${PORT}`));
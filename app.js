const express = require('express');
const moviesRouter = require('./routers/movieRouter');
const usersRouter = require('./routers/userRouter');
const ordersRouter = require('./routers/ordersRouter');

const app = express();
const PORT = 3000;
app.use(express.json());

//Endpoint de películas
app.use('/movies', moviesRouter);

//Endpoint de usuarios
app.use('/users', usersRouter);

//Endpoint de pedidos
app.use('/orders', ordersRouter);


app.listen(PORT, () => console.log(`Server UP on port ${PORT}`));
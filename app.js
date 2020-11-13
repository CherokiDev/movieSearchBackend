const express = require('express');
const moviesRouter = require('./routers/movieRouter');
const usersRouter = require('./routers/userRouter');
const ordersRouter = require('./routers/ordersRouter');
const cors = require('./middleware/cors');


const app = express();

const PORT = process.env.PORT || 3000;


app.use(cors);
app.use(express.json());

app.options((req, res) => res.send())
    // app.get('/', auth, (req, res) => res.send(req.user))

//Endpoint de películas
app.use('/movies', moviesRouter);

//Endpoint de usuarios
app.use('/users', usersRouter);

//Endpoint de pedidos
app.use('/orders', ordersRouter);


app.listen(PORT, () => console.log(`Server UP on port ${PORT}`));
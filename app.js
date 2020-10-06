const express = require('express');
const moviesRouter = require('./routers/movieRouter');
const usersRouter = require('./routers/userRouter');

const app = express();
const PORT = 3000;
app.use(express.json());


app.use('/movies', moviesRouter);
app.use('/users', usersRouter);






app.listen(PORT, () => console.log(`Server UP on port ${PORT}`));
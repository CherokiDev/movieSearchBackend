const express = require('express'); //Requiere la librería express

const moviesRouter = require('./routers/movieRouter');

const app = express();
const PORT = 3000;
app.use(express.json());


app.use('/movies', moviesRouter);






app.listen(PORT, () => console.log('Server ON'));
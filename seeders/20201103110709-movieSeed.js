'use strict';

// Importamos las dependencias necesarias
const axios = require ('axios');

// Modelo del seed de Peliculas
const addMovies = async ( movies, page ) => {

  const res = await axios.get ('https://api.themoviedb.org/3/movie/popular?api_key=cea68b520beecac6718820e4ac576c3a&append_to_response=credits&language=es-ES&page=' + page);
  const now = newDate ();

  const moviesChunk = res.data.results.map ( movie => ({
    title: movie.title,
    poster_path: movie.poster_path,
    overview: movie.overview,
    release_date: movie.release_date,
    createdAt: now,
    updatedAt: now
}))

movies.push ( ...moviesChunk );

return res.data.total_pages
}



module.exports = {
  up: async (queryInterface, Sequelize) => {
  
  },

  down: async (queryInterface, Sequelize) => {
  
  }
};

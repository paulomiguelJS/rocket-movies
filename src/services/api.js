const BASE = "https://api.themoviedb.org/3/movie/";
const movieId = Math.floor(Math.random() * 1000 + 1);
const KEY = "559e0716959e653ce25f7d162bdb410b";
console.log(movieId);

export const api = {
  getMovie: async () => {
    let response = await fetch(`${BASE}${movieId}?api_key=${KEY}`);
    let data = await response.json();
    console.log(movieId)
    return data;
  },
};



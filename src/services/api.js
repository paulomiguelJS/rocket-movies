const BASE = "https://api.themoviedb.org/3/movie/";
const KEY = "559e0716959e653ce25f7d162bdb410b";

export const api = {
  getMovie: async () => {
    const movieId = Math.floor(Math.random() * 1000 + 1);

    try {
      let response = await fetch(`${BASE}${movieId}?api_key=${KEY}`);
      let data = await response.json();
      return data;
    } catch {
      alert("Something went wrong, please try again!");
    }
  },
};

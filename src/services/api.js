import { useState } from "react";

const BASE = "https://api.themoviedb.org/3/movie/";
const movieId = Math.floor(Math.random() * 1000 + 1);
const KEY = "559e0716959e653ce25f7d162bdb410b";
  


export const api = {
  getMovie: async () => {
    try{
      let response = await fetch(`${BASE}${movieId}?api_key=${KEY}`);
      let data = await response.json();
      return data;
    } catch {
      alert("Algo errado aconteceu")
    }
   
  },
};



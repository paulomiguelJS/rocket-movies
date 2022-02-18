import React, { useEffect, useState } from "react";
import Movies from "../../components/Movies";
import shuffle from "../../assets/shuffle.svg";
import { MainContent } from "./styles";
import Button from "../../components/Button";
import { api } from "../../services/api";

const Home = () => {

  const IMG = "https://image.tmdb.org/t/p/w1280"

  const [movie, setMovie] = useState([87]);

  useEffect(() => {
    getMovie();
  }, []);


  

  const getMovie = async () => {
    let data = await api.getMovie();
    
    setMovie(data);
  };
  
  return (
    <>
      <MainContent>
        <img className="logo" src={shuffle} alt="Suffle" />
        <h1>Nao sabe o que assitir?</h1>
        <Movies
          poster={IMG + movie.poster_path} alt={movie.title}
          title={movie.title}
          description={movie.overview}
        />
        <Button onClick={getMovie} title="Encontrar Filme" />
        
        <span>
          Clique em "Encontrar filme" que traremos informações <br /> de algum
          filme para você assistir hoje.
        </span>
      </MainContent>
    </>
  );
};

export default Home;

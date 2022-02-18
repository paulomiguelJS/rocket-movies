import React, { useEffect, useState } from "react";
import Movies from "../../components/Movies";
import shuffle from "../../assets/shuffle.svg";
import study from "../../assets/study.svg";

import { MainContent } from "./styles";
import Button from "../../components/Button";
import { api } from "../../services/api";

const Home = () => {
  const IMG = "https://image.tmdb.org/t/p/w1280";

  const [movie, setMovie] = useState([0]);

  useEffect(() => {
    getMovie();
  }, []);

  const getMovie = async () => {
    let data = await api.getMovie();
    setMovie(data);
    console.log(data);
  };

  return (
    <>
      <MainContent>
        <img className="logo" src={shuffle} alt="Suffle" />
        <h1>Not Sure what to Watch?</h1>
        {movie.status ? (
          <Movies
            poster={IMG + movie.poster_path}
            alt={movie.title}
            title={movie.title}
            description={movie.overview}
          />
        ) : (
          <Movies
            poster={study}
            alt="Error"
            title="Oops, today is not the day to watch a movie.  Let's code! 🚀"
            description="Successful people do what unsuccessful people are not willing to do. Don't wish it were easier; wish you were better."
          />
        )}
        
        <Button onClick={getMovie} title="Find Movie" />
        <span>
          Click on "Find Movie" and we will bring you information <br />
          of any movie for you to watch today
        </span>
      </MainContent>
    </>
  );
};

export default Home;

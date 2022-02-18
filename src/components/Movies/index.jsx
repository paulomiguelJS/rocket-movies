import React from "react";
import { MoviesContainer } from "./styles";

const Movies = ({poster, alt, title, description}) => {
  return (
    <>
      <MoviesContainer>
        <div>
          <img src={poster} alt={alt} />
        </div>
        <div>
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
      </MoviesContainer>
    </>
  );
};

export default Movies;

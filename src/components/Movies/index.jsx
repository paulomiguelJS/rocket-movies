import React from "react";

import { MoviesContainer } from "./styles";

const Movies = ({title, description}) => {
  return (
    <>
      <MoviesContainer>
        <div>
          <img src="" alt="IMAGEM" />
        </div>
        <div>
          <h1>{title}</h1>
          <p>{description}</p>
        </div>
      </MoviesContainer>
    </>
  );
};

export default Movies;

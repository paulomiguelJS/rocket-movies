import React from "react";
import mov from "../../assets/test.jpg";
import { MoviesContainer } from "./styles";

const Movies = ({title, description}) => {
  return (
    <>
      <MoviesContainer>
        <div>
          <img src={mov} alt="IMAGEM" />
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

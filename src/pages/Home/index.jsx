import React, { useEffect, useState } from "react";
import Movies from "../../components/Movies";
import shuffle from "../../assets/shuffle.svg";
import { MainContent } from "./styles";
import Button from "../../components/Button";
import { api } from "../../services/api";

const Home = () => {

 

  useEffect(() => {
    loadMovie()
  }, [])


  const loadMovie = async () => {
    let data = await api.getMovie()
  }

 

  return (
    <>
      <MainContent>
        <img src={shuffle} alt="Suffle" />
        <h1>Nao sabe o que assitir?</h1>
        <Movies
          title=""
          description=""
        />
        <Button  title="Encontrar Filme"/>
        <span>
          Clique em "Encontrar filme" que  traremos informações <br /> de algum filme
          para você assistir hoje.
        </span>
      </MainContent>
    </>
  );
};

export default Home;

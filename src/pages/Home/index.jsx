import React, { useEffect } from "react";
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
          title="A volta dos que nao foram"
          description="Em Nova York Peter Venkman, Ray Stantz e Egon Spengler são três
cientistas do departamento de psicologia da Columbia University, que
se dedicam ao estudo de casos paranormais. Quando a subvenção
termina eles são despedidos e Venkman sugere que abram um negócio
próprio, a exterminadora de fantasmas Ghostbusters. Inicialmente
eles só têm despesas e nenhum cliente, mas eis que surge Dana
Barrett, uma violoncelista que teve uma experiência assustadora em
seu apartamento."
        />
        <Button title="Encontrar Filme"/>
        <span>
          Clique em "Encontrar filme" que  traremos informações <br /> de algum filme
          para você assistir hoje.
        </span>
      </MainContent>
    </>
  );
};

export default Home;

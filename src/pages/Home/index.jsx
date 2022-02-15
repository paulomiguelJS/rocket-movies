import React from "react";
import  Movies  from "../../components/Movies";
import shuffle from '../../assets/shuffle.svg'
import { mainContent } from "./styles";

const Home = () => {
  return (
    <div>
    <img src={shuffle} alt="Suffle" />
      <Movies />
    </div>
  );
};

export default Home;

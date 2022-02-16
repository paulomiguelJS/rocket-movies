import { Button as StyledButton } from "./styles";
import shuffle from "../../assets/small-shuffle.svg"


const Button = ({title}) => {
  return <StyledButton><img src={shuffle} alt="shuffle" />{title}</StyledButton>
};

export default Button;

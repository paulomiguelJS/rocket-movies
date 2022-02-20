import { Button as StyledButton } from "./styles";
import shuffle from "../../assets/small-shuffle.svg"

const Button = ({title, onClick}) => {
  return <StyledButton
   onClick={onClick}><img className="img-btn " src={shuffle} alt="shuffle"/>{title}</StyledButton>
};

export default Button;

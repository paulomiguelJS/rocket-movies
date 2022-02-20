import { NotFound } from "./styles";
import shuffle from "../../assets/shuffle.svg";

const PageNotFound = () => {
  return (
    <NotFound><>
     <img src={shuffle} alt="" />
      <div>
        <h1>404</h1>
        <p>ERROR</p>
        <span>Page not Found</span>
      </div>
    </>
     
    </NotFound>
  );
};

export default PageNotFound;

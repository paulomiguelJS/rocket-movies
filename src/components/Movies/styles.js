import styled from "styled-components";

export const MoviesContainer = styled.div`
  display: flex;
  justify-content: space-between; 
  align-items: center;

  padding: 1rem;
  gap: 4rem;
  color: #fff;

  width: 60%;


  border: 1px solid red;

  h2{
    font-weight: bold;
    font-size: 20px;
}

p{
  font-size: 12px;
  line-height: 20px;

  margin-top: 1rem;
}

  img{
    display: block;
      border: 1px solid red;
      width: 100%;
      min-width: 160px;
  }

  media(max-width: 840px) {

    

    img{

    border: 1px solid green;
    }
  }


`;

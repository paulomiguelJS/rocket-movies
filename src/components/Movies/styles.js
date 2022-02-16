import styled from "styled-components";

export const MoviesContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 1rem;
  gap: 4rem;
  color: #fff;

  width: 90%;

  h2 {
    font-weight: bold;
    font-size: 20px;
  }

  p {
    font-size: 12px;
    line-height: 20px;

    margin-top: 1rem;
  }

  img {
    display: block;

    width: 100%;

    min-width: 160px;
    max-width: 160px;

    margin-bottom: 1rem;


  }

  @media only screen and (max-width: 600px) {
    flex-direction: column;
  gap: 1rem;
  }
`;

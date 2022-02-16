import styled from "styled-components";

export const MoviesContainer = styled.div`
  display: flex;
  justify-content: space-between;

  margin-top: 2rem;
  padding: 1rem;
  gap: 4rem;
  color: #fff;

  width: 100%;

  h2 {
    font-weight: bold;
    font-size: 20px;
  }

  p {
    font-size: 16px;
    line-height: 20px;

    margin-top: 1rem;
  }

  img {
    display: block;

    width: 100%;
    min-width: 260px;

    margin: 0;
  }

  @media only screen and (max-width: 600px) {
    flex-direction: column;
    align-items: center;
  gap: 1rem;
  }

  img{
    max-width: 160px;
    margin-bottom: 2rem;
  }
`;

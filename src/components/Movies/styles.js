import styled from "styled-components";

export const MoviesContainer = styled.div`
  display: flex;
  justify-content: space-between;

  margin: 3rem 0;
  padding: 1rem;

  gap: 4rem;
  color: #fff;

  width: 100%;

  opacity: 0;
  transform: translateX(-20px);
  animation: animeLeft 0.3s forwards;

  @keyframes animeLeft {
  to {
    opacity: 1;
    transform: initial;
  }
}

  h2 {
    font-weight: bold;
    font-size: 20px;

    margin-top: 2rem;
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

    margin-top: 1rem;
    gap: 1rem;

  }

  img {
    max-width: 160px;
  }
`;

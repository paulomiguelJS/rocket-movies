import styled from "styled-components";

export const NotFound = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  text-align: center;

  height: 100vh;

  img {
    margin-top: 5rem;
  }

  h1 {
    font-size: 9rem;
    font-weight: bold;
    color: var(--title);

    margin-top: 8rem;
  }

  p {
    font-size: 3rem;
    font-weight: bold;
    color: var(--title);
  }

  span {
    color: var(--title);
  }
`;

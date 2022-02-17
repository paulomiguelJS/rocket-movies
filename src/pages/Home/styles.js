import styled from "styled-components";

export const MainContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;
  height: 100vh;

  .logo {
    margin-top: 3rem;
  }

  h1 {
    font-weight: bold;
    font-size: 40px;
    color: #fff;
    margin-top: 3rem;
    text-align: center;
  }

  span {
    margin-top: 1rem;
    padding-bottom: 1rem;

    font-size: 10px;
    font-weight: 400;
    text-align: center;

    color: #fff;
  }
`;

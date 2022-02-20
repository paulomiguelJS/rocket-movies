import styled from "styled-components";

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  background-color: var(--bg-button);
  color: var(--color-button);

  width: 220px;
  height: 50px;
  min-height: 50px;
  border-radius: 5px;
  outline: none;
  border: none;

  font-size: 16px;
  font-weight: bold;

  cursor: pointer;

  &:hover {
    opacity: 0.9;
  }

  .img-btn {
    margin-right: 10px;
  }
`;

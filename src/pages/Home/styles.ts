import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  html {
    height: 100%;
  }

  body {
    background: linear-gradient(135deg, #e2e2e2, #ffffff);
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: 'Catamaran', sans-serif;
    overflow: hidden;
  }

  * {
    box-sizing: border-box;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: rgba(0, 0, 0, 0.7);
  border-radius: 15px;
  padding: 20px;
  max-width: 600px;
  width: 100%;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.5);

  > p {
    color: #f0f0f0;
    font-size: 1.2rem;
    margin: 0;
  }

  .score {
    color: #ffd700;
    font-size: 2.5rem;
    margin: 10px 0;
    font-weight: bold;
  }

  h1 {
    font-family: "Fascinate Inline", sans-serif;
    background-image: linear-gradient(180deg, #ffffff, #87f1ff);
    background-clip: text;
    color: transparent;
    font-size: 3rem;
    text-align: center;
    margin: 20px 0;
    filter: drop-shadow(3px 3px 5px rgba(0, 0, 0, 0.3));
  }

  .start,
  .next {
    cursor: pointer;
    background: linear-gradient(180deg, #ffffff, #ffcc91);
    border: 2px solid #d38558;
    box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.3);
    border-radius: 12px;
    height: 50px;
    margin: 10px 0;
    padding: 0 30px;
    font-size: 1.2rem;
    color: #333;
    font-weight: bold;
    transition: background 0.3s, transform 0.3s;

    &:hover {
      background: linear-gradient(180deg, #ffcc91, #ffffff);
      transform: scale(1.05);
    }

    &:active {
      background: linear-gradient(180deg, #ffffff, #ffcc91);
      transform: scale(0.95);
    }
  }

  .start {
    max-width: 220px;
  }
`;

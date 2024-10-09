import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  html, body {
    height: 100%;
    width: 100%;
    margin: 0;
    padding: 0;
    font-family: 'Catamaran', sans-serif;
    background: linear-gradient(140deg, #061028, #474188ff);
    display: flex;
    justify-content: center;
    align-items: center;
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
  background: rgba(20, 20, 30, 0.95);
  border-radius: 15px;
  padding: 25px;
  width: 600px;
  height: 800px;
  box-shadow: 0px 4px 20px rgba(12, 116, 196, 0.6);
  overflow: hidden;

  > p {
    color: #a0a0b3;
    font-size: 1rem;
    margin: 0;
  }

  .score {
    color: #dcdcdc;
    font-size: 2rem;
    margin: 15px 0;
    font-weight: bold;
  }

  h1 {
    font-family: "Fascinate Inline", sans-serif;
    background-image: linear-gradient(180deg, #1e1ed4, #9a9999);
    background-clip: text;
    color: transparent;
    font-size: 2.7rem;
    text-align: center;
    margin: 20px 0;
    filter: drop-shadow(3px 3px 5px rgba(0, 0, 0, 0.7));
  }

  .start,
  .next {
    cursor: pointer;
    background: linear-gradient(180deg, #b1bbd5, #869ef5);
    border: none;
    box-shadow: 0px 4px 15px rgba(41, 41, 64, 0.6);
    border-radius: 12px;
    height: 50px;
    margin: 15px 0;
    padding: 0 30px;
    font-size: 1.1rem;
    color: #111a58;
    font-weight: bold;
    transition: all 0.3s ease;

    &:hover {
      background: linear-gradient(180deg, #0629ab, #a3c9d4);
      transform: scale(1.05);
    }

    &:active {
      transform: scale(0.95);
    }
  }

  .start {
    max-width: 200px;
  }

  @media (max-width: 768px) {
    width: 80%;
    height: 70vh;

    h1 {
      font-size: 2.2rem;
    }

    .score {
      font-size: 1.8rem;
    }

    .start,
    .next {
      font-size: 1rem;
      padding: 0 20px;
    }
  }

  @media (max-width: 480px) {
    width: 90%;
    height: 60vh;
    padding: 20px;

    h1 {
      font-size: 1.8rem;
    }

    .score {
      font-size: 1.5rem;
    }

    .start,
    .next {
      font-size: 0.9rem;
      height: 45px;
    }
  }
`;
